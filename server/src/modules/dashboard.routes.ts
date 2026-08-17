import { Router } from 'express';

import { loadDashboardFeed } from './dashboard.controller.js';

const router = Router();

router.get('/feed', loadDashboardFeed);

export default router;
