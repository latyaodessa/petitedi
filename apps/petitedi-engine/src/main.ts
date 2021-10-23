import express from 'express';

import { environment } from './environments/environment';
import connectMongoDb from './app/utils/connectMongoDb';
import { logger } from '@petitedi/common/common-utils';
import appRoutes from './app/routes';

const app = express();
app.use(express.json());


app.use('/', appRoutes);


const server = app.listen(environment.port, async () => {
  logger.info(`Listening at http://localhost:${environment.port}`);
  await connectMongoDb();
});
server.on('error', console.error);
