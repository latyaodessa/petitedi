import express from 'express';
import routes from './routes';
import log from './app/utils/log';
import { environment } from './environments/environment';
import connectMongoDb from './app/utils/connectMongoDb';
const app = express();
app.use(express.json());

const server = app.listen(environment.port, async () => {
  log.info(`Listening at http://localhost:${environment.port}`);
  await connectMongoDb();
  routes(app);
});
server.on('error', console.error);
