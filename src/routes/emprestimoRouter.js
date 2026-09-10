import { Router } from "express";
import { EmprestimoController } from "../controllers/EmprestimoController.js";

const emprestimoRouter = Router();
const emprestimoController = new EmprestimoController();

emprestimoRouter.get("/", emprestimoController.index.bind(emprestimoController));
emprestimoRouter.post("/", emprestimoController.cadastrarEmprestimo.bind(emprestimoController));

export default emprestimoRouter;