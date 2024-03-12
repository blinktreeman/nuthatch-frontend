import {Journal} from "./journal";
import {TransportInfo} from "./transport-info";
import {QualityApproveDocuments} from "./quality-approve-documents";
import {MaterialOrItemAdditionalInfo} from "./material-or-item-additional-info";

export class MaterialOrItemVerificationInfo {
  uuid?: string;
  incomingMaterialControlJournal?: Journal;
  materialOrItemName?: string;
  materialOrItemAdditionalInfo?: MaterialOrItemAdditionalInfo;
  deliveryDate?: Date;
  supplier?: string;
  packagingType?: string;
  transportInfo?: TransportInfo;
  samplingPlace?: string;
  samplingDate?: Date;
  qualityApproveDocuments?: QualityApproveDocuments;
  qualityConclusion?: string;
}
