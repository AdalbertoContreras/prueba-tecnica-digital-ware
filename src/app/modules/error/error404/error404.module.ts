import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404.component';
import {Route, RouterModule} from "@angular/router";

const exampleRoutes: Route[] = [
  {
    path     : '',
    component: Error404Component
  }
];

@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exampleRoutes),
  ]
})
export class Error404Module { }
