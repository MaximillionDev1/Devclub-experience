# Travessia pelo notebook

## Objetivo

Criar uma progressão curta controlada pelo scroll: a Hero permanece estável, o notebook se aproxima, a tela assume visualmente a cena e conduz a uma seção provisória acessível que representa a entrada no universo de possibilidades do DevClub.

## Estado atual

- `App.tsx` renderiza somente `HeroScene`.
- A Hero possui entrada GSAP com `useGSAP`, escopo local e política de movimento baseada em `gsap.matchMedia()`.
- O estado final da Hero é o estado base do DOM/CSS.
- Não há ScrollTrigger, travessia ou seção posterior.
- Lenis `^1.3.25` está instalado, mas não possui import ou configuração no código-fonte.
- A validação visual normal da Sprint 1 confirmou ausência de overflow documental nas oito dimensões-alvo; reduced motion não pôde ser emulado naquela instância.

## Escopo

### Entra

- ScrollTrigger e pinning curto;
- aproximação do notebook e expansão visual da tela;
- transição para um espaço narrativo provisório;
- seção de destino sem conteúdo institucional definitivo;
- comportamento próprio para desktop e mobile;
- fluxo linear sem pinning em reduced motion;
- decisão e limpeza do Lenis;
- documentação e validação técnica/visual.

### Não entra

- Story Scroll;
- formações, alunos, empresas, tutores ou comunidade;
- conteúdo institucional final;
- assets externos ou gerados;
- efeitos decorativos adicionais;
- commit ou push.

## Arquivos relacionados

- `src/App.tsx`;
- `src/components/hero/HeroScene.tsx`;
- `src/components/journey/JourneyPlaceholder.tsx` (novo);
- `src/index.css`;
- `package.json` e `package-lock.json`;
- `TASKS.md`;
- `docs/CURRENT_STATE.md`;
- `docs/DECISIONS.md`;
- `docs/ARCHITECTURE.md`;
- `docs/ANIMATIONS.md`;
- este ExecPlan.

## Decisões

### Opção A — Transformação da própria cena

- **Coerência narrativa:** alta; o visitante atravessa literalmente o notebook.
- **Dificuldade técnica:** média, mas cresce com a escala necessária.
- **Precisão visual:** baixa a média; preencher a viewport depende da proporção da tela e produz cortes variáveis.
- **Performance:** transform é barato, porém escala extrema amplia blur, sombra e superfícies compostas.
- **Desktop:** impacto alto e controle razoável.
- **Mobile:** escala excessiva, cortes e deslocamentos mais difíceis de estabilizar.
- **Reduced motion:** exige alternativa totalmente distinta.
- **Manutenção:** simples no início, frágil ao mudar a composição.
- **Compatibilidade:** preserva a Hero, mas força notebook, mesa e objetos além de suas proporções naturais.

### Opção B — Máscara baseada na tela

- **Coerência narrativa:** muito alta; a próxima seção nasce exatamente da tela.
- **Dificuldade técnica:** alta; requer medir e sincronizar a geometria da tela.
- **Precisão visual:** potencialmente alta, mas sensível a resize, orientação, barras móveis e refresh no meio da página.
- **Performance:** boa com transform/clip-path moderado, desde que a medição seja estável.
- **Desktop:** excelente quando alinhada.
- **Mobile:** exige cálculos e caminhos específicos.
- **Reduced motion:** pode degradar para fluxo linear.
- **Manutenção:** maior acoplamento entre DOM da Hero e camada de revelação.
- **Compatibilidade:** visualmente adequada, tecnicamente desproporcional ao prazo desta Sprint.

### Opção C — Transição híbrida (escolhida)

- **Coerência narrativa:** alta; aproxima o notebook sem perder sua materialidade e entrega a cena a um overlay vindo da tela.
- **Dificuldade técnica:** média e explicável.
- **Precisão visual:** alta o suficiente sem depender de medições por frame.
- **Performance:** usa transform e opacity, sem filtros ou layout por frame.
- **Desktop:** zoom moderado e travessia em aproximadamente 0,9 viewport adicional.
- **Tablet:** escala intermediária de 1,30 e distância de 0,68 viewport para evitar compressão da versão desktop.
- **Mobile:** zoom máximo de 1,22 e distância de 0,55 viewport, com transição mais direta.
- **Reduced motion:** Hero e destino seguem em sequência normal, sem ScrollTrigger, pin ou zoom.
- **Manutenção:** seletores e responsabilidades locais; overlay não depende de geometria calculada.
- **Compatibilidade:** preserva integralmente a marcação e o estado estático essencial da Hero.

