import { HttpStatusCode } from '../interfaces/global';
import { createCategorySchema, getCategorySchema, updateCategorySchema } from '../interfaces/categories/category.dto';

import { CategoriesService } from '../services';
import { validatorHandler } from '../middlewares/validator.handler';

import express, { Router, Request, Response, NextFunction } from 'express';

const router: Router = express.Router();
const service = new CategoriesService();

router.get('/', async (req: Request, res: Response) => {
  const categories = await service.get();
  res.status(HttpStatusCode.OK).json(categories);
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const category = await service.getCategory(id);
      res.status(HttpStatusCode.OK).json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
      const newCategory = await service.create(body);
      res.status(HttpStatusCode.CREATED).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const body = req.body;

    try {
      const category = await service.update(id, body);
      res.status(HttpStatusCode.OK).json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const response = await service.delete(id);
      res.status(HttpStatusCode.OK).json({
        message: "category deleted",
        response
      });
    } catch (error) {
      next(error);
    }
  }
);

export {
  router
}
