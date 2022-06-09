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
  const category = service.getCategory(id);

  if (category) {
    res.status(HttpStatusCode.OK).json(category);
  } else {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      message: 'category not found'
    });
  }
});

router.get('/:id/products/', (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(HttpStatusCode.OK).json({
    categoryId: id,
    name: faker.commerce.department(),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
  });
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  const newCategory = service.create(body);

  res.status(HttpStatusCode.CREATED).json(newCategory);
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body);

  res.status(HttpStatusCode.OK).json(category);
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id} = req.params;
  const response = service.delete(id);

  res.status(HttpStatusCode.OK).json({
    message: "category deleted",
    response
  });
});

export {
  router
}
