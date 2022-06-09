const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', (req, res) => {
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

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'John Doe',
    email: 'john@doe.com',
  });
});

app.get('/users/:id/orders', (req, res) => {
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

app.get('/users/:userId/orders/:orderId', (req, res) => {
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

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for(let i=0; i < limit; i++) {
    products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('I am a filter');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
  });
});


app.get('/categories', (req, res) => {
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

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.department(),
  });
});

app.get('/categories/:id/products/', (req, res) => {
  const { id } = req.params;
  res.json({
    categoryId: id,
    name: faker.commerce.department(),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
