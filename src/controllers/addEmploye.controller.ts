import { Request, Response } from 'express';
import { AddEmployeModel } from '../models/index';

export const addEmployeController = async (req: Request, res: Response): Promise<any> => {
    const { employeName, designation, batch, phoneNumber, posting } = req.body;

    try {
        if (!employeName || !designation || !batch || !phoneNumber || !posting) {
            return res.status(422).json({
                success: false,
                message: "All fields are required.",
            });
        }

        const newEmployee = new AddEmployeModel({
            employeName,
            designation,
            batch,
            phoneNumber,
            posting,
        });

        await newEmployee.save();

        return res.status(201).json({
            success: true,
            message: "Employee added successfully.",
            data: newEmployee,
        });
    } catch (err) {
        console.error("Error while adding employee:", err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
};
