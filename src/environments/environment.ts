export const environment = {
  production: true,

// address service env
  ADDRESS_API_BASE_URL: 'http://5.181.108.17:8765/address-service/api/v1',

// document service env
  DOCUMENT_API_BASE_URL: 'http://5.181.108.17:8765/document-service/api/v1',

// journal service env
  JOURNAL_API_BASE_URL: 'http://5.181.108.17:8765/incoming-material-service/api/v1',

// organization service env
  ORGANIZATION_API_BASE_URL: 'http://5.181.108.17:8765/organization-service/api/v1',

// oauth2 service env
  AUTH_SERVER_ISSUER: 'https://kc.letsdigit.ru/realms/nuthatch',
  AUTH_SERVER_TOKEN_ENDPOINT: 'https://kc.letsdigit.ru/realms/nuthatch/protocol/openid-connect/token',
  AUTH_SERVER_CLIENT_ID: 'nuthatch-frontend'
};
