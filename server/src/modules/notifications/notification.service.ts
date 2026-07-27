import { notificationRepository } from "./notification.repository.js";
import type { NotificationListResponse } from "./notification.types.js";

export class NotificationService {
  async loadNotifications(): Promise<NotificationListResponse> {
    const notifications = await notificationRepository.findAll();

    return {
      notifications,
    };
  }
}

export const notificationService = new NotificationService();