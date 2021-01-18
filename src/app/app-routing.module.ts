import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPageComponent } from 'src/app/new-page/new-page.component';
import { ParentComponent } from 'src/app/parent/parent.component';

const routes: Routes = [
  { path: '1stpage', component: ParentComponent },
  { path: 'newpage', component: NewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
