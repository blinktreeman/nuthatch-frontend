import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return (): Promise<boolean> => {
    return keycloak.init({
      config: {
        url: 'https://kc.letsdigit.ru',
        realm: 'nuthatch',
        clientId: 'nuthatch-frontend'
      },
      initOptions: {
        enableLogging: true,
        onLoad: 'login-required',
        // onLoad: "check-sso",
        // silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        checkLoginIframe: true,
        // checkLoginIframeInterval: 25,
      },
      bearerExcludedUrls: ['/assets'],
      // enableBearerInterceptor: true,
    });
  };
}
