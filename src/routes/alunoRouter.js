import { Router } from "express";
import { AlunoController } from "../controllers/AlunoController.js";

const alunoRouter = Router();
const alunoController = new AlunoController();

alunoRouter.get("/", alunoController.index.bind(alunoController));
alunoRouter.post("/", alunoController.store.bind(alunoController));

export default alunoRouter;