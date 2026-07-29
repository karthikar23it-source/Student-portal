import { Schema, model, type InferSchemaType } from "mongoose";

const opportunityReportSchema = new Schema(
  {
    studentId: {
      type: String,
      required: true,
      trim: true,
    },

    opportunityId: {
      type: Schema.Types.ObjectId,
      ref: "Opportunity",
      required: true,
    },

    reason: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "reviewed", "resolved"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export type IOpportunityReport = InferSchemaType<
  typeof opportunityReportSchema
>;

export const OpportunityReport = model(
  "OpportunityReport",
  opportunityReportSchema
);