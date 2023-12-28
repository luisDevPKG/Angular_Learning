import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVideoJuegosComponent } from './lista-video-juegos/lista-video-juegos.component';
import { VideoJuegosCardComponent } from './video-juegos-card/video-juegos-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVideoJuegosComponent,
    VideoJuegosCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
