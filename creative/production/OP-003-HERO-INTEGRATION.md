# OP-003 — Hero Integration

## Status

Blocked until HERO-01 or HERO-02 is approved.

## Responsável

Codex.

## Objetivo

Integrar o asset aprovado sem destruir a Hero atual.

## Regras

- preservar fallback em CSS/DOM;
- texto permanece no DOM;
- terminal permanece no DOM;
- cursor permanece no DOM;
- reduced motion usa estado estático;
- mobile pode usar imagem em vez de vídeo;
- preload apenas quando justificado;
- poster obrigatório para vídeo;
- sem autoplay com som;
- loop somente se imperceptível;
- dimensões explícitas;
- otimização antes do bundle.

## Validação

- desktop;
- tablet;
- mobile;
- reduced motion;
- carregamento lento;
- ausência de layout shift;
- build;
- acessibilidade.
