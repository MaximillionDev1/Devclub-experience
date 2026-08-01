# OP-005 — Hero Ambient Plate

## Asset

HERO-PLATE-01.

## Status

Closed — no generation. Final Hero direction excludes video and new assets.

## Ferramenta

Seedance 2.0 via Higgsfield MCP.

## Objetivo

Animar `HERO-02-v01.png` como placa atmosférica quase estática, preservando composição, câmera e objetos, para possível uso atrás da Hero CSS/DOM.

## Referência única

`creative/outputs/images/HERO-02-v01.png`.

## Parâmetros confirmados

- image-to-video;
- uma saída;
- 16:9;
- 6 segundos;
- 480p;
- modo `fast`;
- bitrate `high`;
- gênero `drama`;
- áudio desativado;
- câmera bloqueada por instrução no prompt;
- sem parâmetro nativo de loop ou frame rate.

480p é a maior resolução executável no saldo disponível: o preflight estimou 9 créditos, contra 36 créditos para 720p/8 s e saldo de 9,73 créditos.

## Saída

`creative/outputs/videos/HERO-PLATE-01-v01.mp4`.

## Limite

Uma geração inicial. Sem variações, retry automático ou segunda geração sem aprovação explícita.

## Tentativa de submissão

A única chamada autorizada foi recusada antes da criação do job com `403 job_minimum_basic_plan_required`. Nenhum vídeo foi gerado e nenhuma repetição foi executada.

A produção foi posteriormente encerrada pela ADR-015: a Hero final é integralmente CSS/DOM e não usará placa de vídeo.

## Quality Gate

Aplicar `creative/QUALITY-GATE.md` e avaliar câmera, preservação estrutural, ausência de pessoas/objetos novos/texto, movimento da luz, flicker, loop, paleta e competição com o foreground DOM.

## Integração

Proibida nesta ordem. O resultado permanece em revisão até decisão explícita.
