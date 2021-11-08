// import { UserModel } from '../models/user';

export interface UserParams {
  name: string;
  email: string;
  password: string;
    phone: {
      ddd: number;
      number: number;
    }
}
export function createUser(body: UserParams) {
  return {
    name: body.name,
    email: body.email,
    password: body.password,
    phone: {
      ddd: body.phone.ddd,
      number: body.phone.number
    },
    situacao: 'CADASTRADO',
  }
  // return UserModel.create(body);
}
