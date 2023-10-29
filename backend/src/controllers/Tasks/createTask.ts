import { RequestHandler } from "express";
import { TaskModel } from "../../models/task";

export const createTask: RequestHandler = async (req, res, next) => {
  const { title, description, status, urgent, importance, from, to } = req.body;

  try {
    const newTask = await TaskModel.create({
      title,
      description,
      status,
      urgent,
      importance,
      from,
      to,
    });
    res
      .status(201)
      .json({ message: "Task is created successfully", items: newTask });
  } catch (error) {
    next(error);
  }
};
