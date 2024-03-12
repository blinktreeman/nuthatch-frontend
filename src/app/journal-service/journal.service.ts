import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Journal} from "./models/journal";
import {RepresentativeDto} from "./models/representative-dto";
import {MaterialOrItemVerificationInfo} from "./models/material-or-item-verification-info";
import {CustomDocument} from "./models/approve-document/customdocument";

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private BASE_URL: string = "http://localhost:8765/incoming-material-service/api/v1";

  constructor(private http: HttpClient) { }

  getJournalList(): Observable<Journal[]> {
    return this.http.get<Journal[]>(`${this.BASE_URL}/journal/all`);
  }

  getRepresentativeList(): Observable<RepresentativeDto[]> {
    return this.http.get<RepresentativeDto[]>(`${this.BASE_URL}/journal/all-representatives`)
  }

  createJournal(journal: Journal): Observable<Journal> {
    return this.http.post<Journal>(`${this.BASE_URL}/journal`, journal);
  }

  getJournalById(uuid: string | undefined): Observable<Journal> {
    return this.http.get<Journal>(`${this.BASE_URL}/journal?uuid=${uuid}`)
  }

  createVerificationInfo(verificationInfo:
                           MaterialOrItemVerificationInfo): Observable<MaterialOrItemVerificationInfo> {
    return this.http.post<MaterialOrItemVerificationInfo>(`${this.BASE_URL}/verification-info`, verificationInfo)
  }

  getDocumentList(): Observable<CustomDocument[]> {
    return this.http.get<CustomDocument[]>(`${this.BASE_URL}/verification-info/all-documents`);
  }

}
