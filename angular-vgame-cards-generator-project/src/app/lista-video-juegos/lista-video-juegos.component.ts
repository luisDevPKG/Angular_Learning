import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card-game.model';

@Component({
  selector: 'app-lista-video-juegos',
  templateUrl: './lista-video-juegos.component.html',
  styleUrls: ['./lista-video-juegos.component.css']
})
export class ListaVideoJuegosComponent implements OnInit {
  cards:Card[];
  constructor() {
    this.cards = [];
  }
  ngOnInit(): void {
  }

  generar(nombre:string, url:string, descripcion:string):boolean{
    this.cards.push(new Card(nombre, url, descripcion))
    return false;
  }
}
