import {Component, OnInit} from '@angular/core';
import {Individual} from "../entity/individual";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-individual-list',
  standalone: true,
  imports: [],
  templateUrl: './individual-list.component.html',
  styleUrl: './individual-list.component.css'
})
export class IndividualListComponent implements OnInit {

  individualList: Individual[] | undefined;

  constructor(private organizationService: OrganizationService,
              private router: Router) {
  }

  ngOnInit() {
    this.getIndividualList();
  }

  private getIndividualList(): void {
    this.organizationService.getIndividualList().subscribe({
      next: value => {
        this.individualList = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  createIndividual(): void {
    this.router.navigate(['/create-individual']);
  }
}
