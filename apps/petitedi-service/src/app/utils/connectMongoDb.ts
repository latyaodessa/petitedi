import mongoose from 'mongoose';
import log from './log';
import { environment } from '../../environments/environment';

async function connectMongoDb() {

  try {

    await mongoose.connect(environment.mongoDbUri);
    log.info('DB connected');
  } catch (error) {
    console.error(error);
    log.error('Could not connect to db');
    process.exit(1);
  }
}

export default connectMongoDb;
