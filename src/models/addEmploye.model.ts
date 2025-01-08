import mongoose,{Schema} from "mongoose";
import {AddEmploye} from '../interfaces';





const addEmployeSchema = new Schema<Document & AddEmploye>({
    employeName: { type: String, required: true },
    designation: { type: String, required: true },
    batch:{type:String, required:true},
    phoneNumber: {type:String, required:true},
    posting:{type:String, required:true},
    shift:{type:String, required:true}
});

export const AddEmployeModel = mongoose.model<Document & AddEmploye>('addEmploye', addEmployeSchema);