import mongoose, { Document, Schema } from 'mongoose';
import { Profile } from '@petitedi/petitedi-service/petite-interfaces';


export interface ProfileDocument extends Profile, Document {
}


const ProfileSchema = new Schema(
  {
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
    // gateways: [{ type: Schema.Types.ObjectId, ref: 'Gateway' }]
  },
  {
    timestamps: true
  }
);

const ProfileModel = mongoose.model<ProfileDocument>('Profile', ProfileSchema);

export default ProfileModel;
