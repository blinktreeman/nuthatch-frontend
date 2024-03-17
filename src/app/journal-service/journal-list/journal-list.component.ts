import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Journal} from "../models/journal";
import {JournalService} from "../journal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-journal-list',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './journal-list.component.html',
  styleUrl: './journal-list.component.css'
})
export class JournalListComponent implements OnInit {

  journalList: Journal[] = [];

  constructor(private journalService: JournalService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getJournalList();
  }

  createJournal(): void {
    this.router.navigate(['/create-journal']);
  }

  journalDetails(uuid: string | undefined): void {
    this.router.navigate(['/journal-details', uuid]);
  }

  private getJournalList(): void {
    this.journalService.getJournalList().subscribe({
      next: value => {
        this.journalList = value;
      },
      error: err => console.log(err)
    })
  }

}
