import { Request, Response, Router } from 'express';
import { signUp } from './controllers/user';

const router = Router();

router.get('/status', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' });
});

router.post('/signup', signUp);

export { router };
