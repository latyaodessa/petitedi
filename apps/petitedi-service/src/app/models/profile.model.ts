import mongoose, { Document, Schema } from 'mongoose';
import { Profile } from '@petitedi/petitedi-service/petite-interfaces';

export interface ProfileDocument extends Profile, Document {
}


const TriggerSchema = new Schema({
  test: { type: String, required: true }
});

const TaskSchema = new Schema({
  id: { type: String, required: true },
  incoming: { type: String, required: true },
  outgoing: { type: String, required: true }
});


const ProfileSchema = new Schema(
  {
    triggers: [TriggerSchema],
    tasks: [TaskSchema],
  },
  {
    timestamps: true
  }
);

const CarModel = mongoose.model<ProfileDocument>('Profile', ProfileSchema);

export default CarModel;
