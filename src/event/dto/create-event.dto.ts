import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({
    description: 'Tadbir nomi',
    example: 'Navruz bayrami'
  })
  name: string;

  @ApiProperty({
    description: 'Tadbir surati',
    example: 'event_photo.jpg'
  })
  photo: any;

  @ApiProperty({
    description: 'Tadbir boshlanish sanasi',
    example: '2024-03-21'
  })
  start_date: string;

  @ApiProperty({
    description: "Tadbir boshlanish vaqti",
    example: "18:00",
  })
  start_time: string;


  @ApiProperty({
    description: "Tadbir tugash sanasi",
    example: "2024-03-21",
  })
  finish_date: string;


  @ApiProperty({
    description: "Tadbir tugash vaqti",
    example: "22:00",
  })
  finish_time: string;


  @ApiProperty({
    description: "Tadbir haqida malumot",
    example: "Navro'z bayrami tantanali nishonlanishi",
  })
  info: string;


  @ApiProperty({
    description: "Tadbir turi ID raqami",
    example: 1,
  })
  eventTypeId: number;


  @ApiProperty({
    description: "Insonlar toifasi ID raqami",
    example: 1,
  })
  humanCategoryId: number;


  @ApiProperty({
    description: "Joy ID raqami",
    example: 1,
  })
  venueId: number;


  @ApiProperty({
    description: "Til ID raqami",
    example: 1,
  })
  langId: number;


  @ApiProperty({
    description: "Chipta sotuvga qo'yilish sanasi",
    example: "2024-02-21",
  })
  release_date: string;

}
