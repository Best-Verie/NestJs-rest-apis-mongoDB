import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import {MongooseModule} from '@nestjs/mongoose'

import config from './config/keys'
@Module({
  imports: [TasksModule, MongooseModule.forRoot(config.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
