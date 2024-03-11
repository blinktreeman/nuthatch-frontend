import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MaterialOrItemVerificationInfo} from "../models/material-or-item-verification-info";
import {JournalService} from "../journal.service";

@Component({
  selector: 'app-verification-info-list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './verification-info-list.component.html',
  styleUrl: './verification-info-list.component.css'
})
export class VerificationInfoListComponent implements OnInit {

  @Input()
  materialOrItemVerificationInfoSet: MaterialOrItemVerificationInfo[] = [];

  constructor(private journalService: JournalService) {
  }

  ngOnInit(): void {
  }

  getVerificationInfoList(uuid: string | undefined): void {

  }
}
