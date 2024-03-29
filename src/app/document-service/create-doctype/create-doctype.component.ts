import {Component} from '@angular/core';
import {DocumentType} from "../models/documenttype";
import {DoctypeService} from "../doctype.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-create-doctype',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './create-doctype.component.html',
  styleUrl: './create-doctype.component.css'
})
export class CreateDoctypeComponent {

  documentType: DocumentType = {
    uuid: '',
    typeOfDocument: '',
    documentFields: [],
    description: ''
  };
  newField: string = '';

   constructor(private doctypeService: DoctypeService,
              private router: Router) {
  }

  private saveDocumentType(): void {
    this.doctypeService.createType(this.documentType).subscribe({
      next: value => {
        this.goToTypeList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onAdd(): void {
     this.documentType.documentFields.push(this.newField);
     this.newField = '';
  }

  onSubmit(): void {
    this.saveDocumentType();
  }

  private goToTypeList(): void {
    this.router.navigate(['/doctype-list']);
  }
}
