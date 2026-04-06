import express from "express";
import vetorRoute from "./vetorRoute.js";
import tarefaRoute from "./tarefaRoute.js";

const router = express.Router();

router.use(vetorRoute);
router.use(tarefaRoute);

export default router;