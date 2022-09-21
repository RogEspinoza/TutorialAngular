import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public persona: any;
  public infoPadre: any = {
    nombre: 'Roger Espinoza',
    direccion: 'Jinotepe,Carazo',
    identificacion: '000-000000-000000'
  }

  constructor() { }

  ngOnInit(): void {
  }

  ObtenerEdad(data) {
    this.persona = {
      edad: data
    }
  }

}
