import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MotorComponent } from './components/motor/motor.component';
import { CabinaComponent } from './components/cabina/cabina.component';
import { ControlComponent } from './components/control/control.component';
import {routing,appRoutingProviders} from "./app.rounting";
import { FuselajeComponent } from './components/fuselaje/fuselaje.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MotorComponent,
    CabinaComponent,
    ControlComponent,
    FuselajeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
