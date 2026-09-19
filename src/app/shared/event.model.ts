export interface Evento {
  id: number;
  nome: string;
  data: Date;
  local: string;
  vagasTotais: number;
  vagasOcupadas: number;
  inscricoesAbertas: boolean;
  categoria: string;
  imagem: string;
  detalhes: string;
  favorito: boolean;
}