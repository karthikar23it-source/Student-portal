import type { Reminder } from "../types/reminder.types";

interface Props {
  reminder: Reminder;
}

const ReminderCard = ({ reminder }: Props) => {
  return (
    <div className="reminder-card">
      <div className="calendar-icon">📅</div>

      <div className="reminder-content">
        <h4>{reminder.title}</h4>

        <p>
          {reminder.reminderDate} • in {reminder.daysRemaining} days
        </p>
      </div>
    </div>
  );
};

export default ReminderCard;