import { RequestHandler } from "express";
import { ListModel } from "../../models/list";

export const getLists: RequestHandler = async (req, res, next) => {
  try {
    const lists = await ListModel.find({ archived: false }).exec();
    res.status(200).json({ count: lists.length, items: lists });
  } catch (error) {
    next(error);
  }
};
