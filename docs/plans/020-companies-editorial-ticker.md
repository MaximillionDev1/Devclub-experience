# ExecPlan 020 — Companies Editorial Ticker

## Objetivo

Dar identidade visual própria à seção Empresas por meio de um horizonte editorial tipográfico, preservando narrativa, conteúdo institucional, acessibilidade, performance e o restante da aplicação.

## Estado atual

A seção usa oito empresas tipadas e um detalhe compartilhado acessível. No desktop, as marcas ocupam um campo radial com núcleo, órbitas e linhas; essa linguagem repete a composição já usada em Formações. Mobile troca o campo por uma grade. Uma timeline GSAP revela texto, linhas e marcas sem pin.

## Escopo

Entra:

- substituir o campo radial por uma faixa editorial horizontal;
- manter seleção por clique, foco e hover com detalhe compartilhado;
- usar loop CSS lento somente no desktop com movimento permitido;
- oferecer lista horizontal nativa no mobile e estado estático em reduced motion;
- remover seletores radiais obsoletos;
- atualizar documentação relacionada.

Não entra:

- qualquer outra seção, copy institucional, lista ou setor de empresas;
- novas dependências, assets, logos ou requests remotos;
- mudanças de tipografia, padding da seção ou direção de luz global.

## Arquivos relacionados

- `src/components/companies/CompaniesSection.tsx`;
- `src/index.css`;
- `docs/CURRENT_STATE.md`;
- `docs/DECISIONS.md`;
- `docs/ARCHITECTURE.md`;
- `docs/ANIMATIONS.md`;
- `TASKS.md`;
- `docs/plans/020-companies-editorial-ticker.md`.

## Decisões

- CSS anima somente `transform` e completa um ciclo em 76 segundos; GSAP permanece responsável apenas pelo reveal por scroll.
- O conjunto primário contém os oito botões reais. A segunda sequência é decorativa, usa texto simples e fica fora da árvore acessível.
- Interação pausa visualmente a faixa em hover/foco para estabilizar a escolha; o detalhe compartilhado continua controlado por `activeId`.
- Abaixo de 1024 px e em reduced motion não há loop: o conjunto real vira uma lista horizontal com scroll nativo.

## Etapas

1. Migrar a estrutura do campo radial para ticker e detalhe compartilhado.
2. Substituir integralmente o CSS radial por composição horizontal responsiva.
3. Revisar semântica, foco, reduced motion e ausência de seletores mortos.
4. Validar matriz visual, interação, console e gates técnicos.
5. Atualizar documentação e registrar o resultado.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- viewports: 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- teclado, seleção repetida, loop, reduced motion, overflow, anchor e console.

## Progresso

- [x] direção e estratégia definidas;
- [x] implementação React/CSS;
- [x] validação técnica e visual;
- [x] documentação final.

## Descobertas

- Os IDs legados alimentavam apenas posicionamento e geometria radial; o novo ticker não precisa desses seletores, mas os IDs permanecem no contrato tipado.
- O loop contínuo exige uma segunda sequência visual, que não pode duplicar botões ou anúncios para tecnologias assistivas.

## Resultado

O campo radial foi integralmente substituído por um horizonte editorial tipográfico. Desktop usa ticker CSS de 76 segundos com duas sequências geometricamente idênticas; somente a primeira contém oito botões acessíveis. Mobile usa scroll horizontal nativo e reduced motion remove autoplay e cópia visual. A matriz de dez viewports não apresentou overflow após reload individual, a âncora `#empresas` chegou ao topo exato, seleção e teclado atualizaram o detalhe compartilhado e nenhum request remoto foi adicionado. Lint, typecheck, build e `git diff --check` foram aprovados.
