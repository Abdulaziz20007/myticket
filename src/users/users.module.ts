import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { UserRole } from './model/user-role-model';
import { Role } from 'src/roles/model/role.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports:[
    RolesModule,
    SequelizeModule.forFeature([User,UserRole,Role])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
