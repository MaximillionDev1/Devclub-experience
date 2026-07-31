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

### Adiado

- aproximação;
- travessia;
- ScrollTrigger;
- comportamento orientado por scroll.

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

Na ausência de validação visual, não considerar resize, orientação ou dispositivos aprovados apenas com base na revisão estática.
