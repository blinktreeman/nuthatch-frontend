import {Component, OnInit} from '@angular/core';
import {IndividualEntrepreneur} from "../entity/individual-entrepreneur";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {Sro} from "../entity/sro";
import {FullNameGroup} from "../entity/full-name-group";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-individual-entrepreneur',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './create-individual-entrepreneur.component.html',
  styleUrl: './create-individual-entrepreneur.component.css'
})
export class CreateIndividualEntrepreneurComponent implements OnInit {

  constructor(private organizationService: OrganizationService,
              private router: Router) {
  }

  sroList: Sro[] = [];

  ngOnInit() {
    this.getSroList();
  }

  private getSroList(): void {
    this.organizationService.getSroList().subscribe({
      next: value => {
        this.sroList = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  private goToEntrepreneurList(): void {
    this.router.navigate(['/individual-entrepreneur-list']);
  }

  private saveEntrepreneur(): void {
    this.organizationService.createEntrepreneur(this.entrepreneur).subscribe({
      next: value => {
        console.log(value);
        this.goToEntrepreneurList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  selectedSro: Sro | undefined;

  onChangeSro(sro: Sro) {
    if (sro.uuid) {
      this.entrepreneur.sro = sro;
    } else {
      // @ts-ignore
      this.entrepreneur.sro = null;
    }
    console.log(this.entrepreneur.sro);
  }


  onSubmit(): void {
    this.saveEntrepreneur();
  }

  sro: Sro = new Sro();

  fullNameGroup: FullNameGroup = new FullNameGroup();

  entrepreneur: IndividualEntrepreneur = {
    fullNameGroup: this.fullNameGroup,
    sro: this.sro
  }

}
