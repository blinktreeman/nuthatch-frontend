import {Sro} from "./sro";

export class LegalEntity {
  uuid?: string;
  fullName?: string;
  shortName?: string;
  ogrn?: string;
  inn?: string;
  addressUuid?: string;
  address?: string;
  phone?: string;
  sro?: Sro;
}
