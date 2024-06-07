import { ApiProperty } from '@nestjs/swagger';

export class updateTodoDto {
  @ApiProperty({ example: 'text', description: 'текст todo', required: false })
  text?: string;

  @ApiProperty({
    example: 'false',
    description: 'выполнено/не выполнено',
    required: false,
  })
  isChecked?: boolean;
}
