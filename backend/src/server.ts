import app from "./app";
import mongoose from "mongoose";
import env from "./utils/validateEnv";

const port = env.PORT;

mongoose
  .connect(env.MONGODB_URI)
  .then(() => {
    console.log("Database connected successfully")
    app.listen(port, () => {
      console.log(`Server listening at ${env.APP_URI}:${port}`);
    });
  })
  .catch((err) => console.log("DB Error :", err));
