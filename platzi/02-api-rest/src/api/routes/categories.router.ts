import express, { Router, Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { HttpStatusCode } from '../interfaces/global';
import CategoriesService from '../services/category.service';

const router: Router = express.Router();
const service = new CategoriesService();

router.get('/', (req: Request, res: Response) => {
  const categories = service.get();
  res.status(HttpStatusCode.OK).json(categories);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const category = service.getCategory(id);
    res.status(HttpStatusCode.OK).json(category);
  } catch (error) {
    if (error instanceof Error) {
      res.status(HttpStatusCode.NOT_FOUND).json({
        message: error.message
      });
    }
  }
});

router.get('/:id/products/', (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(HttpStatusCode.OK).json({
    categoryId: id,
    products: [
      {
        name: faker.commerce.department(),
        price: parseFloat(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
      },
      {
        categoryId: id,
        name: faker.commerce.department(),
        price: parseFloat(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
      },
    ],
  });
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;

  try {
    const newCategory = service.create(body);
    res.status(HttpStatusCode.CREATED).json(newCategory);
  } catch (error) {
    if (error instanceof Error) {
      res.status(HttpStatusCode.NOT_FOUND).json({
        message: error.message
      });
    }
  }
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const category = service.update(id, body);
    res.status(HttpStatusCode.OK).json(category);
  } catch (error) {
    if (error instanceof Error) {
      res.status(HttpStatusCode.NOT_FOUND).json({
        message: error.message
      });
    }
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = service.delete(id);
    res.status(HttpStatusCode.OK).json({
      message: "category deleted",
      response
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(HttpStatusCode.NOT_FOUND).json({
        message: error.message
      });
    }
  }
});

export {
  router
}
