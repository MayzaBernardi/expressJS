import express from "express";
import vetorRoute from "./vetorRoute.js";

const router = express.Router();

router.use(vetorRoute);

export default router;