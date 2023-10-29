import app from "./app";
import mongoose from "mongoose";
import env from "./utils/validateEnv";
import Logger from "./library/Logger";

const port = env.PORT;

mongoose
  .connect(env.MONGODB_URI)
  .then(() => {
    Logger.info("Database connected successfully");
    app.listen(port, () => {
      Logger.info(`Server listening at ${env.APP_URI}:${port}`);
    });
  })
  .catch((err) => Logger.error(err));
