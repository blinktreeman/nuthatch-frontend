import {FullNameGroup} from "./full-name-group";
import {LegalEntity} from "./legal-entity";
import {IndividualEntrepreneur} from "./individual-entrepreneur";

export class Representative {
  uuid?: string;
  fullNameGroup?: FullNameGroup;
  legalEntity?: LegalEntity;
  individualEntrepreneur?: IndividualEntrepreneur;
  position?: string;
  nostroyNumber?: string;
  administrativeDocument?: string;
}
