import express from 'express';
import { executeTestActivity } from '../controllers/engine.controllers';

const app = express();

app.use('/engine/:profileId', executeTestActivity);


export default app;
