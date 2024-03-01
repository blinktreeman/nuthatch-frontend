import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DocumentType} from "./models/documenttype";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctypeService {

  private BASE_URL: string = "http://localhost:8765/document-service/api/v1/document-type";

  constructor(private http: HttpClient) {
  }

  createType(documentType: DocumentType | undefined): Observable<Object> {
    return this.http.post(`${this.BASE_URL}`, documentType);
  }

  getTypeList(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.BASE_URL}/all`)
  }
}
