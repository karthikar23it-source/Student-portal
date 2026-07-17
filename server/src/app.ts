import express from 'express';
import type { Express } from 'express';

import { errorHandler } from './middleware/errorHandler.js';
import { sendSuccess } from './shared/responses/apiResponse.js';

const app: Express = express();

// Middlewares
app.use(express.json());

// Health Check
app.get('/health', (_req, res) => {
  return sendSuccess(res, 'CampusConnect API is running', {
    timestamp: new Date().toISOString(),
  });
});
// Temporary Error Test Route
app.get('/error', () => {
  throw new Error('Testing Global Error Handler');
});

// Global Error Handler
app.use(errorHandler);

export default app;
