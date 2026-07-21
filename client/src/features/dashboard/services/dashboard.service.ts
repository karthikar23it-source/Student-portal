import { api } from '../../../lib/api';
import type { DashboardFeedResponse } from '../types/dashboard.types';

export const loadDashboardFeed = async (studentId: string): Promise<DashboardFeedResponse> => {
  const response = await api.get<DashboardFeedResponse>(`/api/dashboard/feed`, {
    params: {
      studentId,
    },
  });

  return response.data;
};
