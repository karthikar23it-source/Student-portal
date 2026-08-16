import type { Notification } from "../types/notification.types";

interface NotificationCardProps {
  notification: Notification;
}

const NotificationCard = ({ notification }: NotificationCardProps) => {
  const getIcon = () => {
    switch (notification.type) {
      case "OPPORTUNITY_UPDATE":
        return "🚀";
      case "APPLICATION_UPDATE":
        return "📄";
      case "REMINDER":
        return "⏰";
      default:
        return "🔔";
    }
  };

  return (
    <div className="notification-card">
      <div className="notification-icon">{getIcon()}</div>

      <div className="notification-content">
        <h4>{notification.title}</h4>

        <p>{notification.type.replace("_", " ")}</p>
      </div>

      <span className="notification-time">
        {new Date(notification.createdAt).toLocaleString()}
      </span>
    </div>
  );
};

export default NotificationCard;