import {Component, OnInit} from '@angular/core';
import {DocumentType} from "../models/documenttype";
import {DoctypeService} from "../doctype.service";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctype-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './doctype-list.component.html',
  styleUrl: './doctype-list.component.css'
})
export class DoctypeListComponent implements OnInit {

  docTypes: DocumentType[] | undefined;

  constructor(private doctypeService: DoctypeService,
              private router: Router) {
  }

  ngOnInit() {
    this.getDocTypes();
  }

  private getDocTypes(): void {
    this.doctypeService.getTypeList().subscribe({
      next: value => {
        this.docTypes = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  createDoctype(): void {
    this.router.navigate(['/create-doctype']);
  }
}
