import {FullNameGroupDto} from "./full-name-group-dto";

export class RepresentativeDto {
  uuid: string = '';
  fullNameGroup?: FullNameGroupDto;
  legalEntity?: string;
  individualEntrepreneur?: string;
  position?: string;
  nostroyNumber?: string;
}
