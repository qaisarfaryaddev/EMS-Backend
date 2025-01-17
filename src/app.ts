import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import router from './routes'
import cookieParser from 'cookie-parser';

const app: Application = express();



app.use(express.json());
const corsOptions = {
    //origin: 'http://localhost:5173',  
    origin: 'https://frontdeskmanagementsystem.vercel.app',  
    credentials: true,  
};

app.use(cors(corsOptions));

app.use(cookieParser());



app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());



app.use('/api/v1', router);

// app.use((req: Request, res: Response, next: NextFunction) => {
//     next( 'Not found');
//   });


export default app;