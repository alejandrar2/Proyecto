import { Component, Input, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-navbar-plantilla',
  templateUrl: './navbar-plantilla.component.html',
  styleUrls: ['./navbar-plantilla.component.css']
})
export class NavbarPlantillaComponent implements OnInit {
  @Input() empresa: any = '';

  constructor( private servicio:EmpresasService ) { }

  ngOnInit(): void {

    console.log('Sitio : ', this.empresa);

  }
}
