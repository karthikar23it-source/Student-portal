import mongoose, { Document, Schema } from "mongoose";

export interface INotice extends Document {
  title: string;
  category: string;
  postedBy: string;
  description: string;
  attachmentUrl?: string;
  publishedAt: Date;
}

const noticeSchema = new Schema<INotice>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    postedBy: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    attachmentUrl: {
      type: String,
      default: null,
    },

    publishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

export const Notice = mongoose.model<INotice>(
  "Notice",
  noticeSchema
);