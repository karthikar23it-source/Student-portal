import { Notification } from "./notification.model.js";

export class NotificationRepository {
  async findAll() {
    return Notification.find().sort({ createdAt: -1 }).lean();
  }
}

export const notificationRepository = new NotificationRepository();