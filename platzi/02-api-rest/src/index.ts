import express, { Request, Response } from 'express';
import cors from 'cors';

import routerApi from './api/routes';
import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } from './api/middlewares/error.handler';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080', 'https://tomaslopez.dev', 'https://sheltered-reef-98122.herokuapp.com/'];
const options = {
  origin: (origin: any, callback: any) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else{
      callback(new Error('Origin not allowed: ' + origin))
    }
  }
}

app.use(cors(options));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/api', (req: Request, res: Response) => {
  res.send(`
    Routes:<br />
    /api/users<br />
    /api/products<br />
    /api/categories<br />
  `)
})

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
