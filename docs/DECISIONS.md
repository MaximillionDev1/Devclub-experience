# DECISIONS.md

## ADR-001 — Mesa e notebook como protagonistas visuais

**Status:** aceita.

**Decisão:** não mostrar uma pessoa. Mostrar apenas os objetos e vestígios de presença.

**Motivo:** permite identificação ampla e evita uma narrativa presa a um personagem específico.

## ADR-002 — DevClub como guia

**Status:** aceita.

**Decisão:** o visitante é o protagonista; o DevClub oferece direção, mentoria e comunidade.

## ADR-003 — Uma única experiência cinematográfica principal

**Status:** aceita.

**Decisão:** concentrar o maior impacto na Hero e na travessia, usando o restante da landing de forma editorial e leve.

**Motivo:** preservar performance, ritmo e prazo.

## ADR-004 — Codex como agente principal

**Status:** aceita.

**Decisão:** usar Codex no VS Code e/ou aplicativo, guiado por `AGENTS.md`, skill local, ExecPlans e documentação viva.

## ADR-005 — Estado final estático e movimento progressivo

**Status:** aceita.

**Contexto:** conteúdo essencial da Hero começava oculto e dependia da execução da timeline GSAP.

**Decisão:** manter o estado final legível no DOM/CSS e permitir que o GSAP aplique estados iniciais apenas sob `prefers-reduced-motion: no-preference`. Em reduced motion, a timeline e o cursor intermitente não são criados.

**Trade-offs:** pode existir um instante do estado final antes de o JavaScript preparar a animação em conexões lentas, em troca de um fallback robusto sem JavaScript.

**Arquivos relacionados:** `src/components/hero/HeroScene.tsx`, `src/index.css`.

## ADR-006 — Avaliação do Lenis adiada para a travessia

**Status:** substituída pela ADR-008.

**Contexto:** Lenis está instalado, mas nenhuma parte do código-fonte depende dele e a travessia ainda não existe.

**Decisão:** não implementar nem remover Lenis na Sprint 1. Reavaliar sua necessidade na Sprint 2, comparando-o ao scroll nativo quanto a estabilidade, teclado, mobile e reduced motion.

**Alternativas:** remover agora ou adotar suavização antes da definição da travessia.

**Trade-offs:** a dependência permanece temporariamente instalada sem uso, evitando uma decisão prematura.

**Arquivos relacionados:** `package.json`, `docs/plans/002-estabilizacao-hero.md`.

## ADR-007 — Travessia híbrida entre Hero e destino

**Status:** aceita.

**Contexto:** a travessia precisava aproximar o notebook e expandir visualmente sua tela sem impor escala extrema, medições geométricas frágeis ou uma timeline desktop comprimida no mobile.

**Decisão:** combinar zoom moderado do notebook em um wrapper isolado com pequena expansão da tela e um overlay que assume a cena antes da seção provisória. Usar variantes próprias para desktop, tablet e mobile.

**Alternativas:** escalar toda a cena até preencher a viewport; expandir uma máscara calculada a partir dos limites exatos da tela.

**Trade-offs:** a transição não simula uma máscara pixel-perfect saindo da moldura, mas reduz acoplamento, custo de manutenção e risco em resize/orientação.

**Arquivos relacionados:** `src/components/hero/HeroScene.tsx`, `src/components/journey/JourneyPlaceholder.tsx`, `docs/plans/003-travessia-notebook.md`.

## ADR-008 — Scroll nativo e remoção do Lenis

**Status:** aceita.

**Contexto:** Lenis estava instalado sem uso. A Sprint 2 introduziu apenas uma travessia curta controlada por ScrollTrigger.

**Decisão:** manter scroll nativo e remover Lenis do manifesto e lockfile. Não há ganho perceptível ou requisito técnico que justifique sincronização, listeners e política adicional de acessibilidade.

**Alternativas:** integrar Lenis ao ticker do GSAP e ao `ScrollTrigger.update()`.

**Trade-offs:** não há suavização artificial; em troca, preservam-se comportamento esperado, teclado, mobile, reduced motion e menor superfície de falha.

**Arquivos relacionados:** `package.json`, `package-lock.json`, `docs/plans/003-travessia-notebook.md`.

## ADR-009 — Story Scroll editorial híbrido

**Status:** aceita.

**Contexto:** seis etapas precisavam produzir progressão visual sem repetir cards, prolongar pinning ou comprimir uma experiência desktop no mobile.

**Decisão:** manter os textos em seções editoriais sequenciais e adicionar, somente no desktop, um painel tipográfico sticky controlado por uma única timeline/ScrollTrigger sem pin. Tablet, mobile e reduced motion usam o conteúdo em fluxo natural.

**Alternativas:** painel fixo com pin durante toda a jornada; seis seções sequenciais sem painel ou progressão visual compartilhada.

**Trade-offs:** o painel não aparece abaixo de 1024 px, reduzindo impacto visual nessas larguras em troca de leitura direta, menor duração e ausência de sobreposição.

**Arquivos relacionados:** `src/components/journey/JourneySection.tsx`, `src/components/journey/JourneyStep.tsx`, `src/components/journey/journey-data.ts`, `docs/plans/004-story-scroll.md`.

## ADR-010 — Registro GSAP centralizado

**Status:** aceita.

**Contexto:** Hero e Story Scroll utilizam a mesma instância de GSAP e ScrollTrigger.

**Decisão:** registrar `useGSAP` e ScrollTrigger uma única vez em `src/lib/gsap.ts` e importar essa configuração nos componentes animados.

**Trade-offs:** cria um módulo compartilhado pequeno, mas elimina registro distribuído e dependência implícita da ordem de montagem.

**Arquivos relacionados:** `src/lib/gsap.ts`, `src/components/hero/HeroScene.tsx`, `src/components/journey/JourneySection.tsx`.

## Modelo

## ADR-XXX — Título

**Status:** proposta | aceita | substituída.

**Contexto:**

**Decisão:**

**Alternativas:**

**Trade-offs:**

**Arquivos relacionados:**
