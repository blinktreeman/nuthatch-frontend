import {Component, OnInit} from '@angular/core';
import {RepresentativeService} from "../representative.service";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {Representative} from "../entity/representative";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FullNameGroup} from "../entity/full-name-group";
import {LegalEntity} from "../entity/legal-entity";
import {IndividualEntrepreneur} from "../entity/individual-entrepreneur";
import {Individual} from "../entity/individual";

@Component({
  selector: 'app-create-representative',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
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
  }

  private goToRepresentativeList(): void {
    this.router.navigate(['/representative-list']);
  }

  private saveRepresentative(): void {
    if (this.legalEntity.uuid) {
      // @ts-ignore
      this.representative.individualEntrepreneur = null;
    } else {
      // @ts-ignore
      this.legalEntity = null;
    }

    this.representativeService.createRepresentative(this.representative).subscribe({
      next: value => {
        console.log(value);
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
