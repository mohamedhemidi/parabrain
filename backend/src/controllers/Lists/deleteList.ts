import { RequestHandler } from "express";
import { ListModel } from "../../models/list";
import { TaskModel } from "../../models/task";

export const deleteList: RequestHandler = async (req, res, next) => {
  const listID = req.params.id;
  try {
    const removedList = await ListModel.findByIdAndUpdate(
      listID,
      { archived: true },
      {
        new: true,
        runValidators: true,
      }
    );
    //
    // Update tasks linked with removed list (remove list ID);
    //
    if (removedList) {
      const tasksToUpdate = { list: { $in: removedList._id } };
      const update = { $set: { list: null } };
      await TaskModel.updateMany(tasksToUpdate, update);
    }
    res.status(200).json({ message: "List is deleted successfully" });
  } catch (error) {
    next(error);
  }
};
