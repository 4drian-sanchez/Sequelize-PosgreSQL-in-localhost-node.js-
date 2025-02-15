import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true, // Crea createdAt y updatedAt automáticos
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;
}