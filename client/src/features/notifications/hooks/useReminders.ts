import { useEffect, useState } from "react";
import {
  loadReminderPreferences,
  loadUpcomingReminders,
} from "../services/reminder.service";
import type {
  Reminder,
  ReminderPreferences,
} from "../types/reminder.types";

export const useReminders = () => {
  const [preferences, setPreferences] =
    useState<ReminderPreferences>({
      emailEnabled: false,
      browserEnabled: false,
      appEnabled: false,
    });

  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    const load = async () => {
      setPreferences(await loadReminderPreferences());
      setReminders(await loadUpcomingReminders());
    };

    load();
  }, []);

  return {
    reminders,
    preferences,
    setPreferences,
  };
};