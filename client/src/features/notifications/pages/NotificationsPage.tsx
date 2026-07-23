import NotificationList from "../components/NotificationList";
import "../styles/notifications.css";

const NotificationsPage = () => {
  return (
    <div className="notifications-page">
      <div className="notifications-container">
        <h1 className="notifications-title">Notifications</h1>

        <NotificationList />
      </div>
    </div>
  );
};

export default NotificationsPage;