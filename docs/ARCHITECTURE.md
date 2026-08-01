# ARCHITECTURE.md

## Estado atual

- Vite inicia a aplicação por `src/main.tsx`.
- `src/App.tsx` fornece o marco semântico `main` e organiza Hero, Story Scroll, Formações, Mentalidade, Quem Somos, Alunos, Empresas, Tutores e uma continuação neutra para o CTA.
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
- `src/components/formations/formation-data.ts` é a fonte tipada dos nove pilares da única formação Full Stack.
- `FormationsSection` compõe o cabeçalho editorial e `devclub-orbit-ecosystem.tsx` concentra seleção, órbitas CSS, trilha mobile e detalhe compartilhado.
- `src/components/students/student-stories.ts` contém sete relatos fictícios estáveis; `StudentsSection` e `stagger-testimonials.tsx` separam conteúdo, seção e comportamento do carrossel.
- `src/components/ui/` é o diretório único de componentes reutilizáveis compostos; não há shadcn nem alias novo.
- `src/components/mindset/MindsetSection.tsx` contém statement, três princípios, artefato cinematográfico DOM/CSS e link externo oficial; não cria player ou estado de vídeo.
- `src/components/about/AboutSection.tsx` apresenta o ambiente institucional por meio de contexto, quatro princípios e uma progressão visual desktop com GSAP/ScrollTrigger sem pin.
- `src/components/companies/company-data.ts` contém oito marcas fictícias tipadas; `CompaniesSection.tsx` controla o campo editorial, seleção compartilhada e reveal desktop sem pin.
- `src/components/tutors/tutor-data.ts` contém cinco perfis fictícios tipados; `TutorsSection.tsx` controla o seletor de vozes, perfil compartilhado e entrada desktop sem pin.

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

Adicionar o CTA como responsabilidade própria, preservando a jornada como narrativa de transição e evitando abstrações genéricas de seção.

## Conteúdo institucional da Sprint 4

O ecossistema usa DOM/CSS e `lucide-react`; não existe canvas, Three.js, request de logo ou loop JavaScript. A seleção mantém somente um `activeId`. No mobile, os mesmos dados alimentam uma trilha horizontal, sem reduzir a órbita desktop até ficar ilegível.

O carrossel mantém `activeIndex`, calcula vizinhos com índice modular e renderiza no máximo cinco posições visuais. IDs de conteúdo são as chaves; não há mutação do array, duplicação persistente ou `Math.random()`.

A seção Mentalidade é estruturalmente estática. Seu frame é um `figure` não interativo; a relação com YouTube existe apenas no link explícito e não adiciona recursos externos ao carregamento da página.

Quem Somos usa dados locais tipados no próprio componente porque seus quatro princípios são exclusivos da seção. Desktop combina statement sticky e conteúdo em fluxo; uma única timeline modifica apenas opacity e transform do reveal, do eixo e dos pontos. Abaixo de 901 px e em reduced motion, toda a composição permanece no estado final sem timeline.

Empresas usa `activeId` para selecionar uma das oito marcas e consumir nome, iniciais, setor e accent. Desktop posiciona marcas em um campo controlado; mobile troca por grid. Uma timeline restrita a desktop revela copy, linhas e marcas por opacity e transform, sem loop ou pin. Todos os nomes permanecem no DOM.

Tutores usa `activeId` para selecionar uma de cinco vozes e renderizar um único perfil compartilhado. Botões com `aria-pressed` preservam interação nativa; desktop usa sequência vertical conectada por uma linha de conversa e mobile usa lista horizontal. Uma timeline restrita a desktop revela copy, eixo e vozes por opacity e transform, sem loop ou pin.

## Hero Pack em produção

`hero-plates.ts` centraliza os `srcset` AVIF/WebP dos três estados. Em viewports com pelo menos 900 px de largura e 501 px de altura, um wrapper compartilhado preserva enquadramento, terminal e transform de câmera; nos demais casos, a composição CSS/DOM continua ativa. Os masters PNG não são carregados pela aplicação.
