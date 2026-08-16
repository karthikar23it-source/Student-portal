import { Router } from "express";

import { notificationController } from "./notification.controller.js";

const router = Router();

router.get(
  "/",
  notificationController.loadNotifications.bind(
    notificationController
  )
);

router.patch(
  "/preferences",
  notificationController.updateNotificationPreferences.bind(
    notificationController
  )
);

router.get(
  "/reminders/:studentId",
  notificationController.loadUpcomingReminders.bind(
    notificationController
  )
);

export default router;