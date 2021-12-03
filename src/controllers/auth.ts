import { Request, Response } from 'express';
import * as userService from '../services/user';
import * as tokenService from '../services/token';

export const signInController = (req: Request, res: Response) => {
  const userData = req.body;
  try {
    userService.createUser(userData).then((creation) => creation && res.json('User created successfully, please log in'));
  } catch (error) {
    res.json('internal Server Error, try again later');
  }
};

export const logInController = async (req: Request, res: Response) => {
  const externalCredentials = req.body;
  try {
    const { userName, email } = await userService.getOneUserByEmail(externalCredentials.email);
    const match = await userService.verifyPassword(email, externalCredentials.password);
    if (match) {
      const token = tokenService.generateToken({ userName, email });
      res.json({
        userName,
        email,
        token,
      });
    } else res.json('Invalid credentials, try another');
  } catch (error) {
    res.json('internal Server Error, try again later');
  }
};
