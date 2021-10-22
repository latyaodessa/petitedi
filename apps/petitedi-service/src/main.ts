import express from 'express';
import log from './app/utils/log';
import { environment } from './environments/environment';
import connectMongoDb from './app/utils/connectMongoDb';
import { Grant } from 'keycloak-connect';
import session from 'express-session';
import { keycloak, memoryStore } from './app/utils/keyckloak';
import appRoutes from './app/routes';


declare global {
  namespace Express {
    interface Request {
      kauth?: {
        grant?: Grant
      };
    }
  }
}


const app = express();
app.use(express.json());

app.use(session({
  secret: 'petite cookie',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

// Attach middleware
app.use(keycloak.middleware());

app.use('/', appRoutes);


const server = app.listen(environment.port, async () => {
  log.info(`Listening at http://localhost:${environment.port}`);
  await connectMongoDb();
});
server.on('error', console.error);
