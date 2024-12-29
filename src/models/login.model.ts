import mongoose,{Schema} from "mongoose";
import {login} from '../interfaces';





const loginSchema = new Schema<Document & login>({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

export const LoginModel = mongoose.model<Document & login>('appLogin', loginSchema);