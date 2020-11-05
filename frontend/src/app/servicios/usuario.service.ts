import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  url: string = 'http://localhost:8888/usuario';

  obtenerUsuarios() {
    return this.http.get(this.url);
  }

  añadirUsuario(usuario){
    return this.http.post(this.url, usuario);
  }

  eliminarUsuario(idUsuario) {
    return this.http.delete(this.url+'/'+idUsuario);
  }

  loginUsuario(usuario){
    return this.http.post(this.url+'/login', usuario);
  }




}

