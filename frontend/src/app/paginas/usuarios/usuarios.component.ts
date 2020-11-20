import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario = {
    nombre : '',
    apellido : '',
    correo : '',
    contrasenia : ''

    }

  constructor( private servicioUsuario: UsuarioService ) { }

  usuarios:any;
  
  ngOnInit(): void {

    this.obtenerUsuarios();

  }

  obtenerUsuarios(){

    this.servicioUsuario.obtenerUsuarios().subscribe( ( res:any )=>{
      console.log(res);
      this.usuarios = res.datos;
    });

  }

  eliminarUsuario(idUsuario){
    console.log(idUsuario);

    this.servicioUsuario.eliminarUsuario(idUsuario).subscribe( (res:any) => {

      console.log(res);

      if(res.Ok){
        this.obtenerUsuarios();
      }

    } );

  }

  guardarUsuario() {
    this.servicioUsuario.añadirUsuario(this.usuario).subscribe((data: any) => {
      console.log(data);
      this.obtenerUsuarios();
      
    });
  }


}
