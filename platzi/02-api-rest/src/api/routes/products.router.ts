import express, { Router, Request, Response } from 'express';
import { HttpStatusCode } from '../interfaces/global';
import ProductsService from '../services/product.service';

const router: Router = express.Router();
const service = new ProductsService();

router.get('/', (req: Request, res: Response) => {
  const products = service.get();
  res.status(HttpStatusCode.OK).json(products);
});

router.get('/filter', (req: Request, res: Response) => {
  res.send('I am a filter');
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const product = service.getProduct(id);

  if (product) {
    res.status(HttpStatusCode.OK).json(product);
  } else {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      message: 'product not found'
    });
  }
});

router.post('/', (req: Request, res: Response) => {
  const body = req.body;
  const newProduct = service.create(body);

  res.status(HttpStatusCode.CREATED).json(newProduct);
});

router.patch('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);

  res.status(HttpStatusCode.ACCEPTED).json(product);
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const response = service.delete(id);

  res.status(HttpStatusCode.OK).json({
    message: 'product deleted',
    response
  });
});

export {
  router
}
