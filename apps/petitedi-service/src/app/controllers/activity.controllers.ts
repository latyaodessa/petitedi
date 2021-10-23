import { NextFunction, Request, Response } from 'express';
import { ProfileDocument } from '../models/profile.model';
import ActivityModel, { ActivityDocument } from '../models/activity.model';
import { findProfileById } from './profile.controllers';
import { Activity } from '@petitedi/petitedi-service/petite-interfaces';
import { logger } from '@petitedi/common/common-utils';

export const updateActivity = async (req: Request, res: Response, next: NextFunction) => {
  const profileId = req.params.profileId;
  const activityId = req.params.activityId;

  const activity: Partial<Activity> = req.body;


  let doc = await ActivityModel.findOneAndUpdate({
    _id: activityId,
    profile: profileId
  }, activity, {
    new: true
  });

  res.json(doc);
};

export const createActivity = async (req: Request, res: Response, next: NextFunction) => {

  const profileId = req.params.profileId;

  try {
    const profile: ProfileDocument = await findProfileById(profileId);

    const activity: ActivityDocument = new ActivityModel({});


    profile.activities.push(activity);

    activity.updateOne({ profile: profileId }, (r) => {

    });

    await activity.save();

    await profile.save();


    // profile.update({ $push: { tasks: activity._id } },
    //   { new: true, useFindAndModify: false });

    //
    // ProfileModel.findByIdAndUpdate(profileId, {
    //   $push: { tasks: activity._id }
    // }, { 'new': true }, function(err, response) {
    //
    //   console.log(err);
    //   console.log(response);
    //
    // });


    // const activity = await TaskModel.create({});
    //
    // const profile = ProfileModel.findByIdAndUpdate(
    //   profileId,
    //   { $push: { tasks: activity._id } },
    //   { new: true, useFindAndModify: false }
    // );


    res.json('profile');

  } catch (e) {
    logger.error(e);
    res.status(400).send(e);
  }

  console.log(profileId);

  // const profile: ActivityDocument = new ProfileModel({});
  // await profile.save();

};
