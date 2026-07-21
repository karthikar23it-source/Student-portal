import express from "express";
import type { Express } from "express";
import cors from "cors";

import { env } from "./config/env.js";

import authRoutes from "./modules/auth/auth.routes.js";
import noticeRoutes from "./modules/official-notice/notice.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { sendSuccess } from "./shared/responses/apiResponse.js";

const app: Express = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/health", (_req, res) => {
  return sendSuccess(res, "CampusConnect API is running", {
    timestamp: new Date().toISOString(),
  });
});

app.get("/error", () => {
  throw new Error("Testing Global Error Handler");
});

app.use(errorHandler);
app.use("/api/notices", noticeRoutes);
export default app;