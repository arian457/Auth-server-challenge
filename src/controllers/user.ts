import { Request, Response } from 'express';
import * as userService from '../services/user';

const listUsersController = async (req: Request, res: Response) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.json(allUsers);
  } catch (error) {
    res.json('internal server error, please try again later');
  }
};

export default listUsersController;
