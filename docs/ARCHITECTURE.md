# ARCHITECTURE.md

## Estado atual

- Vite inicia a aplicação por `src/main.tsx`.
- `src/App.tsx` fornece o marco semântico `main` e organiza `HeroScene` seguida por `JourneySection`.
- `src/components/hero/HeroScene.tsx` concentra a cena, a timeline de entrada e a travessia curta com GSAP/ScrollTrigger.
- `src/components/journey/JourneySection.tsx` controla a composição editorial e uma timeline desktop.
- `src/components/journey/JourneyStep.tsx` renderiza uma etapa sem conhecer animação ou scroll.
- `src/components/journey/journey-data.ts` contém as seis etapas tipadas e editáveis.
- `src/lib/gsap.ts` registra e exporta uma única instância configurada de GSAP, `useGSAP` e ScrollTrigger.
- `src/index.css` concentra estilos globais, Tailwind 4 e adaptações responsivas da Hero por largura, altura e orientação.
- Textos e terminal permanecem no DOM; a animação aprimora um estado base já legível.
- ScrollTrigger usa scroll nativo, pin curto e variantes desktop/tablet/mobile; Lenis foi removido.
- O Story Scroll está implementado; ainda não há seções institucionais definitivas.

## Princípios

- preservar estrutura funcional;
- separar seções narrativas;
- centralizar animações complexas;
- evitar abstração prematura;
- manter textos no DOM;
- usar assets como complemento.

## Áreas previstas

- Hero;
- travessia;
- Story Scroll;
- formações;
- alunos;
- empresas;
- tutores;
- comunidade;
- CTA.

## Animações

- GSAP;
- ScrollTrigger;
- `@gsap/react`;
- cleanup;
- reduced motion;
- comportamento mobile próprio.

O transform da entrada permanece em `data-notebook`; o transform da travessia usa `data-crossing-notebook`. Essa separação evita disputa de propriedades e garante retorno ao estado final da Hero.

O Story Scroll não adiciona pin: CSS sticky mantém o painel desktop em contexto, enquanto uma única timeline altera progresso, palavra e marcador. A partir de 1024 px o painel existe; abaixo disso, e em reduced motion, as etapas seguem sem timeline.

## Pendência

Adicionar as futuras seções institucionais como responsabilidades próprias, preservando a jornada como narrativa de transição e evitando abstrações genéricas de seção.
