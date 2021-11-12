import { Injectable } from '@angular/core';
import {Pais} from "../model/pais";
import {PaisesList} from "../helper/paises-list";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor() { }

  getPaises(): Pais[] {
    return new PaisesList().paises;
  }

}
