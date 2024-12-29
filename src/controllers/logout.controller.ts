import { Request,Response } from "express";

export const logout = async (req:Request, res:Response): Promise<any> => {
    res.clearCookie("token");
    res.status(200).json({
        success: true,
        message:"Logged out Successfully!"
    })

}