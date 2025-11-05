import express from "express";
import { generateCode } from "./api/aiController.js";
import { logRequest } from "./utils/helpers.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use((req, res, next) => {
  logRequest(req);
  next();
});

app.get("/generate", generateCode);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
