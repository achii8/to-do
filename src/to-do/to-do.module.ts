// import { ToDoController } from "./to-do.controller";
import { ToDoService } from "./to-do.service";
import { ToDoController} from "./to-do.controller";
import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ToDoSchema } from "../models/to-do.schema";

@Module({
    imports: [
      MongooseModule.forFeature([{name: 'ToDo', schema: ToDoSchema}]),
    ],
    controllers: [ ToDoController],
    providers: [ToDoService],
    exports: [ToDoService],
  })
  export class ToDoModule {
  }
