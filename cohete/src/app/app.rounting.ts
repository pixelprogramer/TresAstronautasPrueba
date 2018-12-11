import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ControlComponent} from "./components/control/control.component";
import {AppComponent} from "./app.component";
import {FuselajeComponent} from "./components/fuselaje/fuselaje.component";

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'control', component: ControlComponent},
  {path: 'planetas/:planeta', component: ControlComponent},
  {path: '**', component: ControlComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
