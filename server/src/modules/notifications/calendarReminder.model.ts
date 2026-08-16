import mongoose, {
  Schema,
  type Document,
  type Types,
} from "mongoose";

export interface ICalendarReminder extends Document {
  opportunityId: Types.ObjectId;
  studentId: number;
  reminderDate: Date;
}

const CalendarReminderSchema =
  new Schema<ICalendarReminder>(
    {
      opportunityId: {
        type: Schema.Types.ObjectId,
        ref: "Opportunity",
        required: true,
      },

      studentId: {
        type: Number,
        required: true,
      },

      reminderDate: {
        type: Date,
        required: true,
      },
    },
    {
      collection: "calendar_reminders",
      timestamps: true,
    }
  );

export const CalendarReminder =
  mongoose.model<ICalendarReminder>(
    "CalendarReminder",
    CalendarReminderSchema
  );