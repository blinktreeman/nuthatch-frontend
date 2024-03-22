import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DocumentType} from "./models/documenttype";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DoctypeService {

  private BASE_URL: string = environment.DOCUMENT_API_BASE_URL;

  constructor(private http: HttpClient) {
  }

  createType(documentType: DocumentType | undefined): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/document-type`, documentType);
  }

  getTypeList(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.BASE_URL}/document-type/all`)
  }
}
