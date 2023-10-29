import { RequestHandler } from "express";
import { TaskModel } from "../../models/task";
export const updateTask: RequestHandler = async (req, res, next) => {
  const taskID = req.params.id;
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true,
    });
    res
      .status(200)
      .json({ message: "Task is updated successfully", items: updatedTask });
  } catch (error) {
    next(error);
  }
};
