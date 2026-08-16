import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReminderList from "../components/ReminderList";
import ReminderSettings from "../components/ReminderSettings";
import { useReminders } from "../hooks/useReminders";
import "../styles/reminder.css";

const DeadlineReminderPage = () => {
  const navigate = useNavigate();

  const {
    reminders,
    preferences,
    setPreferences,
  } = useReminders();

  return (
    <div className="deadline-reminder-page">
      <div className="page-header">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>

        <h2>Deadline Reminder</h2>
      </div>

      <ReminderSettings
        preferences={preferences}
        setPreferences={setPreferences}
      />

      <ReminderList reminders={reminders} />
    </div>
  );
};

export default DeadlineReminderPage;