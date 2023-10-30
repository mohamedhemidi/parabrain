import "dotenv/config";
import express from "express";
import compression from "compression";
import { logger, errorHandler } from "./middlewares";
import TasksRoutes from "./routes/tasksRoutes";
import ListRoutes from "./routes/listsRoutes";
import createHttpError from "http-errors";
import cors from "cors";
import origins from "./constants/cors_origins";
const app = express();

app.use(express.json());
app.use(compression());

app.use(
  cors({
    origin: origins,
  })
);

/** Middlewares **/
app.use(logger);

app.use("/api/tasks", TasksRoutes);
app.use("/api/lists", ListRoutes);

/** Error Handling **/
app.use((req, res, next) => {
  next(createHttpError(404, "API Endpoint is not found"));
});
app.use(errorHandler);

export default app;
