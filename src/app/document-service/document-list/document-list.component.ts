import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../document.service";
import {CustomDocument} from "../models/customdocument";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit {

  documents: CustomDocument[] | undefined;

  constructor(private documentService: DocumentService) {
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
}
