import {JournalTitle} from "./journal-title";
import {MaterialOrItemVerificationInfo} from "./material-or-item-verification-info";

export class Journal {
  uuid?: string;
  incomingMaterialControlJournalTitle?: JournalTitle;
  materialOrItemVerificationInfoList: MaterialOrItemVerificationInfo[] = [];
}
