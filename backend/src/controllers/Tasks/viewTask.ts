import { RequestHandler } from "express";
import { TaskModel } from "../../models/task";
import createHttpError from "http-errors";

export const viewTask: RequestHandler = async (req, res, next) => {
  const taskID = req.params.id;
  try {
    const task = await TaskModel.findById(taskID).exec();
    // Check existing:
    if (!task) {
      throw createHttpError(404, "Task not found");
    }
    res.status(200).json({ items: task });
  } catch (error) {
    next(error);
  }
};
