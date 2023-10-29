import express from "express";
import * as TasksController from "../controllers/Tasks";
import { validateTask } from "../middlewares/formValidation";

const router = express.Router();

router.get("/", TasksController.getTasks);
router.get("/:id", validateTask, TasksController.viewTask);
router.post("/", validateTask, TasksController.createTask);
router.put("/delete/:id", validateTask, TasksController.deleteTask);
router.put("/update/:id", validateTask, TasksController.updateTask);

export default router;
