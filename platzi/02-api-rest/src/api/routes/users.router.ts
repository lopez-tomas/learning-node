import { HttpStatusCode } from '../interfaces/global';
import { createUserSchema, getUserSchema, updateUserSchema } from '../interfaces/users/user.dto';

import { UsersService } from '../services';
import { validatorHandler } from '../middlewares/validator.handler';

import express, { Router, Request, Response, NextFunction } from 'express';

const router: Router = express.Router();
const service = new UsersService();

router.get('/', async (req: Request, res: Response) => {
  const users = await service.get();
  res.status(HttpStatusCode.OK).json(users);
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const user = service.getUser(id);
      res.status(HttpStatusCode.OK).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
      const newUser = service.create(body);
      res.status(HttpStatusCode.CREATED).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const user = service.update(id, body);
      res.status(HttpStatusCode.OK).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const response = service.delete(id);
      res.status(HttpStatusCode.OK).json({
        message: 'user deleted',
        response
      });
    } catch (error) {
      next(error);
    }
  }
);

export{
  router
}
