import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentcommunicationCounterComponent } from './Counter/ThroughComponentCommunication/componentcommunication-counter/componentcommunication-counter.component';
import { ComponentcommunicationCounterbuttonComponent } from './Counter/ThroughComponentCommunication/componentcommunication-counter/componentcommunication-counterbutton/componentcommunication-counterbutton.component';
import { ComponentcommunicationCounteroutputComponent } from './Counter/ThroughComponentCommunication/componentcommunication-counter/componentcommunication-counteroutput/componentcommunication-counteroutput.component';
import { ServiceCounteroutputComponent } from './Counter/ThroughService/service-counter/service-counteroutput/service-counteroutput.component';
import { ServiceCounterbuttonComponent } from './Counter/ThroughService/service-counter/service-counterbutton/service-counterbutton.component';
import { ServiceCounterComponent } from './Counter/ThroughService/service-counter/service-counter.component';
import { NgrxCounterComponent } from './Counter/ThroughNGRX/ngrx-counter/ngrx-counter.component';
import { NgrxCounterbuttonComponent } from './Counter/ThroughNGRX/ngrx-counter/ngrx-counterbutton/ngrx-counterbutton.component';
import { NgrxCounteroutputComponent } from './Counter/ThroughNGRX/ngrx-counter/ngrx-counteroutput/ngrx-counteroutput.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './Store/Counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ComponentcommunicationCounterComponent,
    ComponentcommunicationCounterbuttonComponent,
    ComponentcommunicationCounteroutputComponent,
    ServiceCounteroutputComponent,
    ServiceCounterbuttonComponent,
    ServiceCounterComponent,
    NgrxCounterComponent,
    NgrxCounterbuttonComponent,
    NgrxCounteroutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
