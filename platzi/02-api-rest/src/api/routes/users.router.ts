import express, { Router, Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../interfaces/global';
import { UsersService } from '../services';

const router: Router = express.Router();
const service = new UsersService();

router.get('/', (req: Request, res: Response) => {
  const users = service.get();
  res.status(HttpStatusCode.OK).json(users);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const user = service.getUser(id);
    res.status(HttpStatusCode.OK).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  try {
    const newUser = service.create(body);
    res.status(HttpStatusCode.CREATED).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const user = service.update(id, body);
    res.status(HttpStatusCode.OK).json(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
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

});

export{
  router
}
