import { Routes } from '@angular/router';
import {DocumentListComponent} from "./document-service/document-list/document-list.component";
import {DoctypeListComponent} from "./document-service/doctype-list/doctype-list.component";
import {CreateDoctypeComponent} from "./document-service/create-doctype/create-doctype.component";
import {CreateDocumentComponent} from "./document-service/create-document/create-document.component";

export const routes: Routes = [

  {path: 'document-list', component: DocumentListComponent},
  {path: 'doctype-list', component: DoctypeListComponent},
  {path: 'create-doctype', component: CreateDoctypeComponent},
  {path: 'create-document', component: CreateDocumentComponent},

  {path: '', redirectTo: 'document-list', pathMatch: "full"}
];
