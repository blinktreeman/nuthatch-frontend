import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DocumentService} from "../document.service";
import {Router} from "@angular/router";
import {CustomDocument} from "../models/customdocument";
import {DocumentType} from "../models/documenttype";
import {InternalAttachment} from "../models/internalattachment";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {DoctypeService} from "../doctype.service";

@Component({
  selector: 'app-create-document',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './create-document.component.html',
  styleUrl: './create-document.component.css'
})
export class CreateDocumentComponent implements OnInit {

  documentType: DocumentType = {
    uuid: '',
    typeOfDocument: '',
    documentFields: [],
    description: ''
  };

  attachment: InternalAttachment = {
    id: '',
    name: '',
    description: '',
    checksum: ''
  }

  document: CustomDocument = {
    uuid: '',
    documentType: this.documentType,
    fieldValues: [],
    date: new Date(),
    expirationDate: new Date(),
    attachment: this.attachment
  };

  docTypes: DocumentType[] = [];

  constructor(private documentService: DocumentService,
              private docTypeService: DoctypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getDocTypes();
  }

  private getDocTypes(): void {
    this.docTypeService.getTypeList().subscribe({
      next: value => {
        this.docTypes = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  selectedType: DocumentType = this.docTypes[0];
  onChangeType(documentType: DocumentType): void {
    this.selectedType = documentType;
    console.log(this.selectedType.uuid);
  }

  saveDocument(): void {
    this.documentService.createDocument(this.document).subscribe({
      next: value => {
        console.log(value);
        this.goToDocumentList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onSubmit(): void {
    console.log(this.document);
    this.saveDocument();
  }

  private goToDocumentList(): void {
    this.router.navigate(['/document-list']);
  }

  protected readonly DocumentType = DocumentType;
}
