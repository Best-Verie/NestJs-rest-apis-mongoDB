import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Module } from '@nestjs/common';
import { TasksClass, tasksSchema} from './schemas/tasks.schema'
import {MongooseModule} from '@nestjs/mongoose'
@Module({
    imports:[
        MongooseModule.forFeature([
        {name: TasksClass.name, schema: tasksSchema}
    ])
],
    controllers:[TasksController],
    providers:[TasksService]
})
export class TasksModule { }
