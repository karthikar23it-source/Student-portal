import express from "express";
import type { Express } from "express";
import cors from "cors";

import { env } from "./config/env.js";

import authRoutes from "./modules/auth/auth.routes.js";

// Friend's module (Official Notices List)
import officialNoticeRoutes from "./modules/officialNotice/officialNotice.routes.js";

// Your module (Notice Detail)
import noticeRoutes from "./modules/official-notice/notice.routes.js";

import { errorHandler } from "./middleware/errorHandler.js";
import { sendSuccess } from "./shared/responses/apiResponse.js";
import notificationRoutes from "./modules/notifications/notification.routes.js";
const app: Express = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

// Official Notices List
app.use("/api/notices", officialNoticeRoutes);

// Official Notice Detail
app.use("/api/notices", noticeRoutes);

app.get("/health", (_req, res) => {
  return sendSuccess(res, "CampusConnect API is running", {
    timestamp: new Date().toISOString(),
  });
});

app.get("/error", () => {
  throw new Error("Testing Global Error Handler");
});

app.use("/api/notifications", notificationRoutes);
app.use(errorHandler);

export default app;