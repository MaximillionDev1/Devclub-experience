# Tutores

## Objetivo

Representar, depois de Empresas, a camada humana que oferece contexto, revisão e direção técnica durante a jornada, sem transformar tutores em celebridades ou prometer acompanhamento individual ilimitado.

## Estado atual

- O fluxo termina em Empresas seguida por uma continuação neutra com `id="tutores"`.
- A navegação da Hero já aponta Tutores para `#tutores`.
- React 19, TypeScript 6, GSAP e `@gsap/react` já atendem à implementação; nenhuma dependência é necessária.
- Não existem dados reais confirmados de tutores disponíveis para esta etapa.

## Escopo

Entra:

- seção semântica `id="tutores"` após Empresas;
- cinco perfis fictícios tipados e integralmente consumidos;
- seletor por botões e um único perfil compartilhado;
- monogramas, linhas e anotações construídos em DOM/CSS;
- composição editorial assimétrica desktop e seletor horizontal mobile;
- uma progressão de entrada desktop sem pin ou loop;
- espaço neutro após Tutores para o futuro CTA;
- disclosure documental dos perfis conceituais.

Não entra:

- retratos, avatares remotos ou rostos gerados;
- nomes de profissionais reais ou alegações de vínculo;
- biografias longas, métricas sociais ou página de equipe;
- disponibilidade 24/7, garantia de resposta ou mentoria ilimitada;
- CTA final, nova dependência ou alteração da Hero.

## Arquivos relacionados

- criar `src/components/tutors/tutor-data.ts`;
- criar `src/components/tutors/TutorsSection.tsx`;
- alterar `src/App.tsx` e `src/index.css`;
- atualizar `TASKS.md`, `docs/CURRENT_STATE.md`, `docs/DECISIONS.md`, `docs/ARCHITECTURE.md`, `docs/ANIMATIONS.md`, `docs/CONTENT-SOURCES.md` e este plano.

## Decisões

- Usar botões com `aria-pressed`, evitando a complexidade desnecessária de tabs.
- Foco, hover e clique selecionam o perfil; Enter e Espaço permanecem nativos do botão.
- Um único painel consome os dados ativos e evita conteúdo duplicado.
- Desktop usa uma sequência vertical de vozes e um painel editorial com motivo de revisão; mobile usa lista horizontal e perfil abaixo.
- Uma timeline desktop revela copy, linha de conversa e painel, sem pin. Mobile e reduced motion mostram o estado final.

## Etapas

1. Criar dados tipados e seção semântica.
2. Integrar no fluxo e preservar espaço para o CTA.
3. Implementar composição, seleção e comportamento mobile.
4. Implementar entrada com cleanup e reduced motion.
5. Atualizar documentação e validar.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- dez viewports solicitados;
- âncora, teclado, seleção repetida, reverse scroll, resize, orientação e overflow;
- ausência de recursos remotos e regressões nas seções anteriores.

## Progresso

- [x] pedido e estado atual inspecionados;
- [x] arquitetura e interação definidas;
- [x] seção e dados implementados;
- [x] animação e fallbacks implementados;
- [x] documentação atualizada;
- [x] validações técnicas executadas;
- [x] matriz visual e interativa executada.

## Descobertas

- O placeholder atual pode ser substituído diretamente, preservando uma continuação neutra sem âncora para o futuro CTA.
- Botões pressionáveis atendem seleção e teclado sem impor semântica de tablist.
- O primeiro QA mobile revelou expansão de min-content causada pelo seletor horizontal; definir `min-width: 0` nos dois filhos do grid preserva a rolagem interna e impede recorte do perfil.
- A matriz final confirmou cinco controles, targets de 88–92 px, conteúdo ajustado e zero overflow nas dez dimensões.
- `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` concluíram com código zero; o último reportou apenas avisos de normalização LF para CRLF.
- O console da aplicação permaneceu sem erro. Mensagens `chrome-extension://.../pinComponent.js` pertencem a uma extensão instalada no navegador de teste e não ao bundle local.
- O navegador não expõe emulação de `prefers-reduced-motion`; o fallback foi revisado no código, mas o teste visual com a preferência efetivamente ativa permanece pendente.

## Resultado

Tutores substituiu o placeholder depois de Empresas e preservou uma continuação neutra para o CTA. Cinco vozes fictícias alimentam um perfil compartilhado em uma composição editorial sem retratos. Âncora, seleção repetida, teclado, progressão reversível, mobile e dez viewports foram aprovados sem overflow, recurso remoto ou novo pin.
