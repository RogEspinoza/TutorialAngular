import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input('InfoPersona') infoPersona;
  @Output('Edad') edadPersona = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  EnviarInfo() {
    this.edadPersona.emit('38');
  }

}
