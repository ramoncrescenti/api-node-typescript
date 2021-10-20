import { Express } from 'express';
import { bootstrap } from './express';

const port = process.env.PORT ?? 3000;

bootstrap().then((_app: Express) => {
  _app.listen(port, () => console.log(`Rodando na porta ${port}`));
});
