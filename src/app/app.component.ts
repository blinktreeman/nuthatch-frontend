import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeycloakAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nuthatch-frontend';
}
