import {Component, OnInit, ViewChild} from '@angular/core';
import {PaisesList} from "../../../../helper/paises-list";
import {Ciudad} from "../../../../model/ciudad";
import {CiudadesList} from "../../../../helper/ciudades-list";
import {IgxSnackbarComponent} from "igniteui-angular";
import {ViajeService} from "../../../../service/viaje.service";
import {Viaje} from "../../../../model/viaje";
import {AuthService} from "../../../../service/auth.service";
import {Horas} from "../../../../helper/horas";

@Component({
  selector: 'app-apartar-viaje',
  templateUrl: './apartar-viaje.component.html',
  styleUrls: ['./apartar-viaje.component.scss']
})
export class ApartarViajeComponent implements OnInit {

  paisesOrigen = new PaisesList().paises;
  paisesDestino = new PaisesList().paises;
  ciudades: Ciudad[] = new CiudadesList().ciudades;
  ciudadesOrigenFiltradas = new CiudadesList().ciudades;
  ciudadesDestinoFiltradas = new CiudadesList().ciudades;
  horas = new Horas().horas;
  horaSelecionada = -1;
  paisOrigenSelecionado = -1;
  paisDestinoSelecionado = -1;
  ciudadOrigenSelecionada = -1;
  ciudadDestinoSelecionada = -1;
  fechaSelecionada = new Date();
  @ViewChild(IgxSnackbarComponent)
  snack: IgxSnackbarComponent;

  constructor(
    private viajeService: ViajeService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  registrarViaje() {
    console.log(this.fechaSelecionada.getFullYear() + '-' + (this.fechaSelecionada.getMonth() + 1) + '-' + this.fechaSelecionada.getDate())
    if(this.ciudadOrigenSelecionada == -1) {
      this.snack.open("Escoja la ciudad de origen.");
    } else if(this.ciudadDestinoSelecionada == -1) {
      this.snack.open("Escoja la ciudad de destino.");
    } else if(this.fechaSelecionada.getTime() < new Date().getTime()) {
      this.snack.open("Dia selecionado no valido.");
    } else if(this.horaSelecionada == -1) {
      this.snack.open("Selecione la hora de su viaje.");
    } else {
      const viaje = new Viaje();
      viaje.id = this.viajeService.getMaxId();
      viaje.origen = this.ciudadOrigenSelecionada;
      viaje.destino = this.ciudadDestinoSelecionada;
      viaje.fecha = this.fechaSelecionada.getFullYear() + '-' + (this.fechaSelecionada.getMonth() + 1) + '-' + this.fechaSelecionada.getDate();
      viaje.hora = this.horaSelecionada;
      viaje.usuario = this.authService.getToken().usuario.id;
      this.viajeService.postViaje(viaje);
      this.snack.open("Viaje registrado.");
      this.paisOrigenSelecionado = -1;
      this.paisDestinoSelecionado = -1;
      this.ciudadOrigenSelecionada = -1;
      this.ciudadDestinoSelecionada = -1;
      this.horaSelecionada = -1;
      this.fechaSelecionada = new Date();

    }
  }

  filtrarCiudadesOrigen(pais: number) {
    this.ciudadesOrigenFiltradas = this.ciudades.filter(item => item.pais == pais);
    if(this.ciudadesOrigenFiltradas.length > 0 ){
      this.ciudadOrigenSelecionada = this.ciudadesOrigenFiltradas[0].id;
    } else {
      this.ciudadOrigenSelecionada = -1;
    }
  }

  filtrarCiudadesDestino(pais: number) {
    this.ciudadesDestinoFiltradas = this.ciudades.filter(item => item.pais == pais);
    if(this.ciudadesDestinoFiltradas.length > 0 ){
      this.ciudadDestinoSelecionada = this.ciudadesDestinoFiltradas[0].id;
    } else {
      this.ciudadDestinoSelecionada = -1;
    }
  }

  public onSelection() {

  }
}
