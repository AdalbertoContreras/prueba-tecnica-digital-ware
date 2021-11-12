import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Usuario} from "../../../model/usuario";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { UsuarioService } from '../../../service/usuario.service';
import { AuthService } from '../../../service/auth.service';
import {IgxSnackbarComponent} from "igniteui-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {

  usuario: Usuario = new Usuario();
  selectedProductForm: FormGroup;
  minWidth = -1;
  @ViewChild(IgxSnackbarComponent)
  snack: IgxSnackbarComponent;

  destroyed = new Subject<void>();
  currentScreenSize: string = 'Unknown';
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    breakpointObserver: BreakpointObserver,
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _authService: AuthService,
    private router: Router
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

            console.log(this.currentScreenSize);
          }
        }
      });
  }

  login() {
    if(this._authService.login(this.usuario)) {
      console.log("usuario autenticado");
      this.router.navigate(['/']);
    } else {
      this.snack.open("Nombre o contraseña incorrecto.");
    }
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit(): void {
    this.selectedProductForm = this._formBuilder.group({
      nombreCuenta: new FormControl({value: ''}, Validators.required),
      pasword: new FormControl({value: ''}, Validators.required),
    });
  }

}
