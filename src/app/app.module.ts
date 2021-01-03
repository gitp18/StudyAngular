import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ClassDirective } from './class.directive';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './TemplateDriven/signup/signup.component';
import { SigninComponent } from './TemplateDriven/signin/signin.component';
import { TempUserComponent } from './TemplateDriven/user/user.component';
import { MustMatchDirective } from './TemplateDriven/user/must-match.directive';
import { TemplateDrivenComponent } from './TemplateDriven/template-driven.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { SimpleCRUDComponent } from './TemplateDriven/simple-crud/simple-crud.component';
import { DataTableComponent } from './TemplateDriven/data-table/data-table.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { SelectRequiredValidatorDirective } from './TemplateDriven/signup/select-required-validator';
import { CopmpairValidatorDirective } from './TemplateDriven/signup/compair-fields-directive';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';//Only for date display

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,
    ClassDirective,
    UserComponent,
    TempUserComponent,
    SignupComponent,
    SigninComponent,
    MustMatchDirective,
    TemplateDrivenComponent,
    HeaderNavComponent,
    SimpleCRUDComponent,
    DataTableComponent,
    SelectRequiredValidatorDirective,
    CopmpairValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
