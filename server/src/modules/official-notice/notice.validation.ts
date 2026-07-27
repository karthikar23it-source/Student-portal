import { z } from "zod";

export const viewNoticeDetailSchema = z.object({
  noticeId: z.string().trim().min(1, "Notice ID is required"),
});

export type ViewNoticeDetailInput = z.infer<
  typeof viewNoticeDetailSchema
>;