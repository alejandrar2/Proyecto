import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {

   }
   url: string = 'http://localhost:8888/categoria';

  obtenerCategoria() {
    return this.http.get(this.url);
  }

  añadirCategoria(categoria){
    return this.http.post(this.url, categoria);
  }

  eliminarCategoria(idcategoria) {
    return this.http.delete(this.url+'/'+idcategoria);
  }


}
