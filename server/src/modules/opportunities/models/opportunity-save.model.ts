import { Schema, model, type InferSchemaType } from "mongoose";

const opportunitySaveSchema = new Schema(
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**
 * Prevent duplicate saves
 */
opportunitySaveSchema.index(
  {
    studentId: 1,
    opportunityId: 1,
  },
  {
    unique: true,
  }
);

export type IOpportunitySave = InferSchemaType<
  typeof opportunitySaveSchema
>;

export const OpportunitySave = model(
  "OpportunitySave",
  opportunitySaveSchema
);