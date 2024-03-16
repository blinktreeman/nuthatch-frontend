import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {KeycloakService} from "keycloak-angular";

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakService: KeycloakService = inject(KeycloakService);
  const authToken = keycloakService.getToken();
  // Клонируем запрос, добавляя токен авторизации
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
  });
  console.log(authReq);
  return next(authReq);
};
