import { useEffect, useState } from "react";
import { loadNotifications } from "../services/notification.service";
import type { Notification } from "../types/notification.types";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await loadNotifications();
        setNotifications(response.notifications);
      } catch (error) {
        console.error("Error loading notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return { notifications, loading };
};