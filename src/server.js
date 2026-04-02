import Routes from "./routes/index.js";
import express from "express";
const app = express();
app.use(express.json());

Routes(app);