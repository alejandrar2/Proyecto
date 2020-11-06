import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient ) {

   }
   url: string = 'http://localhost:8888/empresa';

  obtenerEmpresas() {
    return this.http.get(this.url);
  }

  añadirEmpresas(empresa){
    return this.http.post(this.url, empresa);
  }

  eliminarEmpresa(idempresa) {
    return this.http.delete(this.url+'/'+idempresa);
  }

  loginEmpresas(empresa){
    return this.http.post(this.url+'/login', empresa);
  }
  guardarSitio(sitio, idEmpresa){
    return this.http.post(this.url+'/guardarPagina/'+ idEmpresa, sitio);
  }
  guardarProducto(producto, idEmpresa){
    return this.http.post(this.url+'/guardarProducto/'+ idEmpresa, producto);
  }
  guardarImagen(imagen){
    return this.http.post('https://api.cloudinary.com/v1_1/rubio/image/upload', imagen);
  }

}
