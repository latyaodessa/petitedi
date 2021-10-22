import express, { Router } from 'express';
import { createEvent, createProfile, findProfile } from '../controllers/profile.controllers';

const router: Router = express.Router();

router.post('/create', createProfile);

router.get('/find/:profileId', findProfile);


router.post('/event/create/:profileId', createEvent);

router.get('/fck', (request, response) => {
  response.send('Hello 123!');
});


export default router;
