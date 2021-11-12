import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UsuarioService} from "./usuario.service";
import {Usuario} from "../model/usuario";
import {Token} from "../model/token";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  key= "Token";

  constructor(
    private usuarioService: UsuarioService
  ) { }

  getToken(): Token {
    const tokenStorage = localStorage.getItem(this.key);
    const token: Token = JSON.parse(tokenStorage);
    return token;
  }

  login(usuario: Usuario): Usuario {
    const usuarios = this.usuarioService.getUsuarios();
    let usuarioValido = false;
    var usuarioModel: Usuario = null;
    usuarios.forEach(item => {
      if(item.nombreCuenta == usuario.nombreCuenta && item.pasword == usuario.pasword) {
        usuarioValido = true;
        usuarioModel = item;
      }
    });
    if(usuarioValido) {
      const token = new Token();
      token.usuario = usuarioModel;
      token.token = this.random();
      localStorage.setItem(this.key, JSON.stringify(token));
    }
    return usuarioModel;
  }

  logout() {
    localStorage.setItem(this.key, "");
  }

  random() {
    return Math.random().toString(36).substr(2);
  };

  checkAutenticacion(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      var data = localStorage.getItem(this.key);
      console.log(data);
      observer.next( (data != null && data.length > 0));
    })
  }

}
