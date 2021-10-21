// import { UserModel } from '../models/user';

export interface UserParams {
  name: string;
  email: string;
}
export function createUser(body: UserParams) {
  const user = {
    name: body.name,
    email: body.email,
    situacao: 'CADASTRADO'
  }
  return user;
  // return UserModel.create(body);
}

//export { createUser };
