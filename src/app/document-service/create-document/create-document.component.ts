import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../document.service";
import {Router} from "@angular/router";
import {CustomDocument} from "../models/customdocument";
import {DocumentType} from "../models/documenttype";
import {InternalAttachment} from "../models/internalattachment";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {DoctypeService} from "../doctype.service";

@Component({
  selector: 'app-create-document',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgOptimizedImage
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
    uuid: '',
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

  selectedType: DocumentType | undefined;

  onChangeType(documentType: DocumentType): void {
    this.document.documentType = documentType;
    this.document.fieldValues = new Array(documentType.documentFields.length).fill("");
  }

  file: File | null = null;

  onFileSelected(event: any): void {
    const newFile: File = event.target.files[0];
    this.file = newFile;

    this.documentService.uploadFile(newFile).subscribe({
      next: value => {
        this.document.attachment.name = value.name;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  saveDocument(): void {
    this.documentService.createDocument(this.document).subscribe({
      next: value => {
        this.goToDocumentList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onSubmit(): void {
    this.saveDocument();
  }

  private goToDocumentList(): void {
    this.router.navigate(['/document-list']);
  }
}
