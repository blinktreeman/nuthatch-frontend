import {FullNameGroup} from "./full-name-group";
import {PassportDetails} from "./passport-details";

export class Individual {
  uuid?: string;
  fullNameGroup?: FullNameGroup;
  addressUuid?: string;
  address?: string;
  isRussianFederationCitizen: boolean = true;
  passportDetails?: PassportDetails;
}
