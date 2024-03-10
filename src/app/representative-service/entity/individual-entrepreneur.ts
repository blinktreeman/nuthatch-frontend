import {FullNameGroup} from "./full-name-group";
import {Sro} from "./sro";

export class IndividualEntrepreneur {
  uuid?: string;
  fullNameGroup?: FullNameGroup;
  addressUuid?: string;
  address?: string;
  ogrnip?: string;
  inn?: string;
  sro?: Sro;
}
