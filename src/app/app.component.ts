import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {OAuthService} from "angular-oauth2-oidc";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, RouterLink, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
  }


  ngOnInit() {
  }

  title = 'nuthatch-frontend';

  logout(): void {
    this.oauthService.logOut();
  }

}

