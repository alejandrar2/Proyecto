import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-plantilla',
  templateUrl: './header-plantilla.component.html',
  styleUrls: ['./header-plantilla.component.css']
})
export class HeaderPlantillaComponent implements OnInit {

  @Input() header: any;

  constructor() { }

  ngOnInit(): void {
  }

  obtnerImagen(){
    
  }

}
