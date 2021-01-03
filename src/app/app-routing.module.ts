import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenComponent } from './TemplateDriven/template-driven.component';
import { SimpleCRUDComponent } from './TemplateDriven/simple-crud/simple-crud.component';
import { DataTableComponent } from './TemplateDriven/data-table/data-table.component';

const routes: Routes = [
  { path: 'basic-templateDriven', component: TemplateDrivenComponent },
  { path: 'simpleCRUD-templateDriven', component: SimpleCRUDComponent },
  { path: 'dataTable', component: DataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
