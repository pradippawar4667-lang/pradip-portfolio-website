import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./backend/routes/contactRoutes";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();

  const PORT = process.env.PORT || 4000;

  app.use(cors());

  app.use(express.json());

  app.use("/api", (contactRoutes as any).default || contactRoutes);

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Backend is running" });
  });

  app.use(express.static(path.join(__dirname, "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();