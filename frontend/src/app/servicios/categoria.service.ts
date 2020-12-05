import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {

   }
   url: string = 'https://morgan-web.herokuapp.com/categoria';

  obtenerCategoria() {
    return this.http.get(this.url);
  }
  obtenerCategoriaId(idcategoria) {
    return this.http.get(this.url +'/'+ idcategoria);
  }
  añadirCategoria(categoria){
    return this.http.post(this.url, categoria);
  }

  eliminarCategoria(idcategoria) {
    return this.http.delete(this.url+'/'+idcategoria);
  }


}
