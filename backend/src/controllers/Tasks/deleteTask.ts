import { RequestHandler } from "express";
import { TaskModel } from "../../models/task";

export const deleteTask: RequestHandler = async (req, res, next) => {
  const taskID = req.params.id;
  try {
    const tasks = await TaskModel.findByIdAndUpdate(
      taskID,
      { archived: true },
      {
        new: true,
        runValidators: true,
      }
    );
    res
      .status(200)
      .json({ message: "Task is deleted successfully", items: tasks });
  } catch (error) {
    next(error);
  }
};
