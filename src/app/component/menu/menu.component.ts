import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {IgxSnackbarComponent} from "igniteui-angular";
import {Router} from "@angular/router";
import {Usuario} from "../../model/usuario";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild(IgxSnackbarComponent)
  snack: IgxSnackbarComponent;
  usuario: Usuario = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.getToken()?.usuario;
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
    //this.snack.open("Gracias por utilizar nuestro sistema de viajes.")
  }

}
