const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');

const routerApi = (app) => {
  app.use('/api/users', usersRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/categories', categoriesRouter);
}

module.exports = routerApi;
