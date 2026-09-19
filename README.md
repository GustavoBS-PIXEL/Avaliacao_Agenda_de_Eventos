# Agenda de Eventos

Projeto Angular 22.1.5 que exibe uma agenda de eventos com informações de data, local, vagas, inscrições e detalhes.

## Aluno

**Gustavo Beppler Silvino**

## Descrição

Aplicação web desenvolvida com Angular 22.1.5 que apresenta uma lista de eventos dinâmicos, permitindo ao usuário visualizar informações detalhadas, favoritar eventos, realizar inscrições e interagir com a interface através de binding de eventos e diretivas condicionais.

## Funcionalidades

- Listagem dinâmica de 4 eventos com dados completos (nome, data, local, vagas, categoria, imagem)
- Cards interativos com informações de vagas e barra de progresso
- Modal de detalhes do evento com descrição completa
- Sistema de favoritos com toggle visual
- Inscrição em eventos com controle de vagas
- Toggle de login/usuário logado com mensagens condicionais
- Design responsivo mobile-first
- Navegação por header com links

## Stack Tecnológica

- **Framework:** Angular 22.1.5
- **Linguagem:** TypeScript 6.0
- **Estilização:** CSS3 (Flexbox, Grid, Custom Properties)
- **Build Tool:** Angular CLI / Vite
- **Testes:** Vitest
- **Runtime Node:** npm 11.17.0

## Como Executar

### Instalação

```bash
npm install
```

### Servidor de Desenvolvimento

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`.

### Build de Produção

```bash
ng build
```

### Testes Unitários

```bash
ng test
```

## Estrutura do Projeto

```
src/app/
├── app.ts              (componente root - orchestrator)
├── app.html            (template principal)
├── app.css             (estilos globais)
├── header/             (componente de navegação)
├── event-card/         (card de cada evento)
├── event-detail/       (modal de detalhes)
├── footer/             (rodapé)
└── shared/
    ├── event.model.ts  (interface Evento)
    └── evento.service.ts (serviço com dados mock)
```

## Recursos Angular Demonstrados

- **Interpolação:** `{{ evento.nome }}`, `{{ evento.local }}`
- **Property Binding:** `[src]="evento.imagem"`, `[disabled]="!evento.inscricoesAbertas"`
- **Event Binding:** `(click)="favoritar(evento)"`, `(click)="inscrever(evento)"`
- **Diretivas Condicionais:** `@if (evento.inscricoesAbertas)`, `@if (usuarioLogado)` com `@else`
- **@for:** iteração sobre a lista de eventos




## Imagens da Aplicação

## Vídeo de Apresentação


