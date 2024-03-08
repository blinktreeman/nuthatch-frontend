import { Component } from '@angular/core';
import {Individual} from "../entity/individual";
import {FullNameGroup} from "../entity/full-name-group";
import {PassportDetails} from "../entity/passport-details";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {PassportDetailsRussianFederation} from "../entity/passport-details-ru";
import {DocumentDetailsForeign} from "../entity/document-details-foreign";

@Component({
  selector: 'app-create-individual',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './create-individual.component.html',
  styleUrl: './create-individual.component.css'
})
export class CreateIndividualComponent {

  constructor(private organizationService: OrganizationService,
              private router: Router) {
  }

  private goToIndividualList(): void {
    this.router.navigate(['/individual-list']);
  }

  private saveIndividual(): void {
    if (this.individual.isRussianFederationCitizen) {
      // @ts-ignore
      this.individual.passportDetails.documentDetailsForeign = null;
    } else {
      // @ts-ignore
      this.individual.passportDetails.passportDetailsRussianFederation = null;
    }
    this.organizationService.createIndividual(this.individual).subscribe({
      next: value => {
        console.log(value);
        this.goToIndividualList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onSubmit(): void {
    this.saveIndividual();
  }

  fullNameGroup: FullNameGroup = {
    firstName: '',
    middleName: '',
    lastName: ''
  }

  passportDetailsRU: PassportDetailsRussianFederation = {
    series: '',
    number: '',
    dateIssue: new Date()
  }

  documentDetailsForeign: DocumentDetailsForeign = {
    docName: '',
    series: '',
    number: '',
    dateIssue: new Date()
  }

  passportDetails: PassportDetails = {
    passportDetailsRussianFederation: this.passportDetailsRU,
    documentDetailsForeign: this.documentDetailsForeign
  }

  individual: Individual = {
    uuid: '',
    fullNameGroup: this.fullNameGroup,
    addressUuid: '',
    address: '',
    isRussianFederationCitizen: true,
    passportDetails: this.passportDetails
  }
}
