import { Controller , Get, Post, Param, Body } from '@nestjs/common';
import {TasksService} from './tasks.service' ;
import {Tasks} from './interfaces/tasks.interface';
import {createTaskDto} from './Dto/tasks.dto'
import { Delete } from '@nestjs/common';
import { Put } from '@nestjs/common';
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService:TasksService, ){}
    @Get()
    async findAll():Promise<Tasks[]>{
        return this.tasksService.findAllTasks(); 
    }

    @Get(':id')
    async findOne(@Param('id') id):Promise<Tasks>{
        return this.tasksService.findOneTask(id)
    }

    @Post()
    async create(@Body() createTaskDto: createTaskDto):Promise<Tasks>{
      return this.tasksService.createTask(createTaskDto);
    }

    @Put()
    async update( @Param('id') id, @Body() createTaskDto: createTaskDto):Promise<Tasks>{
      return this.tasksService.updateTask(id, createTaskDto);
    }

    @Delete(':id')
    async delete(@Param('id') id):Promise<Tasks>{
        return this.tasksService.deleteTask(id);
    }
}
