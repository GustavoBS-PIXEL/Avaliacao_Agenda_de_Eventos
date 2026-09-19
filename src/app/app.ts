import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header';
import { EventCardComponent } from './event-card/event-card';
import { EventDetailComponent } from './event-detail/event-detail';
import { FooterComponent } from './footer/footer';
import { EventoService } from './shared/evento.service';
import { Evento } from './shared/event.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    EventCardComponent,
    EventDetailComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  eventos: Evento[] = [];
  eventoSelecionado: Evento | null = null;
  usuarioLogado = false;

  constructor(public eventoService: EventoService) {
    this.eventos = this.eventoService.getEventos();
  }

  verDetalhes(evento: Evento): void {
    this.eventoSelecionado = evento;
  }

  fecharDetalhes(): void {
    this.eventoSelecionado = null;
  }

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}