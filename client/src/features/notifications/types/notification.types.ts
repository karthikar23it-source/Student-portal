export interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  relativeTime: string;
}

export type NotificationListResponse = Notification[];