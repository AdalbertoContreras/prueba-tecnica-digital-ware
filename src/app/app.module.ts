import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import {PasajeroComponent} from "./modules/pasajero/pasajero.component";
import {MenuComponent} from "./component/menu/menu.component";
import {IgxSnackbarModule} from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    PasajeroComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxSnackbarModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
