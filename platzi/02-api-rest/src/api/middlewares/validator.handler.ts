import { Request, Response, NextFunction } from 'express'
import Joi from 'joi';
import boom from '@hapi/boom';

export const validatorHandler = (schema: Joi.ObjectSchema, property: keyof Request) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property]; // dynamic property => req.body; req.params; req.query

    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error.message));
    }
    next();
  }
}
