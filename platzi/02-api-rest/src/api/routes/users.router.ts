import express, { Router, Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { HttpStatusCode } from '../interfaces/global';
import UsersService from '../services/user.service';

const router: Router = express.Router();
const service = new UsersService();

router.get('/', (req: Request, res: Response) => {
  const users = service.get();
  res.status(HttpStatusCode.OK).json(users);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const user = service.getUser(id);

  if (user) {
    res.status(HttpStatusCode.OK).json(user);
  } else {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      message: 'user not found'
    })
  }
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
  const newUser = service.create(body);

  res.status(HttpStatusCode.CREATED).json(newUser);
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);

  res.status(HttpStatusCode.OK).json(user);
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const response = service.delete(id);

  res.status(HttpStatusCode.OK).json({
    message: 'user deleted',
    response
  });
});

export{
  router
}
