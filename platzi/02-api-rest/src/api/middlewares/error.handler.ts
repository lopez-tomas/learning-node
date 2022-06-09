import { Boom } from "@hapi/boom";
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

const boomErrorHandler = (err: Boom, req: Request, res: Response, next: NextFunction) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }

  next(err as Error);
}

export {
  logErrors,
  errorHandler,
  boomErrorHandler,
}
