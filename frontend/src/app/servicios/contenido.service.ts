import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {


  url: any = 'https://morgan-web.herokuapp.com/contenido';

  constructor(private http: HttpClient) {
  }

  obtenerContenido(idEmpresa, idPagina) {
    return this.http.get(`${this.url}/${idEmpresa}/pagina/${idPagina}`);
  }

  actualizarBloque1(idEmpresa, idPagina, bloque) {
    return this.http.put(`${this.url}/${idEmpresa}/pagina/bloque1/${idPagina}`, bloque);
  }

  actualizarBloque2(idEmpresa, idPagina, bloque) {
    return this.http.put(`${this.url}/${idEmpresa}/pagina/bloque2/${idPagina}`, bloque);
  }

  actualizarBloque3(idEmpresa, idPagina, bloque) {
    return this.http.put(`${this.url}/${idEmpresa}/pagina/bloque3/${idPagina}`, bloque);
  }
  guardarContenido(contenido){
    return this.http.post(this.url , contenido);
  }

}
