import type { Request, Response, NextFunction } from "express";

import { notificationService } from "./notification.service.js";

export class NotificationController {
  async loadNotifications(
    _req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await notificationService.loadNotifications();

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async updateNotificationPreferences(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const {
        studentId,
        emailEnabled,
        browserEnabled,
        appEnabled,
      } = req.body;

      const data =
        await notificationService.saveNotificationPreferences(
          studentId,
          emailEnabled,
          browserEnabled,
          appEnabled
        );

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async loadUpcomingReminders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const studentId = Number(req.params.studentId);

    const data =
      await notificationService.loadUpcomingReminders(
        studentId
      );

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}
}

export const notificationController =
  new NotificationController();