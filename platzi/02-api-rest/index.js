const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/new-path', (req, res) => {
  res.send('Hi, I am a new path');
});

app.get('/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Xbox One controller',
      price: 16500,
      tags: ['gaming', 'controller', 'xbox']
    },
    {
      id: 2,
      name: 'PS4 controller',
      price: 15800,
      tags: ['gaming', 'controller', 'ps4', 'playstation']
    }
  ]);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
