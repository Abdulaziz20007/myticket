import { Table, Column, Model, DataType } from "sequelize-typescript";

interface IAdminCreationAttr {
  name: string;
  login: string;
  hashedPassword: string;
  isActive: boolean;
  isCreator: boolean;
  hashedRefreshToken: string;
}

@Table({ tableName: "admin", timestamps: true })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  login: string;

  @Column({ type: DataType.STRING })
  hashedPassword: string;

  @Column({ type: DataType.BOOLEAN })
  isActive: boolean;

  @Column({ type: DataType.BOOLEAN })
  isCreator: boolean;

  @Column({ type: DataType.STRING })
  hashedRefreshToken: string;
}
