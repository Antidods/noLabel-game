import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { forumMessage } from './API/routes/forumMessageRoutes';
import { forumTopic } from './API/routes/forumTopicRoutes';
import { leaderboard } from './API/routes/leaderboardRoutes';
import { themes } from './API/routes/themeRoutes';
import { users } from './API/routes/userRoutes';
import { initPostgreSQLConnection } from './db';

dotenv.config();

initPostgreSQLConnection();

const app = express();
app.use(cors());
const port = process.env.SERVER_PORT || 3001;

app.use('/api/user', users);
app.use('/api/theme', themes);
app.use('/api/forum/topics', forumTopic);
app.use('/api/forum/messages', forumMessage);
app.use('/api/leaderboard', leaderboard);

app.listen(port, () => {
  console.log(`➜ Server is listening on port: ${port}`);
});
