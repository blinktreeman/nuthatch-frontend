import {APP_INITIALIZER, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init({
    config: {
      url: 'https://kc.letsdigit.ru',
      realm: 'nuthatch',
      clientId: 'nuthatch-frontend'
    },
    initOptions: {
      onLoad: "check-sso",
      silentCheckSsoRedirectUri: window.location.origin + 'assets/silent-check-sso.html'
    }
  });
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeycloakAngularModule],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nuthatch-frontend';
}
