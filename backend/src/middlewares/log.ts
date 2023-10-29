import { Request, Response, NextFunction } from "express";
import Logger from "../library/Logger";

export function logger(req: Request, res: Response, next: NextFunction) {
  /** Log the req */
  Logger.info(
    `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    /** Log the res */
    Logger.info(
      `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
    );
  });

  next();
}
