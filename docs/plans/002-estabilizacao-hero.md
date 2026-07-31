# Estabilização da base e da Hero

## Objetivo

Garantir que a Hero atual permaneça legível, acessível e estável em desktop, tablet, mobile, telas baixas e orientação horizontal, inclusive com JavaScript indisponível ou com `prefers-reduced-motion: reduce`.

## Estado atual

- A aplicação renderiza apenas `HeroScene`.
- Terminal, luz, cursor e mensagem inferior começam ocultos no DOM e dependem da timeline GSAP para aparecer.
- A timeline e o cursor infinito executam sem consultar a preferência de movimento.
- Lenis está instalado, mas não é importado nem utilizado.
- O HTML ainda contém idioma, título e favicon provisórios.
- `App.css`, os SVGs de React/Vite, `hero.png` e `public/icons.svg` não possuem referências no projeto.

## Escopo

Entra: reduced motion, fallback estático, responsividade da Hero, metadados, remoção de resíduos confirmados, script de typecheck e documentação da Sprint 1.

Não entra: ScrollTrigger, travessia, Story Scroll, novas seções, assets gerados, Lenis e animações adicionais.

## Arquivos relacionados

- `src/components/hero/HeroScene.tsx`;
- `src/index.css`;
- `index.html` e `package.json`;
- `TASKS.md` e documentação relacionada;
- resíduos do template em `src/App.css`, `src/assets/` e `public/`;
- este plano.

## Decisões

1. O estado final legível será o estado base do DOM; o GSAP aplicará estados iniciais somente quando animações forem permitidas.
2. `gsap.matchMedia()` limitará a timeline e o cursor intermitente a `prefers-reduced-motion: no-preference`, mantendo cleanup dentro do contexto de `useGSAP`.
3. A marcação da Hero não será duplicada.
4. A composição responsiva será ajustada por largura, altura e orientação.
5. A avaliação do Lenis será adiada para a Sprint 2, sem remover a dependência nesta etapa.

## Etapas

1. Registrar o plano e estabilizar o estado base e a política de movimento.
2. Adaptar a composição responsiva e os metadados.
3. Remover resíduos comprovadamente órfãos e adicionar o typecheck.
4. Executar revisão estática, lint, typecheck e build.
5. Atualizar documentação com o resultado real.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- revisão estática de imports, variáveis, tipos, cleanup, estado base, reduced motion e overflow;
- revisão visual em navegador somente se efetivamente executada.

## Progresso

- [x] fontes de verdade, skill e referências relacionadas lidas;
- [x] código, configuração, assets e plano anterior inspecionados;
- [x] fallback estático e reduced motion implementados;
- [x] responsividade e metadados ajustados;
- [x] resíduos removidos e typecheck configurado;
- [x] validações executadas;
- [x] documentação concluída.

## Descobertas

- A configuração TypeScript usa project references e um `tsconfig.json` de solução sem arquivos próprios. `tsc --noEmit` termina com sucesso sem percorrer os projetos referenciados; o script precisa usar `tsc -b --noEmit` para validar a configuração real.
- O favicon atual também é resíduo visual do template Vite e não representa uma identidade confirmada do projeto.
- A busca estática final encontrou Lenis somente em `package.json`; não há import ou dependência no código-fonte.
- A revisão estática não encontrou `any`, `opacity-0`, ScrollTrigger, imports/variáveis sem uso, logs ou TODOs no código-fonte.
- O repositório Git está saudável; `git diff --check` passou e o status mostrou somente as alterações desta Sprint.

## Resultado

Sprint 1 implementada dentro do escopo. O estado final da Hero está no DOM/CSS; quando movimento é permitido, o GSAP prepara e executa a entrada, com timeline e cursor infinito revertidos pelo cleanup. Em reduced motion, nenhum dos dois é criado. Foram adicionados tratamentos de largura, altura e orientação, metadados em português e typecheck compatível com project references. Resíduos confirmados do template foram removidos e Lenis foi mantido sem uso para reavaliação na Sprint 2.

`npm run lint`, `npm run typecheck` e `npm run build` passaram. `git diff --check` também passou. Não foi executada validação visual em navegador nem perfil de performance; essas são as limitações conhecidas antes de considerar a validação de performance da Sprint concluída.
