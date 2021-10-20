import { UserModel } from '../models/user';

async function createUser(body: object) {
  return UserModel.create(body);
}

export { createUser };
