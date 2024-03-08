import {FullNameGroup} from "./full-name-group";
import {Sro} from "./sro";

export interface IndividualEntrepreneur {
  uuid: string;
  fullNameGroup: FullNameGroup;
  addressUuid: string;
  address: string;
  ogrnip: string;
  inn: string;
  sro: Sro;
}
