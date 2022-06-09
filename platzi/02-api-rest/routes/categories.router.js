const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    category: faker.commerce.department(),
  });
});

router.get('/:id/products/', (req, res) => {
  const { id } = req.params;
  res.json({
    categoryId: id,
    name: faker.commerce.department(),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['test', 'random', 'prueba'], 2),
  });
});

module.exports = router;
