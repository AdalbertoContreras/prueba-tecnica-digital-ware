import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Viaje} from "../../../../model/viaje";
import {ViajeService} from "../../../../service/viaje.service";
import {AuthService} from "../../../../service/auth.service";
import {CiudadesList} from "../../../../helper/ciudades-list";
import {Ciudad} from "../../../../model/ciudad";
import {Horas} from "../../../../helper/horas";
import {IgxSnackbarComponent} from "igniteui-angular";

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.component.html',
  styleUrls: ['./mis-viajes.component.scss']
})
export class MisViajesComponent implements OnInit {

  misViajes: Viaje[] = [];
  viajeSelecionado: Viaje = null;
  ciudades = new CiudadesList().ciudades;
  @ViewChild(IgxSnackbarComponent)
  snack: IgxSnackbarComponent;

  constructor(
    private authService: AuthService,
    private viajeService: ViajeService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.consultarMisViajes();
  }

  consultarMisViajes() {
    this.misViajes = this.viajeService.getViajesPorUsuario(this.authService.getToken().usuario.id);
    console.log(this.misViajes)
  }

  trackByFn(index: number, item: any): any
  {
    return item.id || index;
  }

  toggleDetails(viaje: number): void
  {
    // If the product is already selected...
    if ( this.viajeSelecionado && this.viajeSelecionado.id === viaje )
    {
      // Close the details
      this.closeDetails();
      return;
    }

    let aux: Viaje = null;
    this.misViajes.forEach((value) => {
      if(value.id === viaje) {
        aux = value;
      }
    });
    if(aux != null) {
      this.viajeSelecionado = aux;

      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * Close the details
   */
  closeDetails(): void
  {
    this.viajeSelecionado = null;
  }

  getCiudadPorId(id: number): Ciudad {
    return this.ciudades.find(item => item.id == id);
  }

  getHora(id: number) {
    return new Horas().horas.find(item => item.id == id);
  }

  eliminarViaje(id: number) {
    this.viajeService.deleteViaje(id);
    this.misViajes = this.viajeService.getViajesPorUsuario(this.authService.getToken().usuario.id);
    this.viajeSelecionado = null;
    this.snack.open("Se ha eliminado un viaje.");
  }

}
