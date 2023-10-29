/* eslint-disable */
import { Request, Response, NextFunction } from "express";
import { isHttpError } from "http-errors";

export function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let errorMessage = "Unknow error occured";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ statusCode, mesage: errorMessage });
}
