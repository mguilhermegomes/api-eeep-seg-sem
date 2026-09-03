import { Router } from "express";
import LivroController from "../controllers/LivroController.js";

const livroRouter = Router();
const livroController = new LivroController();

livroRouter.get("/", livroController.index.bind(livroController));
livroRouter.post("/", livroController.store.bind(livroController));

export default livroRouter;