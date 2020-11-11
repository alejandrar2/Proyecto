import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-plantilla',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() imagen:any;

  constructor() { }

  ngOnInit(): void {
  }

}
