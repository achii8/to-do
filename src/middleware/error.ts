import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ErrorMiddleware implements NestMiddleware {
  use( req: Request, res: Response, next: Function) {
    console.log("heree")
    if(req.method=='PUT'){
      console.log("achi");
    }
    console.log("i can see me cry!!! ):");
    next();
  }
}
