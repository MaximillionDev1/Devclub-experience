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

**Status:** aceita.

**Contexto:** Lenis está instalado, mas nenhuma parte do código-fonte depende dele e a travessia ainda não existe.

**Decisão:** não implementar nem remover Lenis na Sprint 1. Reavaliar sua necessidade na Sprint 2, comparando-o ao scroll nativo quanto a estabilidade, teclado, mobile e reduced motion.

**Alternativas:** remover agora ou adotar suavização antes da definição da travessia.

**Trade-offs:** a dependência permanece temporariamente instalada sem uso, evitando uma decisão prematura.

**Arquivos relacionados:** `package.json`, `docs/plans/002-estabilizacao-hero.md`.

## Modelo

## ADR-XXX — Título

**Status:** proposta | aceita | substituída.

**Contexto:**

**Decisão:**

**Alternativas:**

**Trade-offs:**

**Arquivos relacionados:**
