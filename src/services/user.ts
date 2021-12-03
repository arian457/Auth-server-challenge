import bcrypt from 'bcrypt';
import * as repository from '../utils/repository';
import { responseUser, creationUser } from '../interfaces';

const encryptPassword = (password: string): string => bcrypt.hashSync(password, 10);

export const createUser = async (userData: creationUser): Promise<boolean> => {
  try {
    userData.password = encryptPassword(userData.password);
    return repository.createPayload('User', userData).then((success) => success && true);
  } catch (error) {
    throw Error;
  }
};

export const verifyPassword = async (email: string, externalPassword: string): Promise<boolean> => {
  const { password } = await repository.findOneByParams('User', { email }, { password: 1 });
  const compare = bcrypt.compareSync(externalPassword, password);
  if (compare) return true;
  return false;
};

export const getOneUserByEmail = async (email: string): Promise<responseUser> => {
  try {
    const userFound = await repository.findOneByParams('User', { email }, { password: 0 });
    return userFound;
  } catch (error) {
    throw Error;
  }
};

export const getAllUsers = (): Promise<responseUser[]> => repository.findAll('User', {}, { password: 0, __v: 0 });
