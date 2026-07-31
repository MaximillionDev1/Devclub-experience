# CURRENT_STATE.md

## Status

Sprint 3 implementada: Hero e travessia conduzem a um Story Scroll editorial com seis etapas sobre direção, fundamentos, prática, projetos, comunidade e transformação.

## Validações confirmadas

- `npm install`: aprovado.
- `npm run dev`: aprovado.
- `npm run lint`: aprovado.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado.

## Fase atual

Sprint 3 — Story Scroll implementado e validado em movimento normal nas nove dimensões-alvo. A validação visual com reduced motion efetivamente ativo permanece pendente.

## Concluído

- auditoria estrutural inicial;
- estado final da Hero legível sem timeline;
- `prefers-reduced-motion` sem timeline de entrada ou cursor infinito;
- composições adaptadas para desktop, tablet, mobile, baixa altura e paisagem móvel;
- metadados essenciais em `pt-BR`;
- resíduos não utilizados do template removidos;
- script explícito de typecheck;
- Lenis adiado na Sprint 1, avaliado e removido na Sprint 2;
- ScrollTrigger registrado uma vez e integrado à Hero com `useGSAP`, escopo e cleanup;
- travessia híbrida com pin de 0,90 viewport no desktop, 0,68 no tablet e 0,55 no mobile;
- zoom máximo de 1,55 no desktop, 1,30 no tablet e 1,22 no mobile;
- seção provisória acessível com heading real;
- scroll nativo escolhido e Lenis removido do manifesto e lockfile;
- entrada, saída, retorno, orientação horizontal e refresh no meio da travessia validados no navegador.
- destino provisório substituído por jornada editorial com seis etapas;
- dados narrativos tipados e consumidos por `JourneySection` e `JourneyStep`;
- painel sticky complementar no desktop, sem novo pin;
- timeline única do Story Scroll, ativa somente a partir de 1024 px e sem reduced motion;
- fluxo natural para tablet e mobile;
- registro de GSAP, `useGSAP` e ScrollTrigger centralizado;
- matriz visual, retorno, saída, breakpoint e refresh intermediário validados.

## Próxima etapa

1. Validar visualmente Hero, travessia e Story Scroll com `prefers-reduced-motion: reduce` ativo.
2. Medir performance da experiência em aparelho móvel real.
3. Planejar a Sprint 4 de conteúdo institucional sem transformar a jornada em cards genéricos.

## Problemas conhecidos

- A instância de navegador usada reportou `prefers-reduced-motion: false` e não expôs emulação de mídia.
- A performance não foi perfilada em dispositivo real.
- Ainda não existem formações completas, depoimentos, empresas, tutores, CTA final ou footer.

## Pendências

- validação visual com reduced motion ativo;
- validação de performance;
- definição dos assets finais;
- integração de ferramentas externas.
