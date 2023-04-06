import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import * as console from 'console';
import express from 'express';

import { createClientAndConnect } from './db';

const app = express();
app.use(cors());
const port = Number(process.env.SERVER_PORT) || 3001;

createClientAndConnect().then((r) => console.log(r));

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)');
});

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
