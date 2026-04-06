import express from "express";
import tarefaController from "../controllers/tarefaController.js";

const router = express.Router();

router.get("/tarefas/get-all", tarefaController.get);
router.get("/tarefas/get-by-id/:id", tarefaController.getById);
router.post("/tarefas/create", tarefaController.create);
router.delete("/tarefas/deletar/:id", tarefaController.destroy);
router.put("/tarefas/update/:id", tarefaController.update);


export default router;
