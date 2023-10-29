import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const validateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;
  if (req.params.id && !mongoose.isValidObjectId(req.params.id)) {
    throw createHttpError(400, "Invalid Task ID");
  }
  if (req.method === "POST") {
    if (!title) {
      throw createHttpError(400, "Task must have a title");
    }
  }
  next();
};
