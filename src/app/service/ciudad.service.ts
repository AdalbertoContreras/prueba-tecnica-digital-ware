import { Injectable } from '@angular/core';
import {Ciudad} from "../model/ciudad";
import {CiudadesList} from "../helper/ciudades-list";

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor() { }

  getCiudadesPorPais(pais: number): Ciudad[] {
    return new CiudadesList().ciudades.filter(value => {
      return value.pais == pais;
    })
  }
}
