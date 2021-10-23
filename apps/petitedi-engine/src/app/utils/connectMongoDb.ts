import { logger } from '@petitedi/common/common-utils';
import mongoose from 'mongoose';
import { environment } from '../../environments/environment';

async function connectMongoDb() {

  try {

    await mongoose.connect(environment.mongoDbUri);
    mongoose.set('debug', true);
    logger.info('DB connected');
  } catch (error) {
    console.error(error);
    logger.error('Could not connect to db');
    process.exit(1);
  }
}

export default connectMongoDb;
