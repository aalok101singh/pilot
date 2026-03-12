import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import metricsRouter from './routes/metrics.js';
import agentsRouter from './routes/agents.js';
import marketplaceRouter from './routes/marketplace.js';
import escalationsRouter from './routes/escalations.js';
import databaseRouter from './routes/database.js';
import activityRouter from './routes/activity.js';
import settingsRouter from './routes/settings.js';
import aiRouter from './routes/ai.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'pilot-backend' });
});

app.use('/api/metrics', metricsRouter);
app.use('/api/agents', agentsRouter);
app.use('/api/marketplace', marketplaceRouter);
app.use('/api/escalations', escalationsRouter);
app.use('/api/database', databaseRouter);
app.use('/api/activity', activityRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/ai', aiRouter);

app.listen(PORT, () => {
  console.log(`Pilot backend running on http://localhost:${PORT}`);
});