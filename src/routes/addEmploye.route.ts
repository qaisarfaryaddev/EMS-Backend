import express from 'express';
import  {addEmployeController}  from '../controllers/addEmploye.controller';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/',addEmployeController);

export default router;
