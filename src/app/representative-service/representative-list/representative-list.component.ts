import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Representative} from "../entity/representative";
import {RepresentativeService} from "../representative.service";

@Component({
  selector: 'app-representative-list',
  standalone: true,
  imports: [],
  templateUrl: './representative-list.component.html',
  styleUrl: './representative-list.component.css'
})
export class RepresentativeListComponent implements OnInit {

  representativeList: Representative[] | undefined;

  constructor(private representativeService: RepresentativeService,
              private router: Router) {
  }

  ngOnInit() {
    this.getRepresentativeList();
  }

  private getRepresentativeList(): void {
    this.representativeService.getRepresentativeList().subscribe({
      next: value => {
        this.representativeList = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  createRepresentative(): void {
    this.router.navigate(['/create-representative']);
  }

}
