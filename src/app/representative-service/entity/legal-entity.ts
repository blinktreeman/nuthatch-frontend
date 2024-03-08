import {Sro} from "./sro";

export interface LegalEntity {
  uuid: string;
  fullName: string;
  shortName: string;
  ogrn: string;
  inn: string;
  addressUuid: string;
  address: string;
  phone: string;
  sro: Sro;
}
