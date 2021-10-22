import KeycloakConnect from 'keycloak-connect';
import session from 'express-session';


const keycloakConfig: KeycloakConnect.KeycloakConfig = {
  resource: 'edi-service',
  'bearer-only': true,
  'auth-server-url': 'http://localhost:9090/auth',
  realm: 'petitedi',
  'ssl-required': 'external',
  'confidential-port': 8443
};


export const memoryStore = new session.MemoryStore();
export const keycloak = new KeycloakConnect({ store: memoryStore }, keycloakConfig);




