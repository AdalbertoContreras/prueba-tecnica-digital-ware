import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IgxSnackbarModule} from "igniteui-angular";

const exampleRoutes: Route[] = [
  {
    path     : '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    IgxSnackbarModule,
    MatFormFieldModule
  ]
})

export class LoginModule { }
