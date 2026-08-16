import { Notification } from "./notification.model.js";
import { NotificationPreference } from "./notificationPreference.model.js";
import { CalendarReminder } from "./calendarReminder.model.js";

export class NotificationRepository {
  async findAll() {
    return Notification.find().sort({ createdAt: -1 }).lean();
  }

  async updatePreferences(
    studentId: number,
    emailEnabled: boolean,
    browserEnabled: boolean,
    appEnabled: boolean
  ) {
    return NotificationPreference.findOneAndUpdate(
      { studentId },
      {
        $set: {
          emailEnabled,
          browserEnabled,
          appEnabled,
        },
      },
      {
        new: true,
        upsert: true,
      }
    ).lean();
  }
  async findUpcomingReminders(studentId: number) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return CalendarReminder.aggregate([
    {
      $match: {
        studentId,
        reminderDate: {
          $gte: today,
        },
      },
    },

    {
      $lookup: {
        from: "opportunities",
        localField: "opportunityId",
        foreignField: "_id",
        as: "opportunity",
      },
    },

    {
      $unwind: "$opportunity",
    },

    {
      $sort: {
        reminderDate: 1,
      },
    },

    {
      $project: {
        _id: 0,
        opportunityId: "$opportunity._id",
        title: "$opportunity.title",
        reminderDate: 1,
      },
    },
  ]);
}

}


export const notificationRepository = new NotificationRepository();