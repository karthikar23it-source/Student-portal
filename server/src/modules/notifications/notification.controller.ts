import type { Request, Response, NextFunction } from "express";
import { notificationService } from "./notification.service.js";

export class NotificationController {
  async loadNotifications(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await notificationService.loadNotifications();

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export const notificationController = new NotificationController();