import { Request, Response } from 'express';
import { createUser } from '../services/user';

async function signUp(req: Request, res: Response) {
  const user: object = {
    name: req.body.name,
    email: req.body.email,
  };
  const retorno = await createUser(user);
  res.status(201).json(retorno);
}

export { signUp };
