import mongoose from 'mongoose';
import { strict } from 'assert';

export interface CarDocument extends mongoose.Document {
  dateFrom: Date;
  dateTo: Date;
  duration: number;
  perDay: number;
  resultsFrom: Date;
  minimalPrice: number;
  city: number;
}

export const carSchema = new mongoose.Schema(
  {
    dateFrom: { type: Date, required: true },
    dateTo: { type: Date, required: true },
    duration: { type: Number, required: true },
    perDay: { type: Number, required: true },
    minimalPrice: { type: Number, required: true },
    city: { type: Number, required: true },
    resultsFrom: { type: String, required: true }
  },
  {
    timestamps: true
  }
);


const CarModel = mongoose.model<CarDocument>('Car', carSchema);

export default CarModel;
