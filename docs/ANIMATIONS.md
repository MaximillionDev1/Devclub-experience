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

## Travessia

1. ScrollTrigger fixa a Hero por uma distância curta e controla uma timeline com scrub.
2. O notebook aproxima em wrapper próprio e a tela recebe expansão discreta.
3. Um overlay opaco assume a cena e coincide com o fundo da jornada editorial.
4. Desktop usa 0,90 viewport/escala 1,55; tablet 0,68/1,30; mobile 0,55/1,22.
5. `invalidateOnRefresh` recalcula a distância e `anticipatePin` reduz salto na entrada.
6. O retorno ao topo restaura wrapper, tela e overlay; há um único pin após reload, resize e refresh intermediário.
7. Em `prefers-reduced-motion: reduce`, a timeline de entrada, cursor infinito e ScrollTrigger não são criados; Hero e destino seguem no fluxo normal.

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
