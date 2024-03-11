import {Component, OnInit} from '@angular/core';
import {JournalService} from "../journal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Journal} from "../models/journal";
import {JournalTitle} from "../models/journal-title";

@Component({
  selector: 'app-journal-details',
  standalone: true,
  imports: [],
  templateUrl: './journal-details.component.html',
  styleUrl: './journal-details.component.css'
})
export class JournalDetailsComponent implements OnInit {

  uuid: string = '';

  constructor(private journalService: JournalService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params['uuid'];
    this.journalService.getJournalById(this.uuid).subscribe({
      next: value => {
        this.jounal = value;
      },
      error: err => console.log(err)
    })
  }

  journalTitle: JournalTitle = new JournalTitle();
  jounal: Journal = {
    uuid: this.uuid,
    incomingMaterialControlJournalTitle: this.journalTitle
  }
}
