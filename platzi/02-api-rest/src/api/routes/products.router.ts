import express, { Router, Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../interfaces/global';
import ProductsService from '../services/product.service';

const router: Router = express.Router();
const service = new ProductsService();

router.get('/', async (req: Request, res: Response) => {
  const products = await service.get();
  res.status(HttpStatusCode.OK).json(products);
});

router.get('/filter', (req: Request, res: Response) => {
  res.send('I am a filter');
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const product = await service.getProduct(id);
    res.status(HttpStatusCode.OK).json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(HttpStatusCode.CREATED).json(newProduct);
});

router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const product = await service.update(id, body);
    res.status(HttpStatusCode.ACCEPTED).json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
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

});

export {
  router
}
