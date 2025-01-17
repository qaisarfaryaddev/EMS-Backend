import express from 'express';


const router = express.Router();

router.get('/',(req,res)=>{
    res.send('testing routes')
});

export default router;
