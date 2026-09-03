import { Router } from "express";
import HomeController from "../controllers/HomeController.js";

const homeRouter = Router();
const homeController = new HomeController();

homeRouter.get("/", homeController.index.bind(homeController));

export default homeRouter;