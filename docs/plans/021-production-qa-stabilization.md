# ExecPlan 021 — Production QA Stabilization

## Objetivo

Corrigir exclusivamente os achados confirmados na auditoria de produção: geometria obsoleta do pin da Hero após rotação, atributo ARIA proibido em Tutores e contrastes pontuais reportados pelo Lighthouse; em seguida validar reduced motion ativo e a matriz responsiva sem redesenho.

## Estado atual

O deploy apresenta Lighthouse 99/100 em performance mobile/desktop, 96/92 em acessibilidade, 100 em Best Practices e 100 em SEO. A rotação 844×390 → 390×844 mantém um `pin-spacer` e a Hero com 829 px inline, produzindo overflow horizontal. Lighthouse também aponta `aria-label` proibido em `div.tutors-conversation` e contraste insuficiente em metadados do Story Scroll e Formações.

## Escopo

Entra:

- estabilizar o refresh do ScrollTrigger após resize/orientation;
- remover o ARIA inválido sem alterar a composição de Tutores;
- ajustar somente as cores dos textos explicitamente reprovados;
- executar reduced-motion ativo, matriz responsiva, teclado, console e Lighthouse;
- atualizar documentação factual da estabilização.

Não entra:

- redesign, copy, arquitetura, dependências ou assets;
- otimização de bundle, JavaScript não usado ou render blocking;
- mudanças na narrativa, timings ou quantidade de animações.

## Arquivos relacionados

- `src/components/hero/HeroScene.tsx`;
- `src/components/tutors/TutorsSection.tsx`;
- `src/components/journey/JourneySection.tsx`;
- `src/index.css`;
- `TASKS.md`;
- `docs/CURRENT_STATE.md`;
- `docs/DECISIONS.md`;
- `docs/plans/021-production-qa-stabilization.md`.

## Decisões

- A correção deve atuar no ciclo de refresh do pin, não esconder overflow no documento.
- Formações preserva sua trilha horizontal nativa; ela não é a origem da largura obsoleta.
- `tutors-conversation` não constitui uma região independente e não precisa de nome acessível.
- Somente texto legível reportado pelo Lighthouse recebe contraste AA; anéis e linhas decorativos permanecem subordinados.
- Reduced motion só será aprovado mediante emulação ativa observável.

## Etapas

1. Registrar causa e baseline de produção.
2. Implementar refresh pós-layout, ARIA e contraste pontual.
3. Executar lint, typecheck, build e diff check.
4. Validar matriz, rotações repetidas, foco, semântica, console e reduced motion.
5. Executar Lighthouse sobre o build corrigido ou deployment atualizado.
6. Atualizar documentação com evidências reais.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- matriz de dez viewports;
- sequências 844×390 → 390×844 repetida e 1024×768 → 768×1024 → 430×932 → 1280×720;
- normal motion com um pin e reduced motion sem pin;
- teclado, foco, Tutores, contraste e console;
- Lighthouse mobile e desktop.

## Progresso

- [x] baseline e causa raiz confirmados;
- [x] correções implementadas;
- [x] gates técnicos aprovados;
- [x] QA visual e responsiva aprovado;
- [x] Lighthouse pós-correção executado;
- [x] documentação finalizada.

## Descobertas

- A trilha mobile de Formações recalcula para a largura portrait e contém seu próprio `scrollWidth`.
- O overflow do documento vem do `pin-spacer` e da Hero, ambos retendo inline width de 829 px após a rotação.
- O refresh em um único frame não cobre a estabilização tardia da viewport durante orientation change.
- Recriar os contextos de mídia corrigiu a rotação original, mas transições rápidas dentro da mesma condição ainda podiam reter a largura anterior; a proteção fluida do único pin eliminou a corrida de forma determinística.
- Os textos do painel visual do Story Scroll que permanecem invisíveis em reduced motion estão dentro de um bloco `aria-hidden`; os seis artigos equivalentes e essenciais continuam visíveis no fluxo.

## Resultado

O único pin mantém a largura atual da viewport em 18 transições consecutivas, sem overflow ou duplicação. ARIA proibido e os contrastes conhecidos foram corrigidos. Reduced motion ativo foi comprovado em quatro viewports, sem pin, loops ou reveals ocultos. Lighthouse 13.0.1 do build local atualizado registrou acessibilidade 100 em mobile e desktop; a comparação de Performance, Best Practices e SEO com PageSpeed público não é direta porque o ambiente local registrou o `favicon.ico` ausente, recebeu o fallback da SPA em `robots.txt` e teve instrumentação de desenvolvimento injetada antes do `meta charset`. A nova aferição pública depende de publicar o build corrigido.
