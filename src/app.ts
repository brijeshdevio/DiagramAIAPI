import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// Default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the DiagramAI API" });
});

// API routes
app.use("/api", routes);

export default app;
