import express, { Router, Request, Response } from 'express';
const { faker } = require('@faker-js/faker');
import { HttpStatusCode } from '../interfaces/status';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for(let i=0; i < limit; i++) {
    products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }
  res.status(HttpStatusCode.OK).json(products);
});

router.get('/filter', (req: Request, res: Response) => {
  res.send('I am a filter');
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === '999') {
    res.status(HttpStatusCode.NOT_FOUND).json({
      message: 'not found'
    });
  }else {
    res.status(HttpStatusCode.OK).json({
      id,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      isNew: faker.datatype.boolean(),
      tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
    });
  }
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  res.status(HttpStatusCode.CREATED).json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  res.status(HttpStatusCode.ACCEPTED).json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(HttpStatusCode.OK).json({
    message: 'delete',
    id,
  });
});

export {
  router
}
