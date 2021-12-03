import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import User from '../models/user';
import * as tokenService from '../services/token';

const checkValidations = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(errors);
  }
  return next();
};

// req.body checks

const userNameRequired = check('userName', 'Username is required').notEmpty();
const emailRequired = check('email', 'Email is required').notEmpty();
const validEmail = check('email', 'A valid email is required').isEmail();
const passwordRequired = check('password', 'Password is required').notEmpty();
const emailIsNew = check('email').custom(async (email) => {
  const userFound = await User.findOne({ email }, { email: 1 });
  if (userFound) {
    throw new Error('The email provided is already taken. Try with another');
  }
});
// req.headers checks

const tokenRequired = check('authorization', 'token is required').notEmpty();

const isValidToken = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token:string = req.headers.authorization.split(' ')[1];
    tokenService.verifyToken(token);
    next();
  } catch (error) {
    res.json('invalid or expired token');
  }
};

// validation groups

export const postRegisterValidations = [
  userNameRequired,
  emailRequired,
  validEmail,
  emailIsNew,
  passwordRequired,
  checkValidations];

export const postLoginValidations = [emailRequired, validEmail, passwordRequired, checkValidations];

export const tokenValidations = [tokenRequired, checkValidations, isValidToken];
