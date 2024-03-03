import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomDocument} from "./models/customdocument";
import {InternalAttachment} from "./models/internalattachment";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private BASE_URL: string = "http://localhost:8765/document-service/api/v1/document";

  constructor(private http: HttpClient) { }

  createDocument(document: CustomDocument): Observable<CustomDocument> {
    return this.http.post<CustomDocument>(`${this.BASE_URL}`, document);
  }

  getDocumentList(): Observable<CustomDocument[]> {
    return this.http.get<CustomDocument[]>(`${this.BASE_URL}/all`);
  }

  uploadFile(file: File): Observable<InternalAttachment> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<InternalAttachment>(`${this.BASE_URL}/upload`, formData);
  }
}
