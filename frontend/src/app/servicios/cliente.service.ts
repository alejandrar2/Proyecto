import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { 
}

url: string = 'http://localhost:8888/clientes';

  obtenerCliente() {
    return this.http.get(this.url);
  }

  añadircliente(cliente){
    return this.http.post(this.url, cliente);
  }

  eliminarCliente(idcliente) {
    return this.http.delete(this.url+'/'+idcliente);
  }

  loginCliente(cliente){
    return this.http.post(this.url+'/login', cliente);
  }

}