import {
  toggleAppNotification,
  toggleBrowserNotification,
  toggleEmailNotification,
} from "../services/reminder.service";
import type { ReminderPreferences } from "../types/reminder.types";

interface ReminderSettingsProps {
  preferences: ReminderPreferences;
  setPreferences: React.Dispatch<
    React.SetStateAction<ReminderPreferences>
  >;
}

const ReminderSettings = ({
  preferences,
  setPreferences,
}: ReminderSettingsProps) => {
  const handleEmail = async () => {
    const enabled = !preferences.emailEnabled;

    setPreferences({
      ...preferences,
      emailEnabled: enabled,
    });

    await toggleEmailNotification(enabled);
  };

  const handleBrowser = async () => {
    const enabled = !preferences.browserEnabled;

    setPreferences({
      ...preferences,
      browserEnabled: enabled,
    });

    await toggleBrowserNotification(enabled);
  };

  const handleApp = async () => {
    const enabled = !preferences.appEnabled;

    setPreferences({
      ...preferences,
      appEnabled: enabled,
    });

    await toggleAppNotification(enabled);
  };

  return (
    <div className="reminder-settings">
      <h4>Reminder Channels</h4>

      <label className="setting-card">
        <div>
          <strong>Email Notification</strong>
          <p>Send reminders to your college email</p>
        </div>

        <input
          type="checkbox"
          checked={preferences.emailEnabled}
          onChange={handleEmail}
        />
      </label>

      <label className="setting-card">
        <div>
          <strong>Browser Notification</strong>
          <p>Push alerts to your web browser</p>
        </div>

        <input
          type="checkbox"
          checked={preferences.browserEnabled}
          onChange={handleBrowser}
        />
      </label>

      <label className="setting-card">
        <div>
          <strong>App Notification</strong>
          <p>In-app push notifications</p>
        </div>

        <input
          type="checkbox"
          checked={preferences.appEnabled}
          onChange={handleApp}
        />
      </label>
    </div>
  );
};

export default ReminderSettings;