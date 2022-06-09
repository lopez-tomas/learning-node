const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.json([
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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'John Doe',
    email: 'john@doe.com',
  });
});

router.get('/:id/orders', (req, res) => {
  const { id } = req.params;

  res.json({
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

router.get('/:userId/orders/:orderId', (req, res) => {
  const { userId, orderId } = req.params;

  res.json({
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

module.exports = router;
