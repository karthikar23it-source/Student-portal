export interface Reminder {
  opportunityId: number;
  title: string;
  reminderDate: string;
  daysRemaining: number;
}

export interface ReminderPreferences {
  emailEnabled: boolean;
  browserEnabled: boolean;
  appEnabled: boolean;
}

export interface ReminderResponse {
  upcoming: Reminder[];
}