import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Areonave} from "../model/areonave";

@Injectable({
  providedIn: 'root'
})
export class AreonaveService {

  key= "Areonave";
  constructor() { }

  getAreonaves(): Observable<Areonave[]> {
    return new Observable((observer) => {
      var data = localStorage.getItem(this.key);
      if(data) {
        var areonaves: Areonave[] = JSON.parse(data);
        observer.next(areonaves);
      } else {

      }
    })
  }

  postAreonave(areonave: Areonave): Observable<number> {
    return new Observable((observerOuput) => {
      this.getAreonaves().subscribe((value: Areonave[]) => {
        var areonaves = value;
        areonaves.push(areonave);
        localStorage.setItem(this.key, JSON.stringify(areonaves));
        observerOuput.next(1);
      })
    })
  }

  putAreonave(areonave: Areonave): Observable<number> {
    return new Observable((observerOuput) => {
      this.getAreonaves().subscribe((value: Areonave[]) => {
        var areonaves: Areonave[] = value;
        const indice = areonaves.findIndex((item: Areonave, indice: number) => {
          return item.id == areonave.id;
        });
        if(indice != -1) {
          areonaves[indice] = areonave;
          localStorage.setItem(this.key, JSON.stringify(areonaves));
          observerOuput.next(1);
        } else {
          observerOuput.next(-1);
        }
      })
    })
  }

  deleteAreonave(areonave: Areonave): Observable<number> {
    return new Observable((observerOuput) => {
      this.getAreonaves().subscribe((value: Areonave[]) => {
        var areonaves: Areonave[] = value;
        const indice = areonaves.findIndex((item: Areonave, indice: number) => {
          return item.id == areonave.id;
        });
        if(indice != -1) {
          areonaves.slice(indice, 1);
          localStorage.setItem(this.key, JSON.stringify(areonaves));
          observerOuput.next(1);
        } else {
          observerOuput.next(-1);
        }
      })
    })
  }

}
