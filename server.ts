import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./backend/routes/contactRoutes";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 4000;

  app.use(cors());

  // Middleware
  app.use(express.json());

  // API routes
  app.use("/api", (contactRoutes as any).default || contactRoutes);

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Backend is running" });
  });

  // Serve React build
  app.use(express.static(path.join(__dirname, "dist")));

  // React routing fix
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
