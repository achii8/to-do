import { Controller, Get, Req, Post, UseGuards, Body, Param, Patch, Delete  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Errors } from "../common/error/errors";
import { ToDoService } from './to-do.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';


@Controller('to-do')
export class ToDoController {
    constructor(private readonly toDoService: ToDoService) {}
    @Post()
    async create(@Body() toDoData: CreateToDoDto) {
      console.log("started in service")
      return await this.toDoService.createToDo(toDoData);
    }
    @Get("get-all-to-do/:creatorUsername")
    findAll(@Param("creatorUsername") creatorUsername: string
    ){
      return this.toDoService.getAllToDo(creatorUsername);
    }
    @Get(":creatorUsername/:id")
    findById(@Param("id") id: string){
      return this.toDoService.getToDo(id);
    }
    
    @Patch(":id")
    updateToDo(@Param("id") id: string,
    @Body() updateToDoBody: UpdateToDoDto
    ){
      return this.toDoService.updateToDo(id, updateToDoBody);
    }
    @Patch("delete/:id")
    deleteToDo(@Param("id") id: string
    ){
      return this.toDoService.deleteToDo(id);
    }
    @Delete(":id")
    deleteToDoFromDB(@Param("id") id: string
    ){
      return this.toDoService.deleteToDoFromDB(id);
    }
}
