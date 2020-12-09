import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/servicios/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor( private servicioRol : RolService) { }

 rol = {
   nombre : '',
   descripcion :''
 };
 mensaje : any;
 alert: any;
 roles: any;
  ngOnInit(): void {

    this.obtenerRoles();
  }
  guardarRol(){
    this.servicioRol.guardarRol(this.rol).subscribe((res: any) =>{
      this.mensaje = 'Rol agregado con exito ';
      this.alert = 'success';
      console.log(res);
    });
  }

  obtenerRoles(){

    this.servicioRol.obtenerRoles().subscribe( ( res:any )=>{
      console.log(res);
      this.roles = res.datos;
    });

  }
  eliminarRol(idRol){
    console.log(idRol);

    this.servicioRol.eliminarRol(idRol).subscribe( (res:any) => {
      this.mensaje = 'Eliminado con exito';
        this.alert = 'danger';
      console.log(res);

      if(res.Ok){
        this.obtenerRoles();
      }

    } );

  }

}
