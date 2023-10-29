import "dotenv/config";
import express from "express";
import compression from "compression";
import { logger, errorHandler } from "./middlewares";
import TasksRoutes from "./routes/tasksRoutes";
import createHttpError from "http-errors";
const app = express();

app.use(express.json());
app.use(compression());

/** Middlewares **/
app.use(logger);

app.use("/api/tasks", TasksRoutes);

/** Error Handling **/
app.use((req, res, next) => {
  next(createHttpError(404, "API Endpoint is not found"));
});
app.use(errorHandler);



export default app;
