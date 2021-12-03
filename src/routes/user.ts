import { Router } from 'express';
import listUsersController from '../controllers/user';
import { tokenValidations } from '../middlewares/auth';

const router = Router();

router.get('/users', tokenValidations, listUsersController);

export default router;
