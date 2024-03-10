import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Representative} from "./entity/representative";
import {CustomDocument} from "./entity/administrative-document/customdocument";

@Injectable({
  providedIn: 'root'
})
export class RepresentativeService {

  private BASE_URL: string = "http://localhost:8765/organization-service/api/v1";

  constructor(private http: HttpClient) { }

  getRepresentativeList(): Observable<Representative[]> {
    return this.http.get<Representative[]>(`${this.BASE_URL}/representative/all`);
  }

  createRepresentative(representative: Representative): Observable<Representative> {
    return this.http.post<Representative>(`${this.BASE_URL}/representative`, representative);
  }

  getDocumentList(): Observable<CustomDocument[]> {
    return this.http.get<CustomDocument[]>(`${this.BASE_URL}/representative/all-documents`);
  }

}
