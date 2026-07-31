# CURRENT_STATE.md

## Status

Sprint 1 de estabilização da base e da Hero implementada. A composição permanece funcional como conteúdo estático e a animação é um aprimoramento opcional.

## Validações confirmadas

- `npm install`: aprovado.
- `npm run dev`: aprovado.
- `npm run lint`: aprovado.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado.

## Fase atual

Sprint 1 — estabilização da Hero concluída em código; validação visual em navegador e performance permanecem pendentes.

## Concluído

- auditoria estrutural inicial;
- estado final da Hero legível sem timeline;
- `prefers-reduced-motion` sem timeline de entrada ou cursor infinito;
- composições adaptadas para desktop, tablet, mobile, baixa altura e paisagem móvel;
- metadados essenciais em `pt-BR`;
- resíduos não utilizados do template removidos;
- script explícito de typecheck;
- Lenis confirmado sem uso e adiado para a travessia.

## Próxima etapa

1. Executar revisão visual real em navegador nas larguras e alturas-alvo, incluindo reduced motion.
2. Medir performance da Hero em desktop e aparelho móvel.
3. Planejar a Sprint 2 de travessia e então reavaliar ScrollTrigger e Lenis.

## Problemas conhecidos

- A Hero ainda não possui CTA ou travessia; isso pertence às próximas sprints.
- Não houve validação visual em navegador nesta etapa.
- A performance não foi perfilada em dispositivo real.

## Pendências

- validação visual da Hero;
- validação de performance;
- definição dos assets finais;
- integração de ferramentas externas.
