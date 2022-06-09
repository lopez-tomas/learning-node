import express, { Request, Response } from 'express';
import routerApi from './api/routes';

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

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
