import mongoose, { Document, Schema } from 'mongoose';
import { Activity, ActivityTypeEnum } from '@petitedi/petitedi-service/petite-interfaces';

export interface ActivityDocument extends Activity, Document {
}


const ActivitySchema = new Schema({
  incoming: { type: String },
  outgoing: { type: String },
  type: { type: String, enum: ActivityTypeEnum },
  requestConfig: { type: Schema.Types.Mixed  },
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
});


const ActivityModel = mongoose.model<ActivityDocument>('Activity', ActivitySchema);

export default ActivityModel;
