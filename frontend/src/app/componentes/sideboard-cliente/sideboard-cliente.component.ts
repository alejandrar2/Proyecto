import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sideboard-cliente',
  templateUrl: './sideboard-cliente.component.html',
  styleUrls: ['./sideboard-cliente.component.css']
})
export class SideboardClienteComponent implements OnInit {

  empresa:any;

  constructor() { }

  ngOnInit(): void {

  this.empresa = JSON.parse(window.localStorage.getItem('Empresa'));


  }

}
