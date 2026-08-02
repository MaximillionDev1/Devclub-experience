# ARCHITECTURE.md

## Estado atual

- Vite inicia a aplicação por `src/main.tsx`.
- `src/App.tsx` fornece o marco semântico `main`, hospeda a âncora estável `#top` fora do elemento pinado e organiza Hero, Story Scroll, Formações, Mentalidade, Quem Somos, Alunos, Empresas, Tutores e CTA final.
- `src/components/hero/HeroScene.tsx` concentra a cena, a timeline de entrada e a travessia curta com GSAP/ScrollTrigger.
- `src/components/hero/hero-transcript.ts` é a fonte tipada única das linhas e dos níveis de luz da Parte A.
- `src/components/journey/JourneySection.tsx` controla a composição editorial e uma timeline desktop.
- `src/components/journey/JourneyStep.tsx` renderiza uma etapa sem conhecer animação ou scroll.
- `src/components/journey/journey-data.ts` contém as seis etapas tipadas e editáveis.
- `src/lib/gsap.ts` registra e exporta uma única instância configurada de GSAP, `useGSAP` e ScrollTrigger.
- `src/index.css` concentra estilos globais, Tailwind 4 e adaptações responsivas da Hero por largura, altura e orientação.
- Textos e terminal permanecem no DOM; a animação aprimora um estado base já legível.
- O terminal visual é oculto da árvore acessível; uma transcrição estática equivalente permanece semanticamente disponível, sem `aria-live`.
- A Hero definitiva é integralmente CSS/DOM; não há imagem HERO-02, renderização condicional ou breakpoint de mídia fotográfica no bundle de produção.
- ScrollTrigger usa scroll nativo, pin curto e variantes desktop/tablet/mobile; Lenis foi removido.
- Story Scroll e todas as seções institucionais definitivas estão implementados.
- `src/components/formations/formation-data.ts` é a fonte tipada dos nove pilares da única formação Full Stack.
- `FormationsSection` compõe o cabeçalho editorial e `devclub-orbit-ecosystem.tsx` concentra seleção, órbitas CSS, trilha mobile e detalhe compartilhado.
- `src/components/students/student-stories.ts` contém sete relatos fictícios estáveis; `StudentsSection` e `stagger-testimonials.tsx` separam conteúdo, seção e comportamento do carrossel.
- `src/components/ui/` é o diretório único de componentes reutilizáveis compostos; não há shadcn nem alias novo.
- `src/components/mindset/MindsetSection.tsx` contém statement, três princípios, artefato cinematográfico DOM/CSS e link externo oficial; não cria player ou estado de vídeo.
- `src/components/about/AboutSection.tsx` apresenta o ambiente institucional por meio de contexto, quatro princípios e uma progressão visual desktop com GSAP/ScrollTrigger sem pin.
- `src/components/companies/company-data.ts` contém oito marcas fictícias tipadas; `CompaniesSection.tsx` controla o campo editorial, seleção compartilhada e reveal desktop sem pin.
- `src/components/tutors/tutor-data.ts` contém cinco perfis fictícios tipados; `TutorsSection.tsx` controla o seletor de vozes, perfil compartilhado e entrada desktop sem pin.
- `src/components/final-cta/FinalCtaSection.tsx` encerra a narrativa, contém as duas ações, a passagem luminosa e o footer mínimo.

## Princípios

- preservar estrutura funcional;
- separar seções narrativas;
- centralizar animações complexas;
- evitar abstração prematura;
- manter textos no DOM;
- usar assets como complemento.
- manter HERO-02-v01 e HERO-02-v02 fora do grafo de dependências da aplicação; ambos existem somente no acervo histórico.

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

A Hero mantém uma timeline temporal de entrada e uma timeline narrativa com o único ScrollTrigger pinado. No primeiro progresso real do scroll, a entrada é concluída e encerrada; só então a narrativa assume os elementos compartilhados. A mesma progressão controla terminal, parede, luz ambiental, contraste periférico, câmera compartilhada e passagem, sem ownership concorrente.

Mobile e baixa altura usam distância, checkpoints, scrub e intensidade próprios. Em reduced motion, a timeline narrativa, o pin, o cursor intermitente e o push-in não são criados; o transcript final permanece no DOM e a página segue em fluxo normal.

O Story Scroll não adiciona pin: CSS sticky mantém o painel desktop em contexto, enquanto uma única timeline altera progresso, palavra e marcador. A partir de 1024 px o painel existe; abaixo disso, e em reduced motion, as etapas seguem sem timeline.

As timelines editoriais de Quem Somos, Empresas, Tutores e CTA também começam em 1024 px. A base é `top 76%` → `bottom 64%`, scrub 0,45, `power1.out`, reveal de até 18 px e stagger 0,12/0,14/0,16 conforme texto, estrutura ou densidade; Quem Somos e CTA conservam envelopes próprios documentados em `docs/ANIMATIONS.md`. Anchors usam comportamento nativo instantâneo, sem smooth scroll do navegador ou biblioteca concorrente.

## Tipografia

A Hero mantém escala própria e constitui o ápice narrativo. Os H2 de Story Scroll, Formações, Mentalidade, Quem Somos, Empresas, Tutores e CTA consomem `--type-editorial-h2`, com faixa responsiva de 32–42 px. Ações e nomes interativos consomem `--type-interactive` em 13 px; peso e tracking continuam locais porque sua consolidação global não integra o escopo aprovado de MS-02.

Microcopy é classificada por função: contexto necessário à compreensão recebe piso e contraste legíveis; coordenadas, anotações de sistema e inscrições `aria-hidden` continuam decorativas e subordinadas. Wrapping editorial é resolvido por largura máxima e `text-wrap`, sem quebras manuais.

## Ritmo espacial

Os envelopes institucionais usam três papéis CSS: immersive para Formações/Students, compact para Mentalidade e standard para Quem Somos/Companies/Tutores. Até 720 px de altura, os mesmos papéis recebem tetos menores. O CTA conserva seu envelope closing anterior.

Story Scroll preserva arquitetura e motion; apenas seu espaço físico é menor em baixa altura. A cauda de transição continua sendo um gradient sem conteúdo e negocia a entrada de Formações. Em desktop, Formações e Students usam uma faixa mais curta entre lead e sistema. Os detalhes ficam registrados em `docs/plans/016-spatial-rhythm.md`.

## Destino final do CTA

O CTA primário usa diretamente o contato institucional de matrícula fornecido para esta etapa, como link externo sem estado ou navegação programática. A identidade da passagem é DOM/CSS (`DEVCLUB //`); o JPEG oficial serviu como referência, mas não integra o grafo de assets porque seu fundo incorporado exigiria edição destrutiva para uma aplicação monocromática limpa.

## Conteúdo institucional da Sprint 4

O ecossistema usa DOM/CSS e `lucide-react`; não existe canvas, Three.js, request de logo ou loop JavaScript. A seleção mantém somente um `activeId`. No mobile, os mesmos dados alimentam uma trilha horizontal, sem reduzir a órbita desktop até ficar ilegível.

O carrossel mantém `activeIndex`, calcula vizinhos com índice modular e renderiza no máximo cinco posições visuais. IDs de conteúdo são as chaves; não há mutação do array, duplicação persistente ou `Math.random()`.

A seção Mentalidade é estruturalmente estática. Seu frame é um `figure` não interativo; a relação com YouTube existe apenas no link explícito e não adiciona recursos externos ao carregamento da página.

Quem Somos usa dados locais tipados no próprio componente porque seus quatro princípios são exclusivos da seção. Desktop combina statement sticky e conteúdo em fluxo; uma única timeline modifica apenas opacity e transform do reveal, do eixo e dos pontos. Abaixo de 1024 px e em reduced motion, toda a composição permanece no estado final sem timeline.

Empresas usa `activeId` para selecionar uma das oito marcas e consumir nome, iniciais, setor e accent. Desktop posiciona marcas em um campo controlado; mobile troca por grid. Uma timeline restrita a desktop revela copy, linhas e marcas por opacity e transform, sem loop ou pin. Todos os nomes permanecem no DOM.

Tutores usa `activeId` para selecionar uma de cinco vozes e renderizar um único perfil compartilhado. Botões com `aria-pressed` preservam interação nativa; desktop usa sequência vertical conectada por uma linha de conversa e mobile usa lista horizontal. Uma timeline restrita a desktop revela copy, eixo e vozes por opacity e transform, sem loop ou pin.

O CTA final não possui estado React. A ação primária é um link externo direto para o contato verificado de matrícula no WhatsApp; `#top` permanece como retorno interno da ação secundária. Uma timeline desktop revela copy, ações e passagem por opacity e transform, sem pin; mobile e reduced motion são estáticos.

## Hero Pack em produção

`hero-plates.ts` centraliza os `srcset` AVIF/WebP dos três estados. Em viewports com pelo menos 900 px de largura e 501 px de altura, um wrapper compartilhado preserva enquadramento, terminal e transform de câmera; nos demais casos, a composição CSS/DOM continua ativa. Os masters PNG não são carregados pela aplicação.
