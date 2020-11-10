import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-plantilla',
  templateUrl: './navbar-plantilla.component.html',
  styleUrls: ['./navbar-plantilla.component.css']
})
export class NavbarPlantillaComponent implements OnInit {
  @Input() sitio : any
  
  constructor() { }

  ngOnInit(): void {
  }

}
