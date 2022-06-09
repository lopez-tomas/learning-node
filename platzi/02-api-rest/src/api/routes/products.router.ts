import express, { Router, Request, Response } from 'express';
const { faker } = require('@faker-js/faker');

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
  res.json(products);
});

router.get('/filter', (req: Request, res: Response) => {
  res.send('I am a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
  });
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'partial update',
    data: body,
    id,
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  });
});

export {
  router
}
