import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../document.service";
import {CustomDocument} from "../models/customdocument";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit {

  documents: CustomDocument[] | undefined;

  constructor(private documentService: DocumentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  private getDocuments() {
    this.documentService.getDocumentList().subscribe({
      next: (value: any) => {
        this.documents = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  createDocument(): void {
    this.router.navigate(['/create-document']);
  }
}
