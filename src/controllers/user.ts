import { Response } from 'express';
import {
  ContainerTypes,
  ValidatedRequestSchema,
  ValidatedRequest,
  createValidator,
} from 'express-joi-validation';
import { createUser } from '../services/user';

interface SignUpRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    name: string;
    email: string;
  };
}

async function signUp(
  req: ValidatedRequest<SignUpRequestSchema>,
  res: Response
) {
  const user: object = {
    name: req.body.name,
    email: req.body.email,
    situacao: 'CADASTRADO',
  };
  // const retorno = await createUser(user);
  res.status(201).json(user);
}

const validator = createValidator({ passError: true });

export { signUp, validator };
