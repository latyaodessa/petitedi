import ProfileModel, { ProfileDocument } from '../models/profile.model';
import { NextFunction, Request, Response } from 'express';
import EventModel, { EventDocument } from '../models/event.model';
import { logger } from '@petitedi/common/common-utils';


export const findProfile = async (req: Request, res: Response, next: NextFunction) => {

  const profileId = req.params.profileId;

  const profile = await ProfileModel.findById(profileId).populate(['activities', 'events']);


  res.json(profile);
};


export const createProfile = async (req: Request, res: Response, next: NextFunction) => {


  const profile: ProfileDocument = new ProfileModel({});
  await profile.save();

  res.json(profile);
};

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  const profileId = req.params.profileId;

  const profile: ProfileDocument = await findProfileById(profileId);
  const event: EventDocument = new EventModel({});
  profile.events.push(event);


  await event.updateOne({ profile: profileId });

  await event.save();

  await profile.save();

  res.json(event);
};


export async function findProfileById(profileId: string) {
  try {
    return await ProfileModel.findById(profileId).populate('activities');
  } catch (e) {
    logger.error(e);
    throw new Error(e);
  }
}
