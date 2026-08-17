import express from 'express';
import type { Express } from 'express';
import cors from 'cors';

import { env } from './config/env.js';

import dashboardRoutes from './modules/dashboard.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import officialNoticeRoutes from './modules/officialNotice/officialNotice.routes.js';

import { errorHandler } from './middleware/errorHandler.js';
import { sendSuccess } from './shared/responses/apiResponse.js';

const app: Express = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

// Dashboard
app.use('/api/dashboard', dashboardRoutes);

// Authentication
app.use('/api/auth', authRoutes);

// Official Notices
app.use('/api/notices', officialNoticeRoutes);

app.get('/health', (_req, res) => {
  return sendSuccess(res, 'CampusConnect API is running', {
    timestamp: new Date().toISOString(),
  });
});

app.get('/error', () => {
  throw new Error('Testing Global Error Handler');
});

app.use(errorHandler);

export default app;
