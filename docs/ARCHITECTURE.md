# ARCHITECTURE.md

## Estado atual

- Vite inicia a aplicação por `src/main.tsx`.
- `src/App.tsx` fornece o marco semântico `main` e renderiza `HeroScene`.
- `src/components/hero/HeroScene.tsx` concentra a única seção atual, sua marcação e a timeline de entrada com GSAP.
- `src/index.css` concentra estilos globais, Tailwind 4 e adaptações responsivas da Hero por largura, altura e orientação.
- Textos e terminal permanecem no DOM; a animação aprimora um estado base já legível.
- Não há ScrollTrigger, Lenis em execução, travessia, Story Scroll ou seções institucionais.

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

## Pendência

Separar novas responsabilidades somente quando a travessia e as seções futuras forem implementadas, evitando abstração prematura.
