import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document } from 'mongoose'
@Schema()
export class TasksClass extends Document {
  @Prop()
  title: string;
}
export const tasksSchema = SchemaFactory.createForClass(TasksClass); 
