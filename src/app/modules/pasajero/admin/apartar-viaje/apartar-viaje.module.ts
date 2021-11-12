import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {ApartarViajeComponent} from "./apartar-viaje.component";
import { MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HammerModule} from "@angular/platform-browser";
import {IgxCalendarModule, IgxSnackbarModule} from "igniteui-angular";

const exampleRoutes: Route[] = [
  {
    path     : '',
    component: ApartarViajeComponent
  }
];

@NgModule({
  declarations: [
    ApartarViajeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exampleRoutes),
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule,
    IgxCalendarModule,
    IgxSnackbarModule
  ]
})
export class ApartarViajeModule { }
