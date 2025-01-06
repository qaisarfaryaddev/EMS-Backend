import jwt from 'jsonwebtoken';
import { Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}

export const generateTokenAndSetCookie = (
    res: Response,
    UserId: string 
): string => {
    const token = jwt.sign({ UserId }, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
    });

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", 
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 3600000, // 1 hour in milliseconds
    });

    return token;
};
