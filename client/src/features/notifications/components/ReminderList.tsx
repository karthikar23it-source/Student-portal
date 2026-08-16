import ReminderCard from "./ReminderCard";
import type { Reminder } from "../types/reminder.types";

interface ReminderListProps {
  reminders: Reminder[];
}

const ReminderList = ({ reminders }: ReminderListProps) => {
  return (
    <div className="reminder-list">
      <h4>Upcoming</h4>

      {reminders.map((reminder) => (
        <ReminderCard
          key={reminder.opportunityId}
          reminder={reminder}
        />
      ))}
    </div>
  );
};

export default ReminderList;