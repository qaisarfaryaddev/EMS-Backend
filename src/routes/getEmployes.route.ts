import express from 'express';
import { getEmploye } from '../controllers/getEmploye.Controller';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/',authenticate,getEmploye);

export default router;
