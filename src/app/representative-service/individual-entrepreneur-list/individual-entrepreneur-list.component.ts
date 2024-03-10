import {Component, OnInit} from '@angular/core';
import {IndividualEntrepreneur} from "../entity/individual-entrepreneur";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-individual-entrepreneur-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './individual-entrepreneur-list.component.html',
  styleUrl: './individual-entrepreneur-list.component.css'
})
export class IndividualEntrepreneurListComponent implements OnInit {

  individualEntrepreneurList: IndividualEntrepreneur[] | undefined;

  constructor(private organizationService: OrganizationService,
              private router: Router) {
  }

  ngOnInit() {
    this.getIndividualEntrepreneurList();
  }

  getIndividualEntrepreneurList(): void {
    this.organizationService.getEntrepreneurList().subscribe({
      next: value => {
        this.individualEntrepreneurList = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  createIndividualEntrepreneur(): void {
    this.router.navigate(['/create-individual-entrepreneur']);
  }
}
