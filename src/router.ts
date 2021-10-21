import * as express from 'express';
import { signUp, validator } from './controllers/user';
import { validationSchema } from './middlewares/validation';

const router = express.Router();

router.get('/status', (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'OK' });
});

router.post('/signup', validator.body(validationSchema), signUp);

export { router };
