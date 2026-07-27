export interface Notification {
  notificationId: number;
  type: "OPPORTUNITY_UPDATE" | "APPLICATION_UPDATE" | "REMINDER";
  title: string;
  isRead: boolean;
  createdAt: string;
}

export interface NotificationListResponse {
  notifications: Notification[];
}