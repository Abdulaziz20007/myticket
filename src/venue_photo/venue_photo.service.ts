import { Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenuePhoto } from "./model/venue_photo.model";
import AWS from "aws-sdk";

@Injectable()
export class VenuePhotoService {
  AWS_S3_BUCKET = "chelakpromax";
  s3 = new AWS.S3({
    accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
    secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
  });

  constructor(
    @InjectModel(VenuePhoto) private venuePhotoModel: typeof VenuePhoto
  ) {}
  create(createVenuePhotoDto: CreateVenuePhotoDto, file: any) {
    const { originalname } = file;

    return this.venuePhotoModel.create(createVenuePhotoDto);
  }


  findAll() {
    return this.venuePhotoModel.findAll();
  }

  findOne(id: number) {
    return this.venuePhotoModel.findByPk(id);
  }

  update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoModel.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.venuePhotoModel.destroy({ where: { id } });
  }
}
