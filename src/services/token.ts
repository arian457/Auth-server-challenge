import { verify, sign } from 'jsonwebtoken';
import { responseUser } from '../interfaces';

require('dotenv').config();

const { TOKEN_SECRET } = process.env;

export const generateToken = (userData: responseUser) => {
  const token = sign(userData, TOKEN_SECRET, { expiresIn: '24h' });
  return token;
};

export const verifyToken = (token: string) => {
  const verification = verify(token, TOKEN_SECRET);
  if (verification) return verification;
  return false;
};
