import { Request, Response } from "express";
import { DiagramService } from "../services";

class DiagramController extends DiagramService {
  constructor() {
    super();
  }

  handleGenerate = async (req: Request, res: Response) => {
    const { prompt } = req.body;
    const response = await this.generateDiagram(prompt);
    res.status(200).json({ response, prompt });
  };
}

export default DiagramController;
