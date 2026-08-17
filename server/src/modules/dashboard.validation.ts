import { z } from 'zod';

export const dashboardFeedQuerySchema = z.object({
  studentId: z.string().trim().min(1, 'studentId is required'),
});

export type DashboardFeedQuery = z.infer<typeof dashboardFeedQuerySchema>;
