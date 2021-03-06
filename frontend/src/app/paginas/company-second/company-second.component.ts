import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from 'src/app/servicios/contenido.service';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-company-second',
  templateUrl: './company-second.component.html',
  styleUrls: ['./company-second.component.css']
})
export class CompanySecondComponent implements OnInit {

  empresa: any;
  idEmpresa: any;
  idPagina: any;
  contenidoBloque1: String;
  contenidoBloque2: String;
  contenidoBloque3: String;
  imagen: any;
  header: any;
  productos: any;
  enlace: any;
  galeria: any;
  login: any;
  download: any;
  carrousel: any;
  paginas: any;
  nombreEmpresa: any;
  informacionBloque1: any[] = [];
  informacionBloque2: any[] = [];
  existeGaleria: boolean = true;

  constructor(private ServiceEmpresa: EmpresasService, private activatedRoute: ActivatedRoute, private servicioContenido: ContenidoService) { }

  ngOnInit(): void {

    //window.localStorage.setItem('idEmpresa', '5fab4111c2af80055003b4a8');

    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');
    this.idPagina = this.activatedRoute.snapshot.paramMap.get('idPagina');
    this.obtenerEmpresa();
    this.obtenerContenido();

  }

  obtenerEmpresa() {
    this.ServiceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((res: any) => {
      // console.log(res);
      this.empresa = res;
      this.paginas = res.paginas;
      this.nombreEmpresa = res.nombre;
    })
  }

  obtenerContenido() {
    this.servicioContenido.obtenerContenido(this.idEmpresa, this.idPagina).subscribe((res: any) => {
      //this.contenidoBloque3 = res.bloque3;
      console.log('CONTENIDO : ', res);
      if (res != null) {
        this.contenidoBloque1 = res.bloque1;
        if (this.contenidoBloque1.length > 7) {
          this.obtenerDataBloque1();
        }
      }

      if (res != null) {
        this.contenidoBloque2 = res.bloque2;
        if (this.contenidoBloque2.length > 7) {
          this.obtenerDataBloque2();
        }
      }

    })
  }

  limpiarBloques() {
    this.galeria = '';
    this.imagen = '';
    this.header = '';
    this.login = '';
    this.productos = '';
    this.existeGaleria = false;
  }

  // =====================================================================================
  obtenerDataBloque1() {

    let datos: any = [];
    this.informacionBloque1 = [];

    //data = this.model.editorData;
    datos = this.contenidoBloque1.split('</p>');

    for (let j = 0; j < datos.length - 1; j++) {
      if (datos[j] != ' ') {
        datos[j] = datos[j].slice(3, datos[j].length);
        this.informacionBloque1.push(JSON.parse(datos[j]));
        //console.log( data[j], j)
      }
    }
    //console.log(this.informacionBloque1);
    this.procesarContenidoBloque1();
  }
  procesarContenidoBloque1() {
    for (let j = 0; j < this.informacionBloque1.length; j++) {

      if (this.informacionBloque1[j].tipo == 'imagen') {
        this.imagen = this.informacionBloque1[j];
      }

      if (this.informacionBloque1[j].tipo == 'header') {
        this.header = this.informacionBloque1[j];
      }
      if (this.informacionBloque1[j].tipo == 'carrousel') {
        this.carrousel = this.informacionBloque1[j];
      }

    }
  }
  // ======================================================

  obtenerDataBloque2() {
    let datos: any = [];
    this.informacionBloque1 = [];

    //data = this.model.editorData;
    datos = this.contenidoBloque2.split('</p>');

    for (let j = 0; j < datos.length - 1; j++) {
      if (datos[j] != ' ') {
        datos[j] = datos[j].slice(3, datos[j].length);
        this.informacionBloque2.push(JSON.parse(datos[j]));

      }
    }

    this.procesarContenidoBloque2();
  }
  procesarContenidoBloque2() {

    this.existeGaleria = false;

    for (let j = 0; j < this.informacionBloque2.length; j++) {

      if (this.informacionBloque2[j].tipo == 'productos') {
        this.productos = this.informacionBloque2[j];
      }

      if (this.informacionBloque2[j].tipo == 'galeria') {
        this.galeria = this.informacionBloque2[j];
        this.existeGaleria = true;
      }
      if (this.informacionBloque2[j].tipo == 'login') {
        this.login = this.informacionBloque2[j];
      }
      if (this.informacionBloque2[j].tipo == 'download') {
        this.download = this.informacionBloque2[j];
      }
    }
  }
  paginaSeleccionada(id) {
    console.log('Pagina', id);
    this.idPagina = id;
    this.limpiarBloques();
    this.obtenerContenido();
  }

  obtenterInformacionEmpresa() {
    this.ServiceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((res: any) => {
      //console.log('PAginas', res.paginas);
      this.paginas = res.paginas;

    });
  }

}

