import {Journal} from "./journal";
import {TransportInfo} from "./transport-info";
import {QualityApproveDocuments} from "./quality-approve-documents";
import {MaterialOrItemAdditionalInfo} from "./material-or-item-additional-info";

export class MaterialOrItemVerificationInfo {
  uuid?: string;
  incomingMaterialControlJournal?: Journal;
  deliveryDate?: Date;
  transportInfo?: TransportInfo;
  supplier?: string;
  materialOrItemName?: string;
  qualityApproveDocuments?: QualityApproveDocuments;
  packagingType?: string;
  materialOrItemAdditionalInfo?: MaterialOrItemAdditionalInfo;
  samplingPlace?: string;
  samplingDate?: Date;
  qualityConclusion?: string;
}
