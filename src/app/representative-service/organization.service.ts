import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Sro} from "./entity/sro";
import {Observable} from "rxjs";
import {LegalEntity} from "./entity/legal-entity";
import {IndividualEntrepreneur} from "./entity/individual-entrepreneur";
import {Individual} from "./entity/individual";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private BASE_URL: string = environment.ORGANIZATION_API_BASE_URL;

  constructor(private http: HttpClient) {
  }

  createSro(sro: Sro): Observable<Sro> {
    return this.http.post<Sro>(`${this.BASE_URL}/sro`, sro);
  }

  getSroList(): Observable<Sro[]> {
    return this.http.get<Sro[]>(`${this.BASE_URL}/sro/all`);
  }

  createLegalEntity(legalEntity: LegalEntity): Observable<LegalEntity> {
    return this.http.post<LegalEntity>(`${this.BASE_URL}/legal-entity`, legalEntity);
  }

  getLegalEntityList(): Observable<LegalEntity[]> {
    return this.http.get<LegalEntity[]>(`${this.BASE_URL}/legal-entity/all`);
  }

  createEntrepreneur(entrepreneur: IndividualEntrepreneur): Observable<IndividualEntrepreneur> {
    return this.http.post<IndividualEntrepreneur>(`${this.BASE_URL}/individual-entrepreneur`, entrepreneur);
  }

  getEntrepreneurList(): Observable<IndividualEntrepreneur[]> {
    return this.http.get<IndividualEntrepreneur[]>(`${this.BASE_URL}/individual-entrepreneur/all`);
  }

  createIndividual(individual: Individual): Observable<Individual> {
    return this.http.post<Individual>(`${this.BASE_URL}/individual`, individual);
  }

  getIndividualList(): Observable<Individual[]> {
    return this.http.get<Individual[]>(`${this.BASE_URL}/individual/all`);
  }

}
