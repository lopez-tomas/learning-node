import { Router, Express } from 'express';

import { router as usersRouter } from './users.router';
import { router as productsRouter } from './products.router';
import { router as categoriesRouter } from './categories.router';

const routerApi = (app: Express) => {
  const router: Router = Router();
  app.use('/api/v1', router);

  router.use('/users', usersRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
}

export default routerApi;
