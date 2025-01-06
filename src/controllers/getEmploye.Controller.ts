import { Request, Response } from 'express';
import { AddEmployeModel } from '../models/index';

export const getEmploye = async (req: Request, res: Response): Promise<any> => {
  try {
    const employees = await AddEmployeModel.find();

    const designationCounts = await AddEmployeModel.aggregate([
      {
        $group: {
          _id: '$designation',
          count: { $sum: 1 },
        },
      },
    ]);

    const totalEmployees = await AddEmployeModel.countDocuments();

    const response = {
      totalEmployees: totalEmployees,
      employees: employees,
      designationCounts: {
        PSA: 0,
        SSA: 0,
      },
    };

    designationCounts.forEach((item) => {
      if (item._id === 'PSA') response.designationCounts.PSA = item.count;
      if (item._id === 'SSA') response.designationCounts.SSA = item.count;
    });

    return res.status(200).json(response);
  } catch (err) {
    console.error("Error while getting employee:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};
