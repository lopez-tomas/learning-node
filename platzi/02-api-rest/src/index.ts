import express, { Request, Response } from 'express';
import routerApi from './api/routes';

import { logErrors, errorHandler, boomErrorHandler } from './api/middlewares/error.handler';

const app = express();
const port = 3000;

app.use(express.json());

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
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
