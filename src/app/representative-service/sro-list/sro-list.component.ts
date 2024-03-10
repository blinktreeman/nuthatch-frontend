import {Component, OnInit} from '@angular/core';
import {Sro} from "../entity/sro";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sro-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './sro-list.component.html',
  styleUrl: './sro-list.component.css'
})
export class SroListComponent implements OnInit {

  sroList: Sro[] | undefined;

  constructor(private organizationService: OrganizationService,
              private router: Router) {
  }

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

  createSro(): void {
    this.router.navigate(['/create-sro']);
  }
}
