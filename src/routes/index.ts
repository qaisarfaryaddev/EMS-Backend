import express from 'express';
import loginRoute from './login.route';
import logoutRoute from './logout.route';
import authCheck from './authCheck.route';


const router = express.Router();

const defaultRoute = [
    {
        path: '/login',
        route: loginRoute
    },
    {
        path:'/auth-check',
        route:authCheck
    },
    {
        path:'/logout',
        route: logoutRoute
    }
];

defaultRoute.forEach(route => {
    router.use(route.path, route.route);
  });
  
  export default router;
