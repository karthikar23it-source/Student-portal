import type {
  Reminder,
  ReminderPreferences,
} from "../types/reminder.types";

let preferences: ReminderPreferences = {
  emailEnabled: true,
  browserEnabled: true,
  appEnabled: false,
};

const reminders: Reminder[] = [
  {
    opportunityId: 1,
    title: "GSoC 2026",
    reminderDate: "Apr 12",
    daysRemaining: 3,
  },
  {
    opportunityId: 2,
    title: "Smart India Hackathon",
    reminderDate: "Apr 16",
    daysRemaining: 7,
  },
  {
    opportunityId: 3,
    title: "MLSA Program",
    reminderDate: "Apr 21",
    daysRemaining: 12,
  },
];

export const loadUpcomingReminders = async () => reminders;

export const toggleEmailNotification = async (enabled: boolean) => {
  preferences.emailEnabled = enabled;
};

export const toggleBrowserNotification = async (enabled: boolean) => {
  preferences.browserEnabled = enabled;
};

export const toggleAppNotification = async (enabled: boolean) => {
  preferences.appEnabled = enabled;
};

export const loadReminderPreferences = async () => preferences;