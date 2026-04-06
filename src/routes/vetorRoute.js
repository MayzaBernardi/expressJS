import express from "express";
import vetorController from "../controllers/vetorController.js";

const router = express.Router();

router.get("/tarefas", vetorController.getAll);
router.post("/tarefas", vetorController.create);
router.put("/tarefas/:id", vetorController.update);
router.delete("/tarefas/:id", vetorController.remove);

export default router;