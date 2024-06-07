import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TodoCreationAttrs {
  text: string;
  isChecked?: boolean;
}

@Table({ tableName: 'todo' })
export class Todo extends Model<Todo, TodoCreationAttrs> {
  @ApiProperty({ example: '1', description: 'уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'text', description: 'текст todo' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  text: string;

  @ApiProperty({ example: 'false', description: 'выполнено/не выполнено' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isChecked: boolean;
}
