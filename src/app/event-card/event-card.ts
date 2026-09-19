import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../shared/event.model';
import { EventoService } from '../shared/evento.service';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCardComponent {
  @Input() evento!: Evento;
  @Output() detalhes = new EventEmitter<Evento>();

  constructor(public eventoService: EventoService) {}

  get vagasRestantes(): number {
    return this.evento.vagasTotais - this.evento.vagasOcupadas;
  }

  get porcentagemPreenchida(): number {
    return Math.round((this.evento.vagasOcupadas / this.evento.vagasTotais) * 100);
  }

  formatarData(): string {
    return this.evento.data.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  favoritar(evento: Evento): void {
    this.eventoService.alternarFavorito(evento.id);
  }

  inscrever(evento: Evento): void {
    const mensagem = this.eventoService.inscrever(evento.id);
    alert(mensagem);
  }

  verDetalhes(evento: Evento): void {
    this.detalhes.emit(evento);
  }
}