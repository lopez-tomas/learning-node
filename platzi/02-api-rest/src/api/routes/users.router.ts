import express, { Router, Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { HttpStatusCode } from '../interfaces/status';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.status(HttpStatusCode.OK).json([
      {
        id: faker.datatype.uuid(),
        name: 'Peter Parker',
        email: 'spider@man.com',
      },
      {
        id: faker.datatype.uuid(),
        name: 'Anthony Stark',
        email: 'iron@man.com',
      },
      {
        id: faker.datatype.uuid(),
        name: 'Reed Richards',
        email: 'mr@fantastic.com',
      },
    ]);
  }
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(HttpStatusCode.OK).json({
    id,
    name: 'John Doe',
    email: 'john@doe.com',
  });
});

router.get('/:id/orders', (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(HttpStatusCode.OK).json({
    userId: id,
    orders: [
      {
        id: faker.datatype.uuid(),
        date: faker.date.recent(),
        products: [
          {
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price()),
            isNew: faker.datatype.boolean(),
            tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
          }
        ],
        total: parseFloat(faker.commerce.price()),
        method: faker.helpers.arrayElement(['Mercado Pago', 'Efectivo', 'Transferencia', 'Bitcoin']),
      },
      {
        id: faker.datatype.uuid(),
        date: faker.date.recent(),
        products: [
          {
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price()),
            isNew: faker.datatype.boolean(),
            tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
          },
          {
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price()),
            isNew: faker.datatype.boolean(),
            tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
          }
        ],
        total: parseFloat(faker.commerce.price()),
        method: faker.helpers.arrayElement(['Mercado Pago', 'Efectivo', 'Transferencia', 'Bitcoin']),
      },
    ]
  });
});

router.get('/:userId/orders/:orderId', (req: Request, res: Response) => {
  const { userId, orderId } = req.params;

  res.status(HttpStatusCode.OK).json({
    userId,
    orderId,
    date: faker.date.recent(),
    products: [
      {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
      }
    ],
    total: parseFloat(faker.commerce.price()),
    method: faker.helpers.arrayElement(['Mercado Pago', 'Efectivo', 'Transferencia', 'Bitcoin']),
  });
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  res.status(HttpStatusCode.CREATED).json({
    "message": "created",
    "data": body
  });
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  res.status(HttpStatusCode.OK).json({
    "message": "updated",
    "data": body,
    id
  })
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(HttpStatusCode.OK).json({
    "message": "deleted",
    id
  });
});

export{
  router
}
