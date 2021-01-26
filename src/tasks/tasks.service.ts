import { Injectable } from '@nestjs/common';
import {Tasks} from './interfaces/tasks.interface'
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import {TasksClass} from './schemas/tasks.schema'
@Injectable()
export class TasksService {
    constructor(
        @InjectModel(TasksClass.name)
        private taskModel: Model<TasksClass>,
      ) {}
    
    async findAllTasks():Promise<Tasks[]>{
        return await this.taskModel.find() ;
    }

    async findOneTask(id:string):Promise<Tasks>{
        return await this.taskModel.findOne({_id:id});
    }

    async createTask(task:Tasks):Promise<Tasks>{
        const newTask= new this.taskModel(task);
        return await newTask.save();
    }
    async deleteTask(id:string):Promise<Tasks>{
        return this.taskModel.findByIdAndRemove(id);
    }

    async updateTask(id:string, task:Tasks): Promise<Tasks>{
        return await this.taskModel.findByIdAndUpdate(id, task, {new:true});
    }
}
