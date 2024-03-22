import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomDocument} from "./models/customdocument";
import {InternalAttachment} from "./models/internalattachment";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private BASE_URL: string = environment.DOCUMENT_API_BASE_URL;

  constructor(private http: HttpClient) { }

  createDocument(document: CustomDocument): Observable<CustomDocument> {
    return this.http.post<CustomDocument>(`${this.BASE_URL}/document`, document);
  }

  getDocumentList(): Observable<CustomDocument[]> {
    return this.http.get<CustomDocument[]>(`${this.BASE_URL}/document/all`);
  }

  uploadFile(file: File): Observable<InternalAttachment> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<InternalAttachment>(`${this.BASE_URL}/document/upload`, formData);
  }
}
