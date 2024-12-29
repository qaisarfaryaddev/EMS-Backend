import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export const authenticate = (req: Request, res: Response, next: NextFunction):any => {
  try {
    const token = req.cookies?.token; // Retrieve the token from cookies

    if (!token) {
      return res.status(401).send({ message: "Access token is missing" });
    }

    const jwtSecret = process.env.JWT_SECRET as string;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    // Verify the token
    jwt.verify(token, jwtSecret, (err: any, decoded: any) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).send({ message: "Access Denied, Token Expired" });
        }
        return res.status(403).send({ message: "Invalid Token" });
      }

      // Proceed to the next middleware if token is valid
      next(); 
    });
  } catch (err) {
    console.error("Unexpected error during authentication:", err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
