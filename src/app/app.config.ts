import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {OAuthService, provideOAuthClient} from "angular-oauth2-oidc";
import {environment} from "../environments/environment";

export const authCodeFlowConfig = {
  issuer: environment.AUTH_SERVER_ISSUER,
  tokenEndpoint: environment.AUTH_SERVER_TOKEN_ENDPOINT,
  redirectUri: window.location.origin,
  clientId: environment.AUTH_SERVER_CLIENT_ID,
  responseType: "code",
  scope: "openid profile",
}

function initializeOAuth(oauthService: OAuthService): Promise<void> {
  return new Promise<void>((resolve) => {
    oauthService.configure(authCodeFlowConfig);
    oauthService.setupAutomaticSilentRefresh();
    oauthService.loadDiscoveryDocumentAndLogin()
      .then(() => resolve());
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideOAuthClient(),
    {
      // Инициализация OAuthService при запуске приложения
      provide: APP_INITIALIZER,
      useFactory: (oauthService: OAuthService) => {
        return () => {
          initializeOAuth(oauthService);
        }
      },
      multi: true,
      deps: [
        OAuthService
      ]
    }
  ]
};


