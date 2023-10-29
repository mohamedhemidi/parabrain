import { RequestHandler } from "express";
import { TaskModel } from "../../models/task";
export const deleteTask: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find().exec();
    res.status(200).json({message: "Task is deleted successfully", items: tasks});
  } catch (error) {
    next(error);
  }
};
