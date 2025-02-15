import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true, // Crea createdAt y updatedAt automáticos
})
class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
   declare name: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string
}

export default User