import express from 'express';
import profileRoutes from './profile.routes';
import activityRoutes from './activity.routes';

const app = express();

app.use('/profile', profileRoutes);
app.use('/activity', activityRoutes);


export default app;
