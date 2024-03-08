import {PassportDetailsRussianFederation} from "./passport-details-ru";
import {DocumentDetailsForeign} from "./document-details-foreign";

export interface PassportDetails {
  passportDetailsRussianFederation: PassportDetailsRussianFederation;
  documentDetailsForeign: DocumentDetailsForeign;
}
