import { Router } from 'express';
import { postLoginValidations, postRegisterValidations } from '../middlewares/auth';
import { logInController, signInController } from '../controllers/auth';

const router = Router();
const signInRoute = router.post('/signin', postRegisterValidations, signInController);
const logInRoute = router.post('/login', postLoginValidations, logInController);

router.use('/auth', [signInRoute, logInRoute]);

export default router;
