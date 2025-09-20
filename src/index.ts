import { getEnv } from "./config";
import app from "./app";

const PORT = getEnv("PORT") || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
