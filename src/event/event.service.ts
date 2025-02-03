import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./model/event.model";
import { Lang } from "src/lang/models/lang.model";
import * as AWS from "aws-sdk";

@Injectable()
export class EventService {
  AWS_S3_BUCKET = "chelakpromax";
  s3 = new AWS.S3({
    accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
    secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
  });

  constructor(
    @InjectModel(Event) private eventModel: typeof Event,
    @InjectModel(Lang) private langModel: typeof Lang
  ) {}

  async create(
    createEventDto: CreateEventDto,
    file: Express.Multer.File | undefined
  ) {
    let photoUrl = "";

    if (file) {
      const s3Response = await this.s3_upload(
        file.buffer,
        this.AWS_S3_BUCKET,
        file.originalname,
        file.mimetype
      );
      photoUrl = s3Response.Location;
    }

    return this.eventModel.create({
      ...createEventDto,
      photo: photoUrl,
    });
  }

  async s3_upload(file: any, bucket: any, name: any, mimetype: any) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ContentType: mimetype,
      ContentDisposition: "inline",
      CreateBucketConfiguration: {
        LocationConstraint: "ap-south-1",
      },
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  findAll() {
    return this.eventModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.eventModel.findByPk(id);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventModel.update(updateEventDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.eventModel.destroy({ where: { id } });
  }
}
