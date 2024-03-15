import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  selectedMaterialAmountQualityDocument: string = '';
  selectedParametersComplianceDocument: string = '';
  selectedAdditionalParametersComplianceDocument: string = '';
  selectedAdditionalQualityDocument: string = '';
  // TODO: untyped document list
  untypedQualityApproveDocuments: string[] = [];

  onChangeMaterialAmountQualityDocument(document: CustomDocument): void {
    this.typedQualityApproveDocuments.materialAmountQualityDocument = document.uuid;
  }

  onChangeParametersComplianceDocument(document: CustomDocument): void {
    this.typedQualityApproveDocuments.parametersComplianceDocument = document.uuid;
  }

  onChangeAdditionalParametersComplianceDocument(document: CustomDocument): void {
    this.typedQualityApproveDocuments.additionalParametersComplianceDocument = document.uuid;
  }

  onChangeAdditionalQualityDocument(document: CustomDocument): void {
    this.typedQualityApproveDocuments.additionalQualityDocument = document.uuid;
  }

  // TODO: untyped document list
  onChangeUntypedQualityApproveDocuments(document: CustomDocument): void {
    // this.representative.administrativeDocument = document.uuid;
  }

  @Input() journal: Journal = new Journal();
  @Output() onVerificationInfoSaved = new EventEmitter<Journal>();

  saveVerificationInfo(): void {
    this.verificationInfo.incomingMaterialControlJournal = this.journal;
    console.log(this.verificationInfo);
    this.journalService.createVerificationInfo(this.verificationInfo).subscribe({
      next: value => {
        this.journal?.materialOrItemVerificationInfoList.push(value);
        this.onVerificationInfoSaved.emit(this.journal);
        console.log(this.journal);
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
    // qualityApproveDocuments: this.qualityApproveDocuments,
    materialOrItemAdditionalInfo: this.materialOrItemAdditionalInfo,
    transportInfo: this.transportInfo,
  }
}
