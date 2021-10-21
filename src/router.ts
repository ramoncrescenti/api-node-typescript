import * as express from 'express';
import { userValidationSchema, emailValidationSchema } from './middlewares/validation';
import { signUp, validator } from './controllers/user';
import { sendMail } from './controllers/mail';

const router = express.Router();

router.get('/status', (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'OK' });
});

router.post('/signup', validator.body(userValidationSchema), signUp);

router.post('/sendmail', validator.body(emailValidationSchema), sendMail);

export { router };
