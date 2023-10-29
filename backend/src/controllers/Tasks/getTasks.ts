import { RequestHandler } from "express";
import { TaskModel } from "../../models/task";

export const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find({ archived: false }).exec();
    res.status(200).json({ count: tasks.length, items: tasks });
  } catch (error) {
    next(error);
  }
};
