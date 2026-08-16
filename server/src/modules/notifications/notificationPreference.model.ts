import mongoose, {
  Schema,
  type Document,
} from "mongoose";

export interface INotificationPreference
  extends Document {
  studentId: number;
  emailEnabled: boolean;
  browserEnabled: boolean;
  appEnabled: boolean;
}

const NotificationPreferenceSchema =
  new Schema<INotificationPreference>(
    {
      studentId: {
        type: Number,
        required: true,
        unique: true,
      },

      emailEnabled: {
        type: Boolean,
        default: true,
      },

      browserEnabled: {
        type: Boolean,
        default: true,
      },

      appEnabled: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
      collection: "notification_preferences",
    }
  );

export const NotificationPreference =
  mongoose.model<INotificationPreference>(
    "NotificationPreference",
    NotificationPreferenceSchema
  );