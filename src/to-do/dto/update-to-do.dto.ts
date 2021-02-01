import {ToDoTypeEnum} from "../../common/to-do-type.enum";

export class UpdateToDoDto{
    name?: string;
    description?: string;
    time?: number;
    type?: ToDoTypeEnum
}