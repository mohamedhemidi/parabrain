import express from "express";
import * as ListsController from "../controllers/Lists";
import { validateList } from "../middlewares/formValidation";



const router = express.Router();

router.get("/", ListsController.getLists);
router.get("/:id", validateList, ListsController.viewList);
router.post("/", ListsController.createList);
router.put("/delete/:id", ListsController.deleteList);
router.put("/update/:id", ListsController.updateList);

export default router;
