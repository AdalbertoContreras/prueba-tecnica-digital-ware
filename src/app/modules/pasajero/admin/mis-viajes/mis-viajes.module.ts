import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {MisViajesComponent} from "./mis-viajes.component";
import {MatIconModule} from "@angular/material/icon";
import {IgxSnackbarModule} from "igniteui-angular";
import {MatButtonModule} from "@angular/material/button";

const exampleRoutes: Route[] = [
  {
    path     : '',
    component: MisViajesComponent
  }
];

@NgModule({
  declarations: [
    MisViajesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exampleRoutes),
    MatIconModule,
    IgxSnackbarModule,
    MatButtonModule
  ]
})
export class MisViajesModule { }
