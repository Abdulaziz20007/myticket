import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

import { Role } from "../../roles/model/role.model";
import { UserRole } from "./user-role-model";

interface IUserCreationAttr {
  name: string;
  email: string;
  password: string;
  value: string;
}

@Table({ tableName: "user" })
export class User extends Model<User, IUserCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
  })
  name: string;

  @Column({
    type: DataType.STRING(50),
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  value: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
