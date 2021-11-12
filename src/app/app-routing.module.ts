import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./service/auth-guard.service";
import {NoAuthGuardService} from "./service/no-auth-guard.service";
import {PasajeroComponent} from "./modules/pasajero/pasajero.component";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'pasajero/mis_viajes'},

  //login routes
  {
    path: '',
    canActivate: [NoAuthGuardService],
    canActivateChild: [NoAuthGuardService],
    children: [
      {path: 'login', loadChildren: () => import('src/app/modules/pasajero/login/login.module').then(m => m.LoginModule)}
    ]
  },

  // Admin routes
  {
    path       : '',
    canActivateChild: [ AuthGuardService ],
    canActivate: [AuthGuardService],
    component: PasajeroComponent,
    children   : [
      {
        path: 'pasajero', children:[
          {path: 'apartar_viaje', loadChildren: () => import('src/app/modules/pasajero/admin/apartar-viaje/apartar-viaje.module').then(m => m.ApartarViajeModule)},
          {path: 'mis_viajes', loadChildren: () => import('src/app/modules/pasajero/admin/mis-viajes/mis-viajes.module').then(m => m.MisViajesModule)}
        ],
      },
      {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('src/app/modules/error/error404/error404.module').then(m => m.Error404Module)},
      {path: '**', redirectTo: '404-not-found'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatIconModule]
})
export class AppRoutingModule {

}
