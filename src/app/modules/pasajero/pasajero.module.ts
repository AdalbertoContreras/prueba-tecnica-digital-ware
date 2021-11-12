import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MisViajesModule} from "./admin/mis-viajes/mis-viajes.module";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {PasajeroComponent} from "./pasajero.component";
import { MenuComponent } from '../../component/menu/menu.component';
import { CerrarSesionDialogComponent } from '../../component/cerrar-sesion-dialog/cerrar-sesion-dialog.component';
import {IgxSnackbarModule} from "igniteui-angular";

const exampleRoutes: Route[] = [
  {
    path     : '',
    component: MisViajesModule
  }
];

@NgModule({
  declarations: [
    PasajeroComponent,
    CerrarSesionDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exampleRoutes),
    MatSelectModule,
    MatInputModule,
    IgxSnackbarModule,
  ]
})
export class PasajeroModule { }
