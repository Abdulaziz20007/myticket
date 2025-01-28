export class CreateAdminDto {
  name: string;
  login: string;
  hashedPassword: string;
  isActive: boolean;
  isCreator: boolean;
  hashedRefreshToken: string;
}
