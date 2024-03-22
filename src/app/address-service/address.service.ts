import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "./models/country";
import {EntityOfFederation} from "./models/entity-of-federation";
import {LocalityType} from "./models/locality-type";
import {Address} from "./models/address";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private BASE_URL: string = environment.ADDRESS_API_BASE_URL;

  constructor(private http: HttpClient) { }

  getCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BASE_URL}/country/all`);
  }

  getEntityOfFederationList(): Observable<EntityOfFederation[]> {
    return this.http.get<EntityOfFederation[]>(`${this.BASE_URL}/entity-of-federation/all`);
  }

  getLocalityTypeList(): Observable<LocalityType[]> {
    return this.http.get<LocalityType[]>(`${this.BASE_URL}/locality-type/all`)
  }

  createCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(`${this.BASE_URL}/country`, country)
  }

  createEntityOfFederation(entity: EntityOfFederation): Observable<EntityOfFederation> {
    return this.http.post<EntityOfFederation>(`${this.BASE_URL}/entity-of-federation`, entity);
  }

  createLocalityType(localityType: LocalityType): Observable<LocalityType> {
    return this.http.post<LocalityType>(`${this.BASE_URL}/locality-type`, localityType);
  }

  createAddress(address: Address): Observable<Address>
  {
    return this.http.post<Address>(`${this.BASE_URL}/address`, address);
  }

}
