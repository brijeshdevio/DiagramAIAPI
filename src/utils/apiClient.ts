import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { getEnv } from "../config";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0,
  maxRetries: 2,
  apiKey: getEnv("GEMINI_API_KEY"),
});

export default llm;
