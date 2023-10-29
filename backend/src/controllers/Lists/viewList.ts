import { RequestHandler } from "express";
import { ListModel } from "../../models/list";
import createHttpError from "http-errors";
import { TaskModel } from "../../models/task";

export const viewList: RequestHandler = async (req, res, next) => {
  const listID = req.params.id;
  try {
    const list = await ListModel.findById(listID).exec();
    // Check existing:
    if (!list) {
      throw createHttpError(404, "List not found");
    }

    const tasks = await TaskModel.find({ list: listID }).exec();
    res.status(200).json({ items: list, tasks: tasks });
  } catch (error) {
    next(error);
  }
};
