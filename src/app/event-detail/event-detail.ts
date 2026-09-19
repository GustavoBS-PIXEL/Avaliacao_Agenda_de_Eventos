import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../shared/event.model';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetailComponent {
  @Input() evento: Evento | null = null;
  @Input() visivel = false;
  @Output() fechar = new EventEmitter<void>();

  formatarData(): string {
    if (!this.evento) return '';
    return this.evento.data.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  get vagasRestantes(): number {
    if (!this.evento) return 0;
    return this.evento.vagasTotais - this.evento.vagasOcupadas;
  }

  close(): void {
    this.fechar.emit();
  }
}