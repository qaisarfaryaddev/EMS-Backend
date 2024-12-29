import express from 'express';
import  {loginController}  from '../controllers/login.controller';

const router = express.Router();

router.post('/',loginController);

export default router;