**Escolha:** Opção C, pelo melhor equilíbrio entre impacto, estabilidade, mobile, acessibilidade e prazo.

### Scroll nativo versus Lenis

Uma única timeline scrub curta não demonstra ganho perceptível que justifique suavização adicional. Scroll nativo preserva comportamento esperado, teclado, mobile e reduced motion, e integra diretamente com ScrollTrigger. A decisão é remover Lenis nesta Sprint e reavaliar somente se uma necessidade mensurável surgir no Story Scroll.

## Etapas

1. Registrar alternativas, decisão e critérios de validação.
2. Criar a seção provisória semanticamente correta.
3. Implementar a travessia híbrida com ScrollTrigger e variantes desktop/mobile.
4. Garantir fluxo linear em reduced motion.
5. Remover Lenis e confirmar lockfile e ausência de referências.
6. Executar validações técnicas, estáticas e visuais.
7. Atualizar documentação e concluir este plano com fatos reais.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- busca estática por ScrollTrigger, timelines, imports/variáveis sem uso, `any`, logs, TODOs e Lenis;
- navegador em 1440×900, 1366×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- entrada/saída do pin, retorno, resize, orientação, refresh no meio da página e reduced motion, somente quando realmente executados.

## Progresso

- [x] skill, fontes de verdade, referências e planos anteriores lidos;
- [x] três soluções avaliadas e solução híbrida escolhida;
- [x] decisão preliminar por scroll nativo registrada;
- [x] seção provisória implementada;
- [x] ScrollTrigger desktop/tablet/mobile implementado;
- [x] reduced motion implementado no código;
- [x] Lenis removido;
- [x] validações técnicas e estáticas aprovadas;
- [x] validação visual em movimento normal executada;
- [ ] reduced motion validado visualmente com a preferência ativa;
- [x] documentação concluída.

## Descobertas

- A composição existente já oferece alvos estáveis (`data-notebook`, `data-screen`, `data-desk`, `data-light` e `data-scroll-hint`) sem exigir refatoração estrutural.
- Um overlay não essencial pode fazer a ponte para o destino sem duplicar o heading ou ocultar conteúdo essencial no estado base.
- A primeira matriz visual mostrou que aplicar a variante desktop a 768×1024 e 844×390 ampliava o notebook além do necessário; uma variante tablet explícita foi introduzida.
- A primeira validação de retorno revelou disputa pelo transform de `data-notebook`; um wrapper `data-crossing-notebook` isolou a travessia e o retorno passou a restaurar matriz identidade.
- Nas oito dimensões, existe um único `.pin-spacer`, o scroll documental não excede horizontalmente a viewport útil e o retorno restaura overlay e transforms.
- O refresh em 430×932 no meio da travessia preservou `scrollY`, escala e um único pin.
- A mudança de viewport recalculou alturas e manteve um único trigger; a própria capacidade de emulação do navegador voltou ao topo ao trocar a viewport, portanto não foi usada como evidência de preservação de progresso durante resize.
- A instância reportou `prefers-reduced-motion: false` e não forneceu emulação de mídia; o comportamento reduzido foi confirmado apenas por inspeção estrutural, não visualmente.
- O npm removeu Lenis e reportou zero vulnerabilidades; houve aviso não bloqueador ao tentar limpar uma pasta WASM preexistente em `node_modules`.

## Resultado

Travessia híbrida implementada com scroll nativo, ScrollTrigger curto e seção provisória acessível. A Hero foi preservada, e a animação de travessia usa um wrapper independente para não conflitar com a entrada. Desktop, tablet e mobile possuem escalas, distâncias e scrub próprios; em reduced motion nenhum ScrollTrigger ou zoom é criado.

`npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` passaram. A busca estática encontrou somente duas timelines intencionais, um registro de ScrollTrigger e nenhuma ocorrência de `any`, logs, TODOs ou Lenis. A matriz visual normal foi executada nas oito dimensões, incluindo entrada/saída, retorno e orientação; refresh intermediário foi aprovado em 430×932. Não houve validação visual com reduced motion ativo nem perfil em dispositivo real.
