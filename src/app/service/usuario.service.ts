import { Injectable } from '@angular/core';
import {Usuario} from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  key= "Usuario";
  keyToken= "Token";

  constructor() { }

  getUsuarios(): Usuario[]{
      var data = localStorage.getItem(this.key);
      var usuarios: Usuario[] = [];
      if(data) {
        usuarios = JSON.parse(data);
      }
      if(usuarios.length == 0) {
        var usuariosDummy: Usuario[] = [
          {
            id: 1,
            nombreCuenta: "usuario1",
            pasword: "123"
          },
          {
            id: 2,
            nombreCuenta: "usuario2",
            pasword: "123"
          },
          {
            id: 3,
            nombreCuenta: "usuario3",
            pasword: "123"
          }
        ]
        localStorage.setItem(this.key, JSON.stringify(usuariosDummy));
      }
      console.log(usuarios);
      return usuarios;
  }


  postUsuario(usuario: Usuario): boolean {
    var usuarios = this.getUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(this.key, JSON.stringify(usuarios));
    return true;
  }

  putUsuario(usuario: Usuario): boolean {
      var usuarios: Usuario[] = this.getUsuarios();
      const indice = usuarios.findIndex((item: Usuario, indice: number) => {
        return item.id == usuario.id;
      });
      if(indice != -1) {
        usuarios[indice] = usuario;
        localStorage.setItem(this.key, JSON.stringify(usuarios));
        return true;
      } else {
        return false;
      }
  }

}
