import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './user';

const router = Router();

router.use([authRoutes, userRoutes]);

export default router;
