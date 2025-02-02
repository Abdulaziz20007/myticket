export class CreateAdminDto {
  name: string;
  email: string;
  hashed_password: string;
  is_creator: boolean;
}
