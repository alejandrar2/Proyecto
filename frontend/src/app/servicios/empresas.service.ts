import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) {

  }
  url: string = 'https://morgan-web.herokuapp.com/empresa';

  obtenerEmpresas() {
    return this.http.get(this.url);
  }
  obtenerEmpresa(idEmpresa) {
    return this.http.get(this.url+'/'+idEmpresa);
  }
  obtenerSitios(idEmpresa) {
    return this.http.get(this.url + '/obtenerSitios/' + idEmpresa);
  }
  añadirEmpresas(empresa) {
    return this.http.post(this.url, empresa);
  }

  eliminarEmpresa(idempresa) {
    return this.http.delete(this.url + '/' + idempresa);
  }
  eliminarSitio(idempresa, id) {
    return this.http.delete(this.url + '/eliminarSitio/' + idempresa + '/sitio/'+ id );
  }
 
  loginEmpresas(empresa) {
    return this.http.post(this.url + '/loginEmpresa', empresa);
  }
  guardarSitio(sitio, idEmpresa) {
    return this.http.post(this.url + '/guardarPagina/' + idEmpresa, sitio);
  }
  guardarProducto(producto, idEmpresa) {
    return this.http.post(this.url + '/guardarProducto/' + idEmpresa, producto);
  }
  guardarImagen(imagen) {
    return this.http.post('https://api.cloudinary.com/v1_1/rubio/image/upload', imagen);
  }
  obtenerProductos(idEmpresa) {
    return this.http.get(this.url + '/obtenerProductos/' + idEmpresa);
  }
  eliminarProducto(idEmpresa, idProducto) {
    return this.http.delete(this.url + '/eliminarProducto/' + idEmpresa +'/producto/'+ idProducto);
  }
  guardarImagenNode(imagen, idEmpresa) {
    return this.http.post(this.url + '/guardarImagen/' + idEmpresa, imagen);
  }
  obtenerImagen(idEmpresa) {
    return this.http.get(this.url + '/obtenerImagen/' + idEmpresa);
  }
  obtenerImagenes(idEmpresa) {
    return this.http.get(this.url + '/obtenerImagenes/' + idEmpresa);
  }
  eliminarImagen(idEmpresa, idImagen) {
    return this.http.delete(this.url + '/eliminarImagen/' + idEmpresa +'/imagen/'+ idImagen);
  }
  actualizarLogotipo(idEmpresa, logotipo) {
    return this.http.put(this.url + '/actualizarLogotipo/' + idEmpresa , {logotipo});
  }
  actualizarPlan(idEmpresa, plan) {
    return this.http.put(this.url + '/actualizarPlan/' + idEmpresa , {plan});
  }
  obtenerImagenUrl(idEmpresa , idImagen) {
    return this.http.get(this.url + '/' + idEmpresa +'/obtenerImagen/' + idImagen );
  }
}

