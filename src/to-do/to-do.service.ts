import { ToDo } from '../models/to-do.schema';
import { Injectable, Inject,  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import {Errors} from '../common/error/errors'

@Injectable()
export class ToDoService {
    constructor(
        @InjectModel('ToDo') private toDoModel: Model <ToDo>
      ) {}
    
    async createToDo(toDo: CreateToDoDto){
        const response = await this.toDoModel.create(toDo);
        console.log("creating toDo", response);
        return response
    }
    
    async getToDo(id:string){
        const response = await this.toDoModel.findOne({id:id});
        console.log("found toDo", response);
        return response;
    }
    async getAllToDo(creatorUsername:string){
        // const response = await this.toDoModel.find({deleted: false, creatorUsername: creatorUsername});
        const response = await this.toDoModel.find().or([
            {deleted: false, creatorUsername: creatorUsername},
            {deleted: false, userName: creatorUsername}
          ]).exec();
        return {
            success: true,
            data: response,
        }
    }
    async updateToDo(id: string, toDoData: UpdateToDoDto){
        const toDo = await this.toDoModel.findOne({_id:id});
        if(!toDo){
            Errors.ENTITY_NOT_FOUND.throw();
        }
        Object.assign(toDo, {
			...{
				...toDoData,
			},
        });
        const resp = await toDo.save();
        return resp;
    }
    async deleteToDo(id: string){
        const toDo = await this.toDoModel.findOne({_id:id});
        if(!toDo){
            Errors.ENTITY_NOT_FOUND.throw();
        }
        toDo.deleted = true;
        const resp = await toDo.save();
        return resp;
    }
    async deleteToDoFromDB(id: string){
        const response = await this.toDoModel.deleteOne({_id: id});
        console.log("resp", response);
        return response;
    }
}