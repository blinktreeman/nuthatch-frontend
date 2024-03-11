import {Component, OnInit} from '@angular/core';
import {Journal} from "../models/journal";
import {JournalTitle} from "../models/journal-title";
import {RepresentativeDto} from "../models/representative-dto";
import {JournalService} from "../journal.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

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

  private representativeList: RepresentativeDto[] = [];

  ngOnInit(): void {
    this.getRepresentativeList();
  }
  constructor(private journalService: JournalService,
              private router: Router) {
  }

  private getRepresentativeList(): void {
    this.journalService.getRepresentativeList().subscribe({
      next: value => {
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

  onSubmit(): void {
    this.saveJournal();
  }

  journalTitle: JournalTitle = {
    permanentObjectInfo: '',
  }
  journal: Journal = {
    incomingMaterialControlJournalTitle: this.journalTitle,
  }

}
