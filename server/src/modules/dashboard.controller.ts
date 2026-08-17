import type { Request, Response } from 'express';

import { dashboardFeedQuerySchema } from './dashboard.validation.js';
import { DashboardService } from './dashboard.service.js';

const dashboardService = new DashboardService();

export const loadDashboardFeed = async (req: Request, res: Response): Promise<Response> => {
  console.log('DASHBOARD CONTROLLER HIT', req.query);

  const query = dashboardFeedQuerySchema.parse(req.query);

  const feed = await dashboardService.loadDashboardFeed(query.studentId);

  console.log('DASHBOARD CONTROLLER FEED', feed);

  return res.status(200).json({
    feed,
  });
};
