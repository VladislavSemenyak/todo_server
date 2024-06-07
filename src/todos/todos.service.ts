import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createTodoDto } from './dto/create-todo';
import { updateTodoDto } from './dto/update-todo';
import { Todo } from './todos.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

  async createTodo(dto: createTodoDto) {
    const todo = await this.todoRepository.create(dto);
    return todo;
  }

  async getAllTodos() {
    const todos = await this.todoRepository.findAll();
    return todos;
  }

  async updateTodoById(id: string, dto: updateTodoDto) {
    await this.todoRepository.update(dto, { where: { id } });
    return this.todoRepository.findByPk(id);
  }

  async deleteTodoById(id: string) {
    await this.todoRepository.destroy({ where: { id } });
    return { deleted: true };
  }
}
