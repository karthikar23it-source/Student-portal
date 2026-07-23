import { api } from "../../../lib/api";
import type { NotificationListResponse } from "../types/notification.types";

export const loadNotifications = async (): Promise<NotificationListResponse> => {
  const response = await api.get<NotificationListResponse>(
    "/notifications"
  );

  return response.data;
};