import { Request, Response } from 'express';
import { LoginModel } from '../models/index';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie';

export const loginController = async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body;

    try {
        const user = await LoginModel.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        generateTokenAndSetCookie(res, user._id);

        res.status(200).json({
            success: true,
            message: "Login Successfully",
            user: {
                ...user.toObject(),
                password: undefined, // Remove the password from the response
            },
        });
    } catch (err) {
        console.error("Error in login:", err);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
