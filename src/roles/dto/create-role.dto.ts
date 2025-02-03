import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({
    description: "Rol qiymati",
    example: "ADMIN",
  })
  value: string;

  @ApiProperty({
    description: "Rol haqida ma'lumot",
    example: "Tizim administratori",
  })
  description: string;
}
