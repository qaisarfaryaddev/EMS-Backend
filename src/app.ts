import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import router from './routes'

const app: Application = express();


// parse json request body
app.use(express.json());
app.use(cors());

// Other middleware and routes
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());



app.use('/api/v1', router);

// app.use((req: Request, res: Response, next: NextFunction) => {
//     next( 'Not found');
//   });


export default app;