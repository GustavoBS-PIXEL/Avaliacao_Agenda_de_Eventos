import { Injectable } from '@angular/core';
import { Evento } from './event.model';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private eventos: Evento[] = [
    {
      id: 1,
      nome: 'Tech Summit 2026',
      data: new Date('2026-10-15'),
      local: 'Centro de Convenções São Paulo',
      vagasTotais: 200,
      vagasOcupadas: 145,
      inscricoesAbertas: true,
      categoria: 'Tecnologia',
      imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop',
      detalhes:
        'O Tech Summit 2026 é o maior evento de tecnologia da América Latina. Com palestras de especialistas internacionais, workshops práticos e networking, o evento cobre temas como IA, cloud computing, cibersegurança e desenvolvimento web moderno.',
      favorito: false,
    },
    {
      id: 2,
      nome: 'Workshop Angular Avançado',
      data: new Date('2026-11-05'),
      local: 'Escola de Programação Digital',
      vagasTotais: 50,
      vagasOcupadas: 50,
      inscricoesAbertas: false,
      categoria: 'Educação',
      imagem: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop',
      detalhes:
        'Um workshop intensivo de 2 dias focado em Angular 22+, com hands-on em signals, standalone components, SSR e performance. Ideal para desenvolvedores que desejam dominar as últimas novidades do framework.',
      favorito: false,
    },
    {
      id: 3,
      nome: 'Hackathon de Inovação',
      data: new Date('2026-12-01'),
      local: 'Hub de Inovação Tecnológica',
      vagasTotais: 120,
      vagasOcupadas: 78,
      inscricoesAbertas: true,
      categoria: 'Competição',
      imagem: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=600&h=300&fit=crop',
      detalhes:
        'Desafio de 48 horas para criar soluções inovadoras usando tecnologias modernas. Equipes de até 5 pessoas competem por prêmios em dinheiro e oportunidades de estágio nas empresas parceiras.',
      favorito: false,
    },
    {
      id: 4,
      nome: 'Feira de Carreiras Tech',
      data: new Date('2026-12-10'),
      local: 'Centro Empresarial Rio de Janeiro',
      vagasTotais: 300,
      vagasOcupadas: 120,
      inscricoesAbertas: true,
      categoria: 'Carreira',
      imagem: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=300&fit=crop',
      detalhes:
        'A maior feira de carreiras do setor tech no Brasil. Mais de 100 empresas presentes com oportunidades de estágio e efetivo. Consultores de RH e recruiters estarão disponíveis para orientar seu currículo e carreira.',
      favorito: false,
    },
  ];

  constructor() {}

  getEventos(): Evento[] {
    return this.eventos;
  }

  getEventoPorId(id: number): Evento | undefined {
    return this.eventos.find((e) => e.id === id);
  }

  alternarFavorito(id: number): void {
    const evento = this.getEventoPorId(id);
    if (evento) {
      evento.favorito = !evento.favorito;
    }
  }

  inscrever(id: number): string {
    const evento = this.getEventoPorId(id);
    if (evento && evento.inscricoesAbertas && evento.vagasOcupadas < evento.vagasTotais) {
      evento.vagasOcupadas++;
      return `Inscrição realizada com sucesso no evento "${evento.nome}"!`;
    }
    return 'Não foi possível realizar a inscrição.';
  }
}
