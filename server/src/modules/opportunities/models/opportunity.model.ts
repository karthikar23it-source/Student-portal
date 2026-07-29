import mongoose, { Schema, Document } from "mongoose";

export interface IOpportunity extends Document {
  postedByStudentId: string;

  title: string;
  organization: string;
  category: string;

  deadline: Date;

  description: string;

  sourceUrl: string;

  isArchived: boolean;

  createdAt: Date;
  updatedAt: Date;
}

const opportunitySchema = new Schema<IOpportunity>(
  {
    postedByStudentId: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    organization: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    deadline: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    sourceUrl: {
      type: String,
      required: true,
      trim: true,
    },

    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Opportunity = mongoose.model<IOpportunity>(
  "Opportunity",
  opportunitySchema
);