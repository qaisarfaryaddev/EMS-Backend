import express from 'express';
import { getEmploye } from '../controllers/getEmploye.Controller';

const router = express.Router();

router.get('/',getEmploye);

export default router;
