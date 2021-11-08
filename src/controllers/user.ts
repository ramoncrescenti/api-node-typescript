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
    password: string;
    phone: {
      ddd: number;
      number: number;
    }
  };
}

export async function signUp(
  { body }: ValidatedRequest<SignUpRequestSchema>,
  res: Response
) {
  const user: UserParams = {
    name: body.name,
    email: body.email,
    password: body.password,
    phone: {
      ddd: body.phone.ddd,
      number: body.phone.number
    }
  };
  const retorno = createUserService(user);
  res.status(201).json(retorno);
}

export const validator = createValidator({ passError: true });
