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
import { RoomsComponent } from './rooms/rooms.component';
import { DesksComponent } from './rooms/desks/desks.component';
import { PcComponent } from './rooms/pc/pc.component';
import { ChairsComponent } from './rooms/chairs.component';
import { UdemyComponent } from './sibling/udemy/udemy.component';
import { RameshComponent } from './sibling/ramesh/ramesh.component';
import { SureshComponent } from './sibling/suresh/suresh.component';
import { SiblingComponent } from './sibling/sibling.component';
import { AfixiComponent } from './sibling/afixi/afixi.component';
import { IpsitaComponent } from './sibling/afixi/ipsita/ipsita.component';
import { SaswatiComponent } from './sibling/afixi/saswati/saswati.component';
import { SaraComponent } from './sibling/afixi/saswati/sara/sara.component';
import { ViewChildComponent } from './ChildToParent/view-child/view-child.component';
import { DepartmentComponent } from './ChildToParent/view-child/department/department.component';
import { DepartmentListComponent } from './ChildToParent/view-child/department-list/department-list.component';
import { CounterParentComponent } from './ViewChild/counter-parent/counter-parent.component';
import { ColorParentComponent } from './ViewChild/color-parent/color-parent.component';
import { ThemeComponent } from './ViewChild/theme/theme.component';
import { CounterChildComponent } from './ViewChild/counter-parent/counter-child/counter-child.component';

import { ChangeColorDirective } from './Directives/change-color.directive';


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
    ReviewComponent,
    RoomsComponent,
    DesksComponent,
    PcComponent,
    ChairsComponent,
    UdemyComponent,
    RameshComponent,
    SureshComponent,
    SiblingComponent,
    AfixiComponent,
    IpsitaComponent,
    SaswatiComponent,
    SaraComponent,
    ViewChildComponent,
    DepartmentComponent,
    DepartmentListComponent,
    CounterParentComponent,
    ColorParentComponent,
    ThemeComponent,
    CounterChildComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
