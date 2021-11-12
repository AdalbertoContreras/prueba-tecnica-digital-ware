import { Injectable } from '@angular/core';
import {Viaje} from "../model/viaje";

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  key= "Viaje";
  keyId= "IdViaje";

  constructor() { }

  getMaxId() {
    var data = localStorage.getItem(this.keyId);
    if(data) {
      var id: number = JSON.parse(data);
      id ++;
      localStorage.setItem(this.keyId, JSON.stringify(id));
    } else {
      id = 1;
      localStorage.setItem(this.keyId, JSON.stringify(1));
    }
    return id;
  }

  postViaje(viaje: Viaje) {
    const viajes = this.getViajes();
    viajes.push(viaje);
    localStorage.setItem(this.key, JSON.stringify(viajes));
  }

  deleteViaje(id: number) {
    const viajes = this.getViajes();
    const viajesAux = viajes.filter(item => item.id != id);
    localStorage.setItem(this.key, JSON.stringify(viajesAux));
  }

  private getViajes(): Viaje[] {
    var data = localStorage.getItem(this.key);
    var viajes: Viaje[] = JSON.parse(data);
    if(viajes) {
      return viajes;
    } else {
      return [];
    }
  }

  getViajesPorUsuario(usuario: number): Viaje[] {
    var data = localStorage.getItem(this.key);
    var viajesPorusuario: Viaje[] = [];
    if(data) {
      viajesPorusuario = JSON.parse(data);
      viajesPorusuario = viajesPorusuario.filter(value => {
        return value.usuario == usuario;
      })
    } else {
      viajesPorusuario = [];
    }
    console.log(usuario, viajesPorusuario);
    return viajesPorusuario;
  }
}
