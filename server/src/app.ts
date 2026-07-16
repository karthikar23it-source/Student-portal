import express from "express";
import type { Express } from "express";

const app: Express = express();

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "CampusConnect API is running",
    timestamp: new Date().toISOString(),
  });
});

export default app;