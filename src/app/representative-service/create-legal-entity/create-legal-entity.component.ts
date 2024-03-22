import {Component, OnInit} from '@angular/core';
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {LegalEntity} from "../entity/legal-entity";
import {Sro} from "../entity/sro";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-legal-entity',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './create-legal-entity.component.html',
  styleUrl: './create-legal-entity.component.css'
})
export class CreateLegalEntityComponent implements OnInit {

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

  private goToLegalEntityList(): void {
    this.router.navigate(['/legal-entity-list']);
  }

  private saveLegalEntity(): void {
    this.organizationService.createLegalEntity(this.legalEntity).subscribe({
      next: value => {
        this.goToLegalEntityList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  selectedSro: Sro | undefined;

  onChangeSro(sro: Sro) {
    if (sro.uuid) {
      this.legalEntity.sro = sro;
    }
    else {
      // @ts-ignore
      this.legalEntity.sro = null;
    }
  }


  onSubmit(): void {
    this.saveLegalEntity();
  }

  sro: Sro = new Sro();

  legalEntity: LegalEntity = {
    sro: this.sro,
  }

}
