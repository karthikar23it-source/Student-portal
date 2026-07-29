import { z } from "zod";

export const createOpportunitySchema = z
  .object({
    postedByStudentId: z
      .string()
      .trim()
      .min(1, "Student ID is required"),

    title: z
      .string()
      .trim()
      .min(1, "Title is required"),

    organization: z
      .string()
      .trim()
      .min(1, "Organization is required"),

    category: z
      .string()
      .trim()
      .min(1, "Category is required"),

    deadline: z
      .string()
      .min(1, "Deadline is required"),

    description: z
      .string()
      .trim()
      .min(1, "Description is required"),

    sourceUrl: z
      .string()
      .trim()
      .url("Invalid source URL"),
  })
  .superRefine((data, ctx) => {
    const deadline = new Date(data.deadline);

    if (isNaN(deadline.getTime())) {
      ctx.addIssue({
        code: "custom",
        path: ["deadline"],
        message: "INVALID_DEADLINE",
      });

      return;
    }

    if (deadline <= new Date()) {
      ctx.addIssue({
        code: "custom",
        path: ["deadline"],
        message: "DEADLINE_MUST_BE_FUTURE",
      });
    }
  });

export type CreateOpportunityInput = z.infer<
  typeof createOpportunitySchema
>;