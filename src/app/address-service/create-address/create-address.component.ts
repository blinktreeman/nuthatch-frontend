import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Country} from "../models/country";
import {AddressService} from "../address.service";
import {Address} from "../models/address";
import {EntityOfFederation} from "../models/entity-of-federation";
import {LocalityType} from "../models/locality-type";
import {PlanningStructure} from "../models/planning-structure";
import {RoadNetwork} from "../models/road-network";
import {Building} from "../models/building";
import {Room} from "../models/room";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-address',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './create-address.component.html',
  styleUrl: './create-address.component.css'
})
export class CreateAddressComponent implements OnInit {

  countries: Country[] | undefined;
  entitiesOfFederation: EntityOfFederation[] | undefined;
  localityTypes: LocalityType[] | undefined;

  ngOnInit() {
    this.getCountryList();
    this.getLocalityTypeList();
    this.getEntityOfFederationList();
  }

  constructor(private addressService: AddressService,
              private router: Router) {
  }

  private getCountryList(): void {
    this.addressService.getCountryList().subscribe({
      next: value => {
        this.countries = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  private getEntityOfFederationList(): void {
    this.addressService.getEntityOfFederationList().subscribe({
      next: value => {
        this.entitiesOfFederation = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  private getLocalityTypeList(): void {
    this.addressService.getLocalityTypeList().subscribe({
      next: value => {
        this.localityTypes = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  selectedCountry: Country | undefined;
  onChangeCountry(country: Country): void {
    this.address.country = country;
  }

  selectedEntityOfFederation: EntityOfFederation | undefined;
  onChangeEntity(entity: EntityOfFederation): void {
    this.address.entityOfFederation = entity;
  }

  selectedLocalityType: LocalityType | undefined;
  onChangeLocalityType(locality: LocalityType): void {
    this.address.localityType = locality;
  }

  newCountry: Country = {uuid: '', name: ''}
  onCountrySave(): void {
    this.addressService.createCountry(this.newCountry).subscribe({
      next: value => {
        this.address.country = value;
        this.getCountryList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  newEntityOfFederation: EntityOfFederation = {uuid: '', name: ''}
  onEntityOfFederationSave(): void {
    this.addressService.createEntityOfFederation(this.newEntityOfFederation).subscribe({
      next: value => {

        this.address.entityOfFederation = value;
        this.getEntityOfFederationList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  newLocalityType: LocalityType = {uuid: '', localityType: ''}
  onLocalityTypeSave(): void {
    this.addressService.createLocalityType(this.newLocalityType).subscribe({
      next: value => {
        this.address.localityType = value;
        this.getLocalityTypeList();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onSubmit(): void {
    this.addressService.createAddress(this.address).subscribe({
      next: value => {
        this.router.navigate(['/address-list']);
      },
      error: err => console.log(err)
    });
  }

  country: Country = {
    uuid: '',
    name: ''
  }

  entityOfFederation: EntityOfFederation = {
    uuid: '',
    name: ''
  }

  localityType: LocalityType = {
    uuid: '',
    localityType: ''
  }

  planningStructure: PlanningStructure = {
    uuid: '',
    planningStructureElement: '',
    planningStructureObject: ''
  }

  roadNetwork: RoadNetwork = {
    uuid: '',
    roadNetworkElement: '',
    roadNetworkObject: ''
  }

  building: Building = {
    uuid: '',
    buildingType: '',
    buildingNumber: ''
  }

  room: Room = {
    uuid: '',
    roomType: '',
    roomNumber: ''
  }

  address: Address = {
    uuid: '',
    country: this.country,
    entityOfFederation: this.entityOfFederation,
    districtOrRegionCode: '',
    settlement: '',
    localityType: this.localityType,
    localityName: '',
    planningStructure: this.planningStructure,
    roadNetwork: this.roadNetwork,
    addressingObjectType: '',
    plotNumber: '',
    building: this.building,
    room: this.room,
    parkingSpaceNumber: '',
    aoguid: '',
    oktmo: ''
  }

  protected readonly document = document;
}
