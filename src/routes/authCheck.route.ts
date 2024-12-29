import express,{Request,Response} from 'express';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

// Apply authenticate middleware to specific routes
router.get('/',authenticate,  (req:Request, res:Response) => {
  res.send('Authenticated successfully');
});

export default router;
