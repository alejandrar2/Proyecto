import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) {

   }
   url: string = 'http://localhost:8888/roles';


   obtenerRoles() {
    return this.http.get(this.url);
  }
  obtenerRol(idRol) {
    return this.http.get(this.url + '/' + idRol);
  }
  guardarRol(rol) {
    return this.http.post(this.url, rol);
  }
  actualizarRol(idRol, rol) {
    return this.http.put(this.url + '/' + idRol, rol);
  }
  eliminarRol(idRol) {
    return this.http.delete(this.url+'/'+idRol);
  }




}

