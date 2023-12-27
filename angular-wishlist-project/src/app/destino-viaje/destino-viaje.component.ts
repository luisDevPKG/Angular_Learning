import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { tick } from '@angular/core/testing';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje | undefined; //destino es suceptible de ser pasado como parametro en app-destino-viaje
  @HostBinding('attr.class') cssClass = 'col-md-4'  // cuando se cree ese tag ficticio de angular, tendrá esa clase css
  constructor() {
  }

  ngOnInit(): void {
  }

}
