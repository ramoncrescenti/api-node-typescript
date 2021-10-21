import { Response } from 'express';
import {
  ContainerTypes,
  ValidatedRequestSchema,
  ValidatedRequest,
  createValidator,
} from 'express-joi-validation';
import { createUser as createUserService, UserParams } from '../services/user';

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
  const user: UserParams = {
    name: req.body.name,
    email: req.body.email,
  };
  const retorno = createUserService(user);
  res.status(201).json(retorno);
}

const validator = createValidator({ passError: true });

export { signUp, validator };
