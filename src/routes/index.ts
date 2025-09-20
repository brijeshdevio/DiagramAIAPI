import { Router } from "express";
import diagramRoutes from "./diagram.routes";

const routes = Router();

routes.use("/diagram", diagramRoutes);

export default routes;
