import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { OfficeComponent } from './office/office.component';
import { GovtOfficeComponent } from './office/govt-office/govt-office.component';
import { PvtOfficeComponent } from './office/pvt-office/pvt-office.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './school/student/student.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './country/state/state.component';
import { CityComponent } from './country/state/city/city.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './product/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProjectComponent,
    OfficeComponent,
    GovtOfficeComponent,
    PvtOfficeComponent,
    SchoolComponent,
    StudentComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    ProductComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
