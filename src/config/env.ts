import "dotenv/config";

const env = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  SYSTEM_PROMPT: process.env.SYSTEM_PROMPT,
};

const getEnv = (key: keyof typeof env) => env[key] as string;

export default getEnv;
