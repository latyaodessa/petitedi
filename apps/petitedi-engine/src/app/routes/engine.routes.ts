import express, { Router } from 'express';
import { executeTestActivity } from '../controllers/engine.controllers';

const router: Router = express.Router();


router.get('/test/:profileId', executeTestActivity);


export default router;
