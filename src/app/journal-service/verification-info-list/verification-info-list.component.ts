import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MaterialOrItemVerificationInfo} from "../models/material-or-item-verification-info";
import {JournalService} from "../journal.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QualityApproveDocuments} from "../models/quality-approve-documents";
import {Journal} from "../models/journal";
import {MaterialOrItemAdditionalInfo} from "../models/material-or-item-additional-info";
import {Amount} from "../models/amount";
import {Weight} from "../models/weight";
import {TransportInfo} from "../models/transport-info";
import {UntypedQualityApproveDocument} from "../models/untyped-quality-approve-document";
import {TypedQualityApproveDocument} from "../models/typed-quality-approve-document";
import {CustomDocument} from "../models/approve-document/customdocument";

@Component({
  selector: 'app-verification-info-list',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './verification-info-list.component.html',
  styleUrl: './verification-info-list.component.css'
})
export class VerificationInfoListComponent implements OnInit {

  documentList: CustomDocument[] = [];
  selectedDocument: CustomDocument | undefined;

  selectedMaterialAmountQualityDocument: string = '';
  selectedParametersComplianceDocument: string = '';
  selectedAdditionalParametersComplianceDocument: string = '';
  selectedAdditionalQualityDocument: string = '';

  @Input()
  journal: Journal | undefined;

  constructor(private journalService: JournalService) {
  }

  ngOnInit(): void {
    this.getDocumentList();
  }

  private getDocumentList(): void {
    this.journalService.getDocumentList().subscribe({
      next: value => {
        console.log(value);
        this.documentList = value as CustomDocument[];
      },
      error: err => console.log(err)
    });
  }

  onChangeDocument(document: CustomDocument): void {
    // this.representative.administrativeDocument = document.uuid;
  }

  saveVerificationInfo(): void {
    this.verificationInfo.incomingMaterialControlJournal = this.journal;
    this.journalService.createVerificationInfo(this.verificationInfo).subscribe({
      next: value => {
        // TODO: Обновить список записей
        console.log(value);
      },
      error: err => console.log(err)
    });
  }


  amount: Amount = new Amount();
  weight: Weight = new Weight();
  transportInfo: TransportInfo = new TransportInfo();

  untypedQualityApproveDocument: UntypedQualityApproveDocument = new UntypedQualityApproveDocument();
  typedQualityApproveDocuments: TypedQualityApproveDocument = new TypedQualityApproveDocument();
  qualityApproveDocuments: QualityApproveDocuments = {
    untypedQualityApproveDocument: this.untypedQualityApproveDocument,
    typedQualityApproveDocuments: this.typedQualityApproveDocuments
  }

  materialOrItemAdditionalInfo: MaterialOrItemAdditionalInfo = {
    amount: this.amount,
    weight: this.weight
  };

  verificationInfo: MaterialOrItemVerificationInfo = {
    qualityApproveDocuments: this.qualityApproveDocuments,
    materialOrItemAdditionalInfo: this.materialOrItemAdditionalInfo,
    transportInfo: this.transportInfo,
  }
}
