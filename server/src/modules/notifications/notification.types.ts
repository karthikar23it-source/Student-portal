export interface NotificationResponse {
  notificationId: number;
  type: string;
  title: string;
  isRead: boolean;
  createdAt: Date;
}

export interface NotificationListResponse {
  notifications: NotificationResponse[];
}