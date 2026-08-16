import { notificationRepository } from "./notification.repository.js";

export class NotificationService {
  async loadNotifications() {
    const notifications =
      await notificationRepository.findAll();

    return {
      notifications,
    };
  }

  async saveNotificationPreferences(
    studentId: number,
    emailEnabled: boolean,
    browserEnabled: boolean,
    appEnabled: boolean
  ) {
    await notificationRepository.updatePreferences(
      studentId,
      emailEnabled,
      browserEnabled,
      appEnabled
    );

    return {
      updated: true,
    };
  }

  async loadUpcomingReminders(studentId: number) {
    const reminders =
      await notificationRepository.findUpcomingReminders(
        studentId
      );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = reminders.map((reminder) => {
      const reminderDate = new Date(
        reminder.reminderDate
      );

      reminderDate.setHours(0, 0, 0, 0);

      const todayDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      const reminderDateOnly = new Date(
        reminderDate.getFullYear(),
        reminderDate.getMonth(),
        reminderDate.getDate()
      );

      const difference =
        reminderDateOnly.getTime() -
        todayDate.getTime();

      const daysRemaining = Math.round(
        difference / (1000 * 60 * 60 * 24)
      );

      return {
        opportunityId: reminder.opportunityId,
        title: reminder.title,
        reminderDate: reminderDate
          .toISOString()
          .split("T")[0],
        daysRemaining,
      };
    });

    return {
      upcoming,
    };
  }
}

export const notificationService =
  new NotificationService();