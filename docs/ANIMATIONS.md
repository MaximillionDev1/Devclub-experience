# ANIMATIONS.md

## Regras

- composição antes de animação;
- animação com função narrativa;
- conteúdo compreensível sem movimento;
- reduced motion obrigatório;
- mobile pode usar versão simplificada.

## Hero

### Implementado na Sprint 1

1. O estado final — ambiente, notebook, tela acesa, terminal, cursor estático e mensagem — existe no DOM/CSS e é legível sem GSAP.
2. Sob `prefers-reduced-motion: no-preference`, o GSAP aplica estados iniciais e revela cena, mesa, notebook, tela, luz, terminal, cursor e mensagem.
3. O cursor intermitente só é criado nesse mesmo contexto.
4. `gsap.matchMedia()` e `useGSAP` revertem estilos, timeline e tween no cleanup ou na mudança de preferência.
5. A composição animada definitiva usa somente os elementos CSS/DOM da Hero; a camada fotográfica experimental e seus seletores foram removidos.

### Parte A cinematográfica

1. O primeiro avanço de scroll revela `loading...`; os avanços seguintes apresentam mentores, projetos, possibilidades e `ready.`.
2. Cada linha compartilha seu checkpoint com um novo nível de luz ambiental e atmosfera da tela; a progressão não é apenas textual.
3. A timeline auxiliar usa scrub e o intervalo do pin existente, mas não adiciona pin nem altera a timeline de travessia.
4. O retorno do scroll restaura mensagens e luz em ordem inversa.
5. Em mobile e baixa altura, os checkpoints terminam antes, o scrub é mais curto e a intensidade luminosa é reduzida.
6. Com reduced motion, nenhuma timeline da Hero é criada: transcript final visível, cursor estático e fluxo normal.

### Hero cinematográfica final

1. Uma timeline principal substitui a timeline auxiliar da Parte A e a antiga timeline separada de travessia.
2. Checkpoints desktop: 0,02; 0,15; 0,27; 0,40; 0,56. Mobile/baixa altura: 0,015; 0,12; 0,22; 0,33; 0,46.
3. Cada checkpoint revela uma resposta e altera simultaneamente parede, luz ambiente, vinheta e glow físico da tela.
4. A câmera permanece imóvel até 0,68. Entre 0,68–0,88 ocorre o único push-in: 1,12 desktop, 1,08 tablet e 1,04 mobile.
5. A passagem existente assume a cena a partir de 0,88, sem novo pin e sem reescrever o Story Scroll.
6. A distância é 1,25 viewport no desktop, 0,90 no tablet e 0,65 no mobile; não há autoplay narrativo.

## Travessia

1. ScrollTrigger fixa a Hero por uma distância deliberada e controla a timeline cinematográfica unificada com scrub.
2. O notebook aproxima em wrapper próprio e a tela recebe expansão discreta.
3. Um overlay opaco assume a cena e coincide com o fundo da jornada editorial.
4. Desktop usa 1,25 viewport/escala 1,12; tablet 0,90/1,08; mobile 0,65/1,04.
5. `invalidateOnRefresh` recalcula a distância e `anticipatePin` reduz salto na entrada.
6. O retorno ao topo restaura wrapper, tela e overlay; há um único pin após reload, resize e refresh intermediário.
7. Em `prefers-reduced-motion: reduce`, a timeline de entrada, cursor infinito e ScrollTrigger não são criados; Hero e destino seguem no fluxo normal.
8. A travessia opera novamente sobre os wrappers originais `data-crossing-notebook`, `data-notebook` e `data-screen`, sem coordenadas ou máscaras vinculadas a bitmap.

### Adiado

- conteúdo institucional definitivo;
- novas animações decorativas.

## Story Scroll

1. A jornada mantém seis artigos no fluxo e um painel tipográfico sticky complementar no desktop.
2. Uma única timeline usa o contêiner das etapas como trigger, de `top 65%` a `bottom 55%`, sem pin.
3. Cada um dos seis segmentos atualiza palavra, marcador e linha de progresso por opacity e transform.
4. O primeiro estado permanece ativo até a primeira etapa; a timeline retorna integralmente ao estado 01.
5. A timeline só existe em `min-width: 1024px` com `prefers-reduced-motion: no-preference`.
6. Tablet, mobile e reduced motion mantêm todos os artigos em sequência natural e ocultam o painel complementar.
7. `invalidateOnRefresh` recalcula a geometria; refresh intermediário preserva conteúdo/scroll e posiciona o scrub no progresso matemático correspondente.

## Formações

1. Três rotores CSS movem somente `transform`, com 46, 62 e 78 segundos e direção alternada no nível intermediário.
2. Cada nó aplica contra-rotação, mantendo ícone e rótulo legíveis durante a órbita.
3. Hover ou foco dentro do ecossistema pausa rotores e contra-rotação.
4. Não existe timeline, interval, requestAnimationFrame ou state atualizado por frame.
5. Abaixo de 901 px, o diagrama é substituído por trilha horizontal estática e selecionável.
6. Em reduced motion, todas as animações orbitais são removidas e seleção/detalhe permanecem funcionais.

## Histórias de alunos

1. Mudanças de índice interpolam somente transform, opacity e borda dos cinco slots visuais.
2. Desktop preserva centro, dois vizinhos principais e duas camadas remotas; tablet reduz a abertura; mobile mantém um card e previews praticamente ausentes.
3. Reduced motion remove as transições, sem retirar conteúdo ou controles.
4. A interação não cria autoplay, intervalo, gesto obrigatório ou estado por frame.

## Mentalidade

1. A pausa editorial não cria timeline, ScrollTrigger, pin, autoplay ou animação contínua.
2. O artefato é um quadro completo e estático construído com DOM/CSS.
3. Apenas o link possui microtransição de cor e linha; reduced motion remove essa transição.
4. Conteúdo, princípios e ação permanecem idênticos com ou sem movimento.

## Story Scroll

Cada etapa deve produzir mudança visual real.

## Validação

- cleanup;
- resize;
- orientação;
- desktop;
- mobile;
- reduced motion;
- console;
- performance.

Resize, orientação e dispositivos só devem ser marcados como aprovados quando houver evidência real; reduced motion ainda aguarda validação visual com a preferência ativa.

## Integração dos plates

HERO-01 cruza para HERO-02 no despertar e HERO-02 cruza para HERO-03 no sinal. Cada entrada reduz simultaneamente a plate anterior; o scrub reverso restaura a sequência. Push-in e portal transformam apenas o wrapper compartilhado. A distância final é 1,35 viewport no desktop, 1,00 no tablet e 0,70 no compacto.
