import { Router } from "express";
import { notificationController } from "./notification.controller.js";

const router = Router();

router.get("/", notificationController.loadNotifications);

export default router;