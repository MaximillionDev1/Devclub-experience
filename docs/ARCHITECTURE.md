# ARCHITECTURE.md

## Estado atual

- Vite inicia a aplicação por `src/main.tsx`.
- `src/App.tsx` fornece o marco semântico `main` e organiza `HeroScene` seguida por `JourneySection`.
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
- O Story Scroll está implementado; ainda não há seções institucionais definitivas.

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

O transform da entrada permanece em `data-notebook`; o transform da travessia usa `data-crossing-notebook`. Essa separação evita disputa de propriedades e garante retorno ao estado final da Hero.

A Hero final usa uma única timeline narrativa e um único ScrollTrigger com pin. A mesma progressão controla linhas do terminal, parede, luz ambiental, contraste periférico, glow da tela, push-in e passagem. Isso elimina timelines paralelas sobre a mesma geometria. O transform do notebook interno permanece reservado à entrada; somente `data-crossing-notebook` recebe o push-in no terço final.

Mobile e baixa altura usam distância, checkpoints, scrub e intensidade próprios. Em reduced motion, a timeline narrativa, o pin, o cursor intermitente e o push-in não são criados; o transcript final permanece no DOM e a página segue em fluxo normal.

O Story Scroll não adiciona pin: CSS sticky mantém o painel desktop em contexto, enquanto uma única timeline altera progresso, palavra e marcador. A partir de 1024 px o painel existe; abaixo disso, e em reduced motion, as etapas seguem sem timeline.

## Pendência

Adicionar as futuras seções institucionais como responsabilidades próprias, preservando a jornada como narrativa de transição e evitando abstrações genéricas de seção.

## Hero Pack em produção

`hero-plates.ts` centraliza os `srcset` AVIF/WebP dos três estados. Em viewports com pelo menos 900 px de largura e 501 px de altura, um wrapper compartilhado preserva enquadramento, terminal e transform de câmera; nos demais casos, a composição CSS/DOM continua ativa. Os masters PNG não são carregados pela aplicação.
