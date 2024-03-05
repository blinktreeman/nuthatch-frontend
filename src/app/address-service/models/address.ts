import {LocalityType} from "./locality-type";
import {PlanningStructure} from "./planning-structure";
import {RoadNetwork} from "./road-network";
import {Building} from "./building";
import {Room} from "./room";
import {Country} from "./country";
import {EntityOfFederation} from "./entity-of-federation";

export interface Address {
  uuid: string,
  country: Country;
  entityOfFederation: EntityOfFederation,
  districtOrRegionCode: string,
  settlement: string,
  localityType: LocalityType,
  localityName: string,
  planningStructure: PlanningStructure,
  roadNetwork: RoadNetwork,
  addressingObjectType: string,
  plotNumber: string,
  building: Building,
  room: Room,
  parkingSpaceNumber: string,
  aoguid: string,
  oktmo: string
}
