import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from "../interfaces/global";

const logErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('logErrors');
  console.error(err);
  next(err);
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('errorHandler');
  res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    message: err.message,
    stack: err.stack
  });
}

export {
  logErrors,
  errorHandler,
}
