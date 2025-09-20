import { Router } from "express";
import { DiagramController } from "../controllers";

const controller = new DiagramController();

const routes = Router();

routes.post("/", controller.handleGenerate);

export default routes;
