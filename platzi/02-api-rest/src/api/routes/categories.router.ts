import express, { Router, Request, Response } from 'express';
import { faker } from '@faker-js/faker';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json([
    {
      id: faker.datatype.uuid(),
      category: faker.commerce.department(),
    },
    {
      id: faker.datatype.uuid(),
      category: faker.commerce.department(),
    },
    {
      id: faker.datatype.uuid(),
      category: faker.commerce.department(),
    },
  ]);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    id,
    category: faker.commerce.department(),
  });
});

router.get('/:id/products/', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    categoryId: id,
    name: faker.commerce.department(),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
  });
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  res.json({
    "message": "created",
    "data": body
  });
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    "message": "udpated",
    "data": body,
    id
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id} = req.params;
  res.json({
    "message": "deleted",
    id
  });
});

export {
  router
}
