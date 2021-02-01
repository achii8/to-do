import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Routes, RouterModule } from "nest-router";
import { ToDoController } from './to-do/to-do.controller';
import { ToDoModule } from './to-do/to-do.module';
import { ErrorMiddleware } from './middleware/error';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    ToDoModule,
    MongooseModule.forRoot('mongodb+srv://userName:paroli@a1.xsw32.mongodb.net/to-do?retryWrites=true&w=majority')],
    // controllers: [AppController],
    // providers: [AppService],
    
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, ErrorMiddleware)
      .forRoutes('to-do');
  }
}