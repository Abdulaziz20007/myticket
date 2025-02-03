import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("photo", {
      fileFilter: (req, file, callback) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(file.originalname.toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (extname && mimetype) {
          callback(null, true);
        } else {
          callback(
            new BadRequestException("Faqat image filelar yuklash mumkin!"),
            false
          );
        }
      },
      limits: {
        fileSize: 2 * 1024 * 1024, // Maksimal fayl hajmi: 2MB
      },
    })
  )
  create(
    @UploadedFile() file: Express.Multer.File | undefined,
    @Body() createEventDto: CreateEventDto
  ) {
    return this.eventService.create(createEventDto, file);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(+id);
  }
}
