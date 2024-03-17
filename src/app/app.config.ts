import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {OAuthService, provideOAuthClient} from "angular-oauth2-oidc";
import {oauthServiceConfig} from "./environment/oauth-service-config";

export const authCodeFlowConfig = {
  issuer: oauthServiceConfig.issuer,
  tokenEndpoint: oauthServiceConfig.tokenEndpoint,
  redirectUri: window.location.origin,
  clientId: oauthServiceConfig.clientId,
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

// function initializeOAuth(oauthService: OAuthService): void {
//     oauthService.configure(authCodeFlowConfig);
//     oauthService.setupAutomaticSilentRefresh();
//
// }

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


