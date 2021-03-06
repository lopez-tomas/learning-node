import { HttpStatusCode } from '../interfaces/global';
import { createProductSchema, getProductSchema, updateProductSchema } from '../interfaces/products';

import { ProductsService } from '../services';
import { validatorHandler } from '../middlewares/validator.handler';

import express, { Router, Request, Response, NextFunction } from 'express';

const router: Router = express.Router();
const service = new ProductsService();

router.get('/', async (req: Request, res: Response) => {
  const products = await service.get();
  res.status(HttpStatusCode.OK).json(products);
});

router.get('/filter', (req: Request, res: Response) => {
  res.send('I am a filter');
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const product = await service.getProduct(id);
      res.status(HttpStatusCode.OK).json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req: Request, res: Response) => {
    const body = req.body;
    const newProduct = await service.create(body);

    res.status(HttpStatusCode.CREATED).json(newProduct);
  }
);

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const body = req.body;

    try {
      const product = await service.update(id, body);
      res.status(HttpStatusCode.ACCEPTED).json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const response = await service.delete(id);
      res.status(HttpStatusCode.OK).json({
        message: 'product deleted',
        response
      });
    } catch (error) {
      next(error);
    }
  }
);

export {
  router
}
