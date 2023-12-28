import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Card } from '../models/card-game.model';

@Component({
  selector: 'app-video-juegos-card',
  templateUrl: './video-juegos-card.component.html',
  styleUrls: ['./video-juegos-card.component.css']
})
export class VideoJuegosCardComponent implements OnInit {
  @Input() cardGame: Card | undefined;
  @HostBinding('attr.class') cssClass = 'col-md-6'
  constructor() { }

  ngOnInit(): void {
  }

}
