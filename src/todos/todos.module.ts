import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todos.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [
    SequelizeModule.forFeature([Todo]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'todojs'),
      exclude: ['/api*'],
    }),
  ],
})
export class TodosModule {}
