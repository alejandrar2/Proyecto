import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  url: string = 'http://localhost:8888/clientes';

  obtenerClientes() {
    return this.http.get(this.url);
  }

  obtenerCliente(idCliente) {
    return this.http.get(this.url + '/' + idCliente);
  }

  añadircliente(cliente) {
    return this.http.post(this.url, cliente);
  }

  eliminarCliente(idcliente) {
    return this.http.delete(this.url + '/' + idcliente);
  }

  loginCliente(cliente) {
    return this.http.post(this.url + '/login', cliente);
  }
  añadirProductos(idUsuario, producto) {
    return this.http.post(this.url + '/guardarProducto/' + idUsuario, producto);
  }
  eliminarProducto(idProducto, idUsuario) {
    return this.http.delete(this.url + '/eliminarProducto/' + idUsuario + '/producto/' + idProducto);
  }
  obtenerProductosCliente(idUsuario) {
    return this.http.get(this.url + '/compras/' + idUsuario);
  }
}