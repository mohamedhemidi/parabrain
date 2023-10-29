import { RequestHandler } from "express";
import { ListModel } from "../../models/list";
import { TaskModel } from "../../models/task";

export const createList: RequestHandler = async (req, res, next) => {
  try {
    const newList = await ListModel.create(req.body);
    //
    // Updating the tasks that are added to the list
    //
    if (newList && req.body.tasks) {
      const tasksToUpdate = { _id: { $in: req.body.tasks } };
      const update = { $set: { list: newList._id } };
      await TaskModel.updateMany(tasksToUpdate, update);
    }
    res
      .status(201)
      .json({ message: "List is created successfully", items: newList });
  } catch (error) {
    next(error);
  }
};
