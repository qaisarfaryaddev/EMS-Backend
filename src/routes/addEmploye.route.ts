import express from 'express';
import  {addEmployeController}  from '../controllers/addEmploye.controller';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/',authenticate,addEmployeController);

export default router;
