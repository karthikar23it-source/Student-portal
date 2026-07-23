import { useEffect, useState } from "react";
import FeaturedReminderCard from "./FeaturedReminderCard";
import NotificationCard from "./NotificationCard";
import { loadNotifications } from "../services/notification.service";
import type { Notification } from "../types/notification.types";

const NotificationList = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await loadNotifications();
      setNotifications(data);
    } catch (error) {
      console.error("Failed to load notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="notification-status">Loading notifications...</p>;
  }

  return (
    <div className="notification-list-container">
      <FeaturedReminderCard />

      {notifications.length === 0 ? (
        <p className="notification-status">No notifications available.</p>
      ) : (
        <div className="notification-list">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationList;