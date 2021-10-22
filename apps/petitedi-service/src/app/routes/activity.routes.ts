import express, { Router } from 'express';
import { createActivity, updateActivity } from '../controllers/activity.controllers';

const router: Router = express.Router();


router.post('/create/:profileId', createActivity);
router.put('/update/:profileId/:activityId', updateActivity);


export default router;
