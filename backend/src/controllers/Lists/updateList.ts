import { RequestHandler } from "express";
import { ListModel } from "../../models/list";
import { TaskModel } from "../../models/task";

export const updateList: RequestHandler = async (req, res, next) => {
  const listID = req.params.id;
  try {
    const updatedList = await ListModel.findByIdAndUpdate(listID, req.body, {
      new: true,
      runValidators: true,
    });

    // Lookup for Tasks associated with this List
    const tasksAssociated = await TaskModel.find({
      list: listID,
    }).exec();
    const tasksList = tasksAssociated.map((t) => {
      return t._id.toString();
    });

    if (updatedList && req.body.tasks) {
      // Remove List ID from all tasks associated
      const tasksToRemoveID = { _id: { $in: tasksList } };
      const removeId = { $set: { list: null } };
      await TaskModel.updateMany(tasksToRemoveID, removeId);

      // Update Requested Tasks with List ID
      const tasksToUpdateID = { _id: { $in: req.body.tasks } };
      const update = { $set: { list: updatedList._id } };
      await TaskModel.updateMany(tasksToUpdateID, update);
    }else {
      // Remove List ID from all tasks associated
      const tasksToRemoveID = { _id: { $in: tasksList } };
      const removeId = { $set: { list: null } };
      await TaskModel.updateMany(tasksToRemoveID, removeId);
    }

    res
      .status(200)
      .json({ message: "List is updated successfully", items: updatedList });
  } catch (error) {
    next(error);
  }
};
