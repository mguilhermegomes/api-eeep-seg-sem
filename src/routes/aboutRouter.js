import { Router } from "express";
import AboutController from "../controllers/AboutController.js";

const aboutRouter = Router();
const aboutController = new AboutController;

aboutRouter.get("/", aboutController.index.bind(aboutController));

export default aboutRouter;