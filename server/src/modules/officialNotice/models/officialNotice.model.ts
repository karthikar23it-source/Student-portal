import { Schema, model } from 'mongoose';
import type { HydratedDocument } from 'mongoose';
import type { IOfficialNotice } from '../officialNotice.types.js';

export type OfficialNoticeDocument = HydratedDocument<IOfficialNotice>;

const officialNoticeSchema = new Schema<IOfficialNotice>(
  {
    noticeId: {
      type: Number,
      required: true,
      unique: true,
    },
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
    publishedAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: false,
    collection: 'officialNotices',
  }
);

export const OfficialNotice = model<IOfficialNotice>('OfficialNotice', officialNoticeSchema);
