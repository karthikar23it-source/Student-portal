import { Schema, model, type InferSchemaType } from "mongoose";

const opportunityUpvoteSchema = new Schema(
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
 * Prevent duplicate upvotes by the same student
 */
opportunityUpvoteSchema.index(
  {
    studentId: 1,
    opportunityId: 1,
  },
  {
    unique: true,
  }
);

export type IOpportunityUpvote = InferSchemaType<
  typeof opportunityUpvoteSchema
>;

export const OpportunityUpvote = model(
  "OpportunityUpvote",
  opportunityUpvoteSchema
);