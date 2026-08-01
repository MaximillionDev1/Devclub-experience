# Empresas

## Objetivo

Representar, depois das histórias de alunos, a possibilidade de habilidades construídas no ecossistema DevClub encontrarem ambientes profissionais reais, sem prometer emprego, sugerir contratação garantida ou apresentar identidades fictícias como parceiros confirmados.

## Estado atual

- O fluxo implementado termina em Student Stories seguida por uma continuação neutra com `id="empresas"` e âncora interna `id="tutores"`.
- A navegação da Hero já aponta Empresas para `#empresas` e Tutores para `#tutores`.
- Não existe conteúdo definitivo de Empresas.
- O projeto usa React 19, TypeScript 6, Tailwind CSS 4, GSAP centralizado e `lucide-react`; nenhuma dependência adicional é necessária.

## Escopo

Entra:

- seção semântica `id="empresas"` após Alunos;
- copy editorial sobre contribuição e preparação profissional;
- oito identidades fictícias tipadas e integralmente consumidas;
- campo assimétrico de marcas textuais com geometria CSS própria;
- seleção por mouse, toque e teclado e um detalhe compartilhado de setor;
- uma progressão de entrada desktop sem pin ou loop;
- composição mobile compacta e continuação neutra apenas para Tutores;
- documentação explícita sobre o caráter conceitual das marcas.

Não entra:

- logos ou nomes de empresas reais;
- afirmação de parceria, contratação, salário ou volume de oportunidades;
- marquee, carrossel contínuo, cards idênticos ou logos gerados;
- Tutores, CTA final, nova dependência ou alteração visual da Hero.

## Arquivos relacionados

- criar `src/components/companies/company-data.ts`;
- criar `src/components/companies/CompaniesSection.tsx`;
- alterar `src/App.tsx` e `src/index.css`;
- atualizar `TASKS.md`, `docs/CURRENT_STATE.md`, `docs/DECISIONS.md`, `docs/ARCHITECTURE.md`, `docs/ANIMATIONS.md`, `docs/CONTENT-SOURCES.md` e este plano.

## Decisões

- Usar oito botões porque revelar o setor acrescenta contexto concreto e evita que as marcas sejam apenas decoração.
- Manter um único detalhe compartilhado, atualizado por `activeId`, sem `aria-live` para evitar anúncios excessivos.
- Cada marca usa iniciais, nome, setor e geometria CSS; não há ícone Lucide nem SVG remoto como logo.
- Desktop usa um campo controlado com posições e escalas variadas definidas em CSS; mobile troca por grid compacto de duas colunas.
- Uma timeline desktop revela linha e marcas em ordem deliberada, sem pin. Tablet, mobile e reduced motion mostram o estado final.
- Preservar os quatro itens da Hero; apenas confirmar que Empresas continua chegando ao novo destino.

## Etapas

1. Criar dados tipados e seção semântica.
2. Integrar no fluxo e reposicionar a continuação futura de Tutores.
3. Implementar campo editorial, interação e composição mobile.
4. Implementar reveal/progressão com cleanup e reduced motion.
5. Atualizar documentação e validar.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- dez viewports existentes com reload individual;
- âncora da Hero, teclado, foco, seleção, reverse scroll, resize, orientação e overflow;
- ausência de recursos remotos e regressões nas seções anteriores.

## Progresso

- [x] pedido e estado atual inspecionados;
- [x] arquitetura e interação definidas;
- [x] seção e dados implementados;
- [x] animação e fallbacks implementados;
- [x] documentação atualizada;
- [x] validações técnicas executadas;
- [x] matriz visual e interativa executada.

## Descobertas

- O placeholder atual pode ser substituído diretamente pela seção Empresas, mantendo apenas uma continuação neutra com `id="tutores"`.
- Interação tem valor apenas se o setor for consumido em um detalhe compartilhado; não haverá hover-only ou tooltip inacessível.
- O primeiro typecheck inferiu o estado como o literal `"nexo-labs"`; declarar `useState<string>` resolveu a união de IDs sem cast.
- A matriz com reload individual confirmou oito marcas, ausência de overflow e apenas o pin da Hero em todos os viewports.
- Em mobile, as plates progressivas ocultas HERO-02/HERO-03 permanecem com `naturalWidth=0`; é comportamento preexistente da Hero, sem recurso novo ou request remoto em Empresas.
- O navegador não expõe emulação de `prefers-reduced-motion`; o fallback foi revisado no código, mas o teste visual efetivamente ativo permanece pendente.
- `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` concluíram com código zero; o último reportou somente avisos de normalização LF para CRLF.

## Resultado

Empresas substituiu o placeholder `#empresas` depois de Alunos, preservando continuação neutra `#tutores`. O campo editorial comunica contribuição e destinos possíveis sem parecer logo wall ou alegar parceria. Seleção, teclado, âncora, progressão reversível, mobile e matriz de dez viewports foram aprovados sem overflow, mídia remota ou erro da aplicação.
