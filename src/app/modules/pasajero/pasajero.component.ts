import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.scss']
})
export class PasajeroComponent implements OnInit, OnDestroy {

  isVerMenu = true;
  destroyed = new Subject<void>();
  currentScreenSize: string = 'Unknown';
  valueDisplayActual
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  valuDisplaymap = new Map([
    ['XSmall', 0],
    ['Small', 1],
    ['Medium', 2],
    ['Large', 3],
    ['XLarge', 5],
  ]);
  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            this.valueDisplayActual = this.valuDisplaymap.get(this.currentScreenSize) ?? -1;
            console.log(this.valueDisplayActual)
            console.log(this.currentScreenSize);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  mostrar_menu() {
    this.isVerMenu = !this.isVerMenu;
  }

  ngOnInit(): void {

  }

}
