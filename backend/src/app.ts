import "dotenv/config";
import express from "express";
import compression from "compression";
import { logger } from "./middlewares";

const app = express();

app.use(compression());

// Middlwares
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;
