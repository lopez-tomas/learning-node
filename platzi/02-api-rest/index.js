const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Peter Parker',
      email: 'spider@man.com',
    },
    {
      id: 2,
      name: 'Anthony Stark',
      email: 'iron@man.com',
    },
    {
      id: 1,
      name: 'Reed Richards',
      email: 'mr@fantastic.com',
    },
  ]);
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
        id: 1,
        date: new Date(),
        products: [
          {
            id: 1,
            name: 'Product 1',
            price: 1200,
            isNew: false,
            tags: [],
          }
        ],
        total: 1200,
        payMethod: 'MercadoPago',
      },
      {
        id: 2,
        date: new Date(),
        products: [
          {
            id: 1,
            name: 'Product 1',
            price: 1200,
            isNew: false,
            tags: [],
          },
          {
            id: 2,
            name: 'Product 2',
            price: 800,
            isNew: true,
            tags: ['random', 'tech'],
          }
        ],
        total: 2000,
        payMethod: 'Cash',
      },
    ]
  });
});

app.get('/users/:userId/orders/:orderId', (req, res) => {
  const { userId, orderId } = req.params;
  res.json({
    userId,
    orderId,
    date: new Date(),
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 1200,
        isNew: false,
        tags: [],
      }
    ],
    total: 1200,
    method: 'MP',
  });
});

app.get('/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Xbox One controller',
      price: 16500,
      isNew: true,
      tags: ['gaming', 'controller', 'xbox']
    },
    {
      id: 2,
      name: 'PS4 controller',
      price: 15800,
      isNew: false,
      tags: ['gaming', 'controller', 'ps4', 'playstation']
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Another product',
    price: 1200,
    isNew: true,
    tags: []
  });
});

app.get('/categories', (req, res) => {
  res.json([
    {
      id: 1,
      category: 'Gaming'
    },
    {
      id: 2,
      category: 'Food',
    },
    {
      id: 3,
      category: 'Tools',
    }
  ]);
});

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Another category',
  });
});

app.get('/categories/:id/products/', (req, res) => {
  const { id } = req.params;
  res.json({
    categoryId: id,
    name: 'Another product 2',
    price: 800,
    isNew: false,
    tags: []
  })
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
