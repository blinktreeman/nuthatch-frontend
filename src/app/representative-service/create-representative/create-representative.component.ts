import {Component, OnInit} from '@angular/core';
import {RepresentativeService} from "../representative.service";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {Representative} from "../entity/representative";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {FullNameGroup} from "../entity/full-name-group";
import {LegalEntity} from "../entity/legal-entity";
import {IndividualEntrepreneur} from "../entity/individual-entrepreneur";
import {CustomDocument} from "../entity/administrative-document/customdocument";

@Component({
  selector: 'app-create-representative',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './create-representative.component.html',
  styleUrl: './create-representative.component.css'
})
export class CreateRepresentativeComponent implements OnInit {


  constructor(private representativeService: RepresentativeService,
              private organizationService: OrganizationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getDocumentList();
    this.getLegalEntityList();
    this.getIndividualEntrepreneurList();
  }

  documentList: CustomDocument[] = [];
  legalEntityList: LegalEntity[] = [];
  individualEntrepreneurList: IndividualEntrepreneur[] = [];

  selectedLegalEntity: LegalEntity | undefined;
  selectedEntrepreneur: IndividualEntrepreneur | undefined;
  selectedDocument: CustomDocument | undefined;
  isLegalEntityRepresentative: boolean = true;

  onChangeLegalEntity(legalEntity: LegalEntity): void {
    this.representative.legalEntity = legalEntity;
  }

  onChangeEntrepreneur(entrepreneur: IndividualEntrepreneur): void {
    this.representative.individualEntrepreneur = entrepreneur;
  }

  onChangeDocument(document: CustomDocument): void {
    this.representative.administrativeDocument = document.uuid;
  }

  private getDocumentList(): void {
    this.representativeService.getDocumentList().subscribe({
      next: value => {
        this.documentList = value as CustomDocument[];
      },
      error: err => console.log(err)
    });
  }

  private getLegalEntityList(): void {
    this.organizationService.getLegalEntityList().subscribe({
      next: value => {
        this.legalEntityList = value;
      },
      error: err => console.log(err)
    });
  }

  private getIndividualEntrepreneurList(): void {
    this.organizationService.getEntrepreneurList().subscribe({
      next: value => {
        this.individualEntrepreneurList = value;
      },
      error: err => console.log(err)
    });
  }

  private goToRepresentativeList(): void {
    this.router.navigate(['/representative-list']);
  }

  private saveRepresentative(): void {
    if (this.isLegalEntityRepresentative) {
      //@ts-ignore
      this.representative.individualEntrepreneur = null;
    } else {
      //@ts-ignore
      this.representative.legalEntity = null;
    }
    console.log(this.representative);
    this.representativeService.createRepresentative(this.representative).subscribe({
      next: value => {
        this.goToRepresentativeList();
      },
      error: err => console.log(err)
    });
  }

  onSubmit(): void {
    this.saveRepresentative();
  }

  fullNameGroup: FullNameGroup = new FullNameGroup();
  legalEntity: LegalEntity = new LegalEntity();
  individualEntrepreneur: IndividualEntrepreneur = new IndividualEntrepreneur();

  representative: Representative = {
    fullNameGroup: this.fullNameGroup,
    legalEntity: this.legalEntity,
    individualEntrepreneur: this.individualEntrepreneur
  };

}
