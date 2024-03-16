import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptorInterceptor} from "./auth/auth-interceptor.interceptor";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./auth/initialize-keycloak";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Добавляем провайдера для HttpClient: интерцептор добавит token в заголовок запроса
    provideHttpClient(withInterceptors([authInterceptorInterceptor])),
    // provideHttpClient(),
    {
      // Инициализация сервиса Keycloak
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    importProvidersFrom([
      KeycloakAngularModule,
    ])
    // Добавляем провайдера
    // KeycloakService,
  ]
};


