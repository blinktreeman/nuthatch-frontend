import {Component, OnInit} from '@angular/core';
import {LegalEntity} from "../entity/legal-entity";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-legal-entity-list',
  standalone: true,
  imports: [],
  templateUrl: './legal-entity-list.component.html',
  styleUrl: './legal-entity-list.component.css'
})
export class LegalEntityListComponent implements OnInit {

  legalEntityList: LegalEntity[] | undefined;

  constructor(private organizationService: OrganizationService,
              private router: Router) {
  }

  ngOnInit() {
    this.getLegalEntityList();
  }

  private getLegalEntityList(): void {
    this.organizationService.getLegalEntityList().subscribe({
      next: value => {
        this.legalEntityList = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  createLegalEntity(): void {
    this.router.navigate(['/create-legal-entity']);
  }

}
