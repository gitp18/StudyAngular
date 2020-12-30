import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClassDirective } from './Directives/AttributeDirective/class.directive';
import { UserComponent } from './user/user.component';
import { AlternateIfDirective } from './Directives/StructuralDirective/alternate-if.directive';
import { StructuralComponent } from './CustomDirective/structural/structural.component';
import { AttributeComponent } from './CustomDirective/attribute/attribute.component';
import { NgClassComponent } from './AttributeDirectives/ng-class/ng-class.component';
import { NgStyleComponent } from './AttributeDirectives/ng-style/ng-style.component';
import { NgNonBindableComponent } from './AttributeDirectives/ng-non-bindable/ng-non-bindable.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    UserComponent,
    AlternateIfDirective,
    StructuralComponent,
    AttributeComponent,
    NgClassComponent,
    NgStyleComponent,
    NgNonBindableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
