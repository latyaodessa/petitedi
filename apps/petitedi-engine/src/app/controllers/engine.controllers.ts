import { NextFunction, Request, Response } from 'express';
import ProfileModel from '../../../../petitedi-service/src/app/models/profile.model';
import { logger } from '@petitedi/common/common-utils';

export const executeTestActivity = async (req: Request, res: Response, next: NextFunction) => {
  const profileId = req.params.profileId;

  const profile = findProfileById(profileId);
  res.json(profile);
};


export async function findProfileById(profileId: string) {
  try {
    return await ProfileModel.findById(profileId).populate('activities');
  } catch (e) {
    logger.error(e);
    throw new Error(e);
  }
}
