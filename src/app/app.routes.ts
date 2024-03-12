import {Routes} from '@angular/router';
import {DocumentListComponent} from "./document-service/document-list/document-list.component";
import {DoctypeListComponent} from "./document-service/doctype-list/doctype-list.component";
import {CreateDoctypeComponent} from "./document-service/create-doctype/create-doctype.component";
import {CreateDocumentComponent} from "./document-service/create-document/create-document.component";
import {CreateAddressComponent} from "./address-service/create-address/create-address.component";
import {AddressListComponent} from "./address-service/address-list/address-list.component";
import {
  CreateRepresentativeComponent
} from "./representative-service/create-representative/create-representative.component";
import {RepresentativeListComponent} from "./representative-service/representative-list/representative-list.component";
import {CreateLegalEntityComponent} from "./representative-service/create-legal-entity/create-legal-entity.component";
import {LegalEntityListComponent} from "./representative-service/legal-entity-list/legal-entity-list.component";
import {
  CreateIndividualEntrepreneurComponent
} from "./representative-service/create-individual-entrepreneur/create-individual-entrepreneur.component";
import {
  IndividualEntrepreneurListComponent
} from "./representative-service/individual-entrepreneur-list/individual-entrepreneur-list.component";
import {CreateIndividualComponent} from "./representative-service/create-individual/create-individual.component";
import {IndividualListComponent} from "./representative-service/individual-list/individual-list.component";
import {CreateSroComponent} from "./representative-service/create-sro/create-sro.component";
import {SroListComponent} from "./representative-service/sro-list/sro-list.component";
import {CreateJournalComponent} from "./journal-service/create-journal/create-journal.component";
import {JournalListComponent} from "./journal-service/journal-list/journal-list.component";
import {JournalDetailsComponent} from "./journal-service/journal-details/journal-details.component";

export const routes: Routes = [

  {path: 'document-list', component: DocumentListComponent},
  {path: 'doctype-list', component: DoctypeListComponent},
  {path: 'create-doctype', component: CreateDoctypeComponent},
  {path: 'create-document', component: CreateDocumentComponent},
  {path: 'create-address', component: CreateAddressComponent},
  {path: 'address-list', component: AddressListComponent},
  {path: 'create-representative', component: CreateRepresentativeComponent},
  {path: 'representative-list', component: RepresentativeListComponent},
  {path: 'create-legal-entity', component: CreateLegalEntityComponent},
  {path: 'legal-entity-list', component: LegalEntityListComponent},
  {path: 'create-individual-entrepreneur', component: CreateIndividualEntrepreneurComponent},
  {path: 'individual-entrepreneur-list', component: IndividualEntrepreneurListComponent},
  {path: 'create-individual', component: CreateIndividualComponent},
  {path: 'individual-list', component: IndividualListComponent},
  {path: 'create-sro', component: CreateSroComponent},
  {path: 'sro-list', component: SroListComponent},
  {path: 'create-journal', component: CreateJournalComponent},
  {path: 'journal-list', component: JournalListComponent},
  {path: 'journal-details/:uuid', component: JournalDetailsComponent},

  {path: '', redirectTo: 'journal-list', pathMatch: "full"}
];
