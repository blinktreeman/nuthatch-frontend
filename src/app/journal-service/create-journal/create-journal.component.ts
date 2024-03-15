import {Component, OnInit} from '@angular/core';
import {Journal} from "../models/journal";
import {JournalTitle} from "../models/journal-title";
import {RepresentativeDto} from "../models/representative-dto/representative-dto";
import {JournalService} from "../journal.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MaterialOrItemVerificationInfo} from "../models/material-or-item-verification-info";

@Component({
  selector: 'app-create-journal',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './create-journal.component.html',
  styleUrl: './create-journal.component.css'
})
export class CreateJournalComponent implements OnInit {

  representativeList: RepresentativeDto[] = [];

  ngOnInit(): void {
    this.getRepresentativeList();
  }
  constructor(private journalService: JournalService,
              private router: Router) {
  }

  private getRepresentativeList(): void {
    this.journalService.getRepresentativeList().subscribe({
      next: value => {
        console.log(value);
        this.representativeList = value;
      },
      error: err => console.log(err)
    })
  }

  private goToJournalList(): void {
    this.router.navigate(['/journal-list']);
  }

  private saveJournal(): void {
    console.log(this.journal);
    this.journalService.createJournal(this.journal).subscribe({
      next: value => {
        console.log(value);
        this.goToJournalList();
      },
      error: err => console.log(err)
    })
  }

  journalRepresentative: RepresentativeDto | undefined;

  onRepresentativeSelect(journalRepresentative: RepresentativeDto): void {
    this.journalRepresentative = journalRepresentative;
  }

  journalRepresentativeList: RepresentativeDto[] = [];

  onAdd(): void {
    // @ts-ignore
    this.journalRepresentativeList.push(this.journalRepresentative);
  }

  onSubmit(): void {
    // @ts-ignore
    this.journalRepresentativeList.map(e =>
      this.journal.incomingMaterialControlJournalTitle?.organizationAndRepresentative.push(e.uuid));
    this.saveJournal();
  }

  journalTitle: JournalTitle = {
    permanentObjectInfo: '',
    organizationAndRepresentative: []
  }
  materialOrItemVerificationInfoSet: MaterialOrItemVerificationInfo[] = [];
  journal: Journal = {
    incomingMaterialControlJournalTitle: this.journalTitle,
    materialOrItemVerificationInfoList: this.materialOrItemVerificationInfoSet
  }

}
