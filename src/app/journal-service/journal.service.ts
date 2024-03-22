import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Journal} from "./models/journal";
import {RepresentativeDto} from "./models/representative-dto/representative-dto";
import {MaterialOrItemVerificationInfo} from "./models/material-or-item-verification-info";
import {CustomDocument} from "./models/approve-document/customdocument";
import {OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private BASE_URL: string = environment.JOURNAL_API_BASE_URL;

  constructor(private http: HttpClient,
              private oauthService: OAuthService) {
  }

  getJournalList(): Observable<Journal[]> {
    return this.http.get<Journal[]>(`${this.BASE_URL}/journal/all`,
      {
        headers: {
          'Authorization': `Bearer ${this.oauthService.getAccessToken()}`
        }
      });
  }

  getRepresentativeList(): Observable<RepresentativeDto[]> {
    return this.http.get<RepresentativeDto[]>(`${this.BASE_URL}/journal/all-representatives`,
      {
        headers: {
          'Authorization': `Bearer ${this.oauthService.getAccessToken()}`
        }
      });
  }

  createJournal(journal: Journal): Observable<Journal> {
    return this.http.post<Journal>(`${this.BASE_URL}/journal`, journal,
      {
        headers: {
          'Authorization': `Bearer ${this.oauthService.getAccessToken()}`
        }
      });
  }

  getJournalById(uuid: string | undefined): Observable<Journal> {
    return this.http.get<Journal>(`${this.BASE_URL}/journal?uuid=${uuid}`,
      {
        headers: {
          'Authorization': `Bearer ${this.oauthService.getAccessToken()}`
        }
      });
  }

  createVerificationInfo(verificationInfo:
                           MaterialOrItemVerificationInfo): Observable<MaterialOrItemVerificationInfo> {
    return this.http.post<MaterialOrItemVerificationInfo>(`${this.BASE_URL}/verification-info`, verificationInfo,
      {
        headers: {
          'Authorization': `Bearer ${this.oauthService.getAccessToken()}`
        }
      });
  }

  getDocumentList(): Observable<CustomDocument[]> {
    return this.http.get<CustomDocument[]>(`${this.BASE_URL}/verification-info/all-documents`,
      {
        headers: {
          'Authorization': `Bearer ${this.oauthService.getAccessToken()}`
        }
      });
  }

}
