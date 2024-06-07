import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { createTodoDto } from './dto/create-todo';
import { updateTodoDto } from './dto/update-todo';
import { TodosService } from './todos.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Todo } from './todos.model';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @ApiOperation({ summary: 'Create todo' })
  @ApiResponse({ status: 200, type: Todo })
  @Post()
  create(@Body() todoDto: createTodoDto) {
    return this.todosService.createTodo(todoDto);
  }

  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({ status: 200, type: [Todo] })
  @Get()
  getAll() {
    return this.todosService.getAllTodos();
  }

  @ApiOperation({ summary: 'Update todo' })
  @ApiResponse({ status: 200, type: Todo })
  @Put(':id')
  update(@Param('id') id: string, @Body() todoDto: updateTodoDto) {
    return this.todosService.updateTodoById(id, todoDto);
  }

  @ApiOperation({ summary: 'Delete todo' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.deleteTodoById(id);
  }
}
