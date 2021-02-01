import * as mongoose from 'mongoose';
import {ToDoTypeEnum} from "../common/to-do-type.enum";

export const ToDoSchema = new mongoose.Schema({
   name: {
       type: String, required: true
    },
   description: {
       type: String,
    },
   userName: {
       type: String,
    },
    type: {
        type: String, 
        // enum: ToDoTypeEnum, 
        enum: ["TO_DO","IN_PROGRESS","DONE"], 
        default: "TO_DO"
        // default: ToDoTypeEnum.TO_DO
    },
    time:{
        type: Number,
    },
    deleted:{
        type: Boolean,
        default: false,
    },
    creatorUsername: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
});
export interface ToDo extends mongoose.Document {
    name: string;
    creatorUsername: string;
    description: string;
    userName: string;
    type?: ToDoTypeEnum;
    time: number;
    deleted?:boolean;
}