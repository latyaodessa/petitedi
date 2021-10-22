import mongoose, { Document, Schema } from 'mongoose';
import { Event } from '@petitedi/petitedi-service/petite-interfaces';

export interface EventDocument extends Event, Document {
}


const EventSchema = new Schema({
  outgoing: { type: String },
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
});


const EventModel = mongoose.model<EventDocument>('Event', EventSchema);

export default EventModel;
