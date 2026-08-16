import mongoose, { Schema, type Document } from "mongoose";

export interface INotification extends Document {
  notificationId: number;
  type: "OPPORTUNITY_UPDATE" | "APPLICATION_UPDATE" | "REMINDER";
  title: string;
  isRead: boolean;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>(
  {
    notificationId: {
      type: Number,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: [
        "OPPORTUNITY_UPDATE",
        "APPLICATION_UPDATE",
        "REMINDER",
      ],
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

export const Notification = mongoose.model<INotification>(
  "Notification",
  NotificationSchema
);