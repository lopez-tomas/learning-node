import { Express } from 'express';

import { router as usersRouter } from './users.router';
import { router as productsRouter } from './products.router';
import { router as categoriesRouter } from './categories.router';

const routerApi = (app: Express) => {
  app.use('/api/users', usersRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/categories', categoriesRouter);
}

export default routerApi;
