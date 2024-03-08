import {FullNameGroup} from "./full-name-group";
import {PassportDetails} from "./passport-details";

export interface Individual {
  uuid: string;
  fullNameGroup: FullNameGroup;
  addressUuid: string;
  address: string;
  isRussianFederationCitizen: boolean;
  passportDetails: PassportDetails;
}
