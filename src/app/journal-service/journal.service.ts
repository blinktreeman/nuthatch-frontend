import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Journal} from "./models/journal";
import {RepresentativeDto} from "./models/representative-dto";

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private BASE_URL: string = "http://localhost:8765/incoming-material-service/api/v1/journal";

  constructor(private http: HttpClient) { }

  getJournalList(): Observable<Journal[]> {
    return this.http.get<Journal[]>(`${this.BASE_URL}/all`);
  }

  getRepresentativeList(): Observable<RepresentativeDto[]> {
    return this.http.get<RepresentativeDto[]>(`${this.BASE_URL}/all-representatives`)
  }

  createJournal(journal: Journal): Observable<Journal> {
    return this.http.post<Journal>(`${this.BASE_URL}`, journal);
  }

  getJournalById(uuid: string | undefined): Observable<Journal> {
    return this.http.get<Journal>(`${this.BASE_URL}?uuid=${uuid}`)
  }
}
