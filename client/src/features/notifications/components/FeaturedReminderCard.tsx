import { useNavigate } from "react-router-dom";

const FeaturedReminderCard = () => {
  const navigate = useNavigate();

  const navigateToDeadlineReminderSettings = () => {
    navigate("/notifications/reminders");
  };

  return (
    <div
      className="featured-reminder-card"
      onClick={navigateToDeadlineReminderSettings}
    >
      <div className="featured-icon">⏰</div>

      <div className="featured-content">
        <h3>Deadline Reminders</h3>
        <p>Manage email, browser & app reminders</p>
      </div>

      <div className="featured-arrow">›</div>
    </div>
  );
};

export default FeaturedReminderCard;