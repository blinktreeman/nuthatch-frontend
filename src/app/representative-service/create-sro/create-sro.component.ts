import { Component } from '@angular/core';
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {Sro} from "../entity/sro";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-create-sro',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './create-sro.component.html',
  styleUrl: './create-sro.component.css'
})
export class CreateSroComponent {

  constructor(private organizationService: OrganizationService,
              private router: Router) {
  }

  private goToSroList(): void {
    this.router.navigate(['/sro-list']);
  }

  private saveSro(): void {
    this.organizationService.createSro(this.sro).subscribe({
      next: value => {
        this.goToSroList();
      },
      error: err => {
        console.log(err);
      }
    })
  }

  onSubmit(): void {
    this.saveSro();
  }

  sro: Sro = {
    uuid: '',
    name: '',
    inn: '',
    ogrn: ''
  }
}
