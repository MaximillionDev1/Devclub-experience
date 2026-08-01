# DevClub Creative Production Engine v1.0

## Objetivo

Centralizar direção criativa, produção de assets, aprovação visual e integração com Codex, Higgsfield e Seedance.

Esta pasta não substitui:

- `AGENTS.md`
- `PROJECT_BRAIN.md`
- `TASKS.md`
- `docs/CURRENT_STATE.md`

Ela complementa esses arquivos com regras exclusivas de produção visual.

## Ordem de leitura

Para decisões gerais:

1. `00-MANIFEST.md`
2. `01-BRAND-DNA.md`
3. `02-STORY.md`
4. `03-VISUAL-DIRECTION.md`

Para gerar um asset:

1. ordem de produção em `production/`;
2. documentos citados na ordem;
3. `10-PROMPT-RULES.md`;
4. `11-NEGATIVE-PROMPTS.md`;
5. `QUALITY-GATE.md`;
6. `ASSET-DEPENDENCY-TREE.md`.

## Regras

- Não gerar asset sem ordem de produção.
- Não gastar crédito apenas para explorar.
- Não sobrescrever versões aprovadas.
- Registrar cada geração em `09-ASSET-LIBRARY.md`.
- Assets aprovados vão para `outputs/approved/`.
- Assets de teste ficam fora do bundle final.
- Texto essencial permanece no DOM.
- Logo é referência de identidade, não elemento obrigatório da Hero.

## Fluxo

```text
Necessidade
→ Ordem de Produção
→ Prompt versionado
→ Geração
→ Quality Gate
→ Aprovação
→ Otimização
→ Integração
→ Registro
```
