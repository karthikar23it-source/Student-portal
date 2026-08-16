import NotificationList from "../components/NotificationList";
import "../styles/notifications.css";

const NotificationsPage = () => {
  return (
    <div className="notifications-page">
      <h2>Notifications</h2>

      <NotificationList />
    </div>
  );
};

export default NotificationsPage;