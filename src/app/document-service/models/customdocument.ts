import {DocumentType} from "./documenttype";
import {InternalAttachment} from "./internalattachment";

export interface CustomDocument {
  uuid: string;
  documentType: DocumentType;
  fieldValues: string[];
  date: Date;
  expirationDate: Date;
  attachment: InternalAttachment;
}
