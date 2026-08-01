# Asset Library

## Status possíveis

- proposed;
- queued;
- generating;
- draft;
- review;
- approved;
- approved-for-integration;
- integrated;
- archived-reference;
- rejected.

## HERO-01 — Hero Video

- ferramenta: Seedance;
- status: queued;
- saída: MP4;
- proporção: 16:9;
- duração: 6–8 s;
- fps: 24 ou 30;
- objetivo: despertar do notebook e aproximação sutil;
- integração: Hero;
- prioridade: máxima;
- orçamento: 1 geração inicial + até 2 correções.

## HERO-01 — The Silence Plate

- ferramenta: Higgsfield;
- status: approved — Gate A;
- função: frame cinematográfico inicial da Hero, antes do despertar da tela;
- referência: imagem final primária de direção de arte fornecida pelo usuário;
- prompt: `creative/production/prompts/HERO-01/final.md`;
- saída prevista: `creative/outputs/images/HERO-01-v01.png`;
- proporção: 16:9;
- quantidade: 1;
- resolução preferida: 2K;
- integração: proibida antes do Quality Gate;
- limite: uma geração, sem variação ou retry automático;
- dependência: nenhuma; Gate A do `OP-007-CINEMATIC-ASSET-PACK.md`.
- modelo: GPT Image 2 (`gpt_image_2`), referência `image`, 16:9, 2K, high;
- custo estimado: 7 créditos;
- job: `a7f2ff30-3c9d-4e80-aecf-6ed4665530d4`.
- resultado: `creative/outputs/images/HERO-01-v01.png`, PNG, 4.641.778 bytes;
- saldo após geração: 202,73 créditos;
- Quality Gate: composição, realismo, contagem de objetos, tela limpa, safe areas, luz e mood aprovados;
- nota técnica: otimização e art direction de crop serão obrigatórias antes de integração;
- decisão: APPROVED; HERO-02 não autorizado nesta execução.

## HERO-PLATE-01 — Hero Ambient Plate

- ferramenta: Seedance 2.0;
- status: rejected — encerrado sem geração após congelamento da Hero CSS/DOM;
- referência única: `creative/outputs/images/HERO-02-v01.png`;
- prompt: `creative/production/prompts/HERO-PLATE/v01.md`;
- saída prevista: `creative/outputs/videos/HERO-PLATE-01-v01.mp4`;
- proporção: 16:9;
- duração: 6 s;
- resolução: 480p, maior opção compatível com o saldo confirmado no preflight;
- áudio: desativado;
- objetivo: placa cinematográfica quase estática atrás da Hero CSS/DOM;
- limite: 1 geração inicial, sem variações ou retry automático;
- integração: proibida antes do Quality Gate e aprovação explícita.
- resultado da submissão: `403 job_minimum_basic_plan_required`; nenhum vídeo gerado.
- decisão final: não integrar nem retomar; a Hero final não usa vídeo ou novos assets.

## HERO-02 — Hero Base Image

- ferramenta: Higgsfield;
- status: archived-reference;
- saída: WebP/PNG;
- proporção: 16:9;
- objetivo: fallback estático e referência visual;
- prioridade: máxima.
- base selecionada: `creative/outputs/images/HERO-02-v01.png`;
- HERO-02-v01: archived-reference;
- HERO-02-v02: rejected;
- condição: corrigir tela e pseudo-branding em camadas DOM/CSS durante testes de integração;
- integração fotográfica: rejected e removida do código de produção;
- Hero definitiva: CSS/DOM;
- motivo: maior estabilidade, acessibilidade, performance e controle responsivo;
- decisão: nenhuma nova geração de IA será usada para HERO-02, pois as ferramentas disponíveis não garantem preservação estrutural suficiente;
- fontes preservadas: v01 e v02 permanecem no repositório, sem sobrescrita ou exclusão.

## HERO-02 — The Awakening Plate

- ferramenta: Higgsfield;
- status: approved — Gate B;
- função: primeiro despertar visual da tela durante o scroll;
- referência primária: `creative/outputs/images/HERO-01-v01.png`;
- prompt: `creative/production/prompts/HERO-02/final.md`;
- saída prevista: `creative/outputs/images/HERO-02-AWAKENING-v01.png`;
- proporção: 16:9;
- quantidade: 1;
- resolução preferida: 2K;
- mudança permitida: iluminação azul extremamente sutil na tela e spill físico mínimo;
- integração: proibida antes do Quality Gate;
- limite: uma geração, sem variação ou retry automático.
- modelo: GPT Image 2 (`gpt_image_2`), 16:9, 2K, high;
- custo estimado: 7 créditos;
- job: `336193a9-bc78-4c56-ba58-9c267a33d787`.
- nomenclatura: sufixo `AWAKENING` preserva sem sobrescrita o HERO-02-v01 histórico.
- resultado: `creative/outputs/images/HERO-02-AWAKENING-v01.png`, PNG, 5.072.540 bytes;
- saldo após geração: 195,73 créditos;
- Quality Gate: continuidade integral aprovada; tela azul limpa e spill contido;
- decisão: APPROVED; HERO-03 não autorizado nesta execução.

## HERO-03 — Hero Transformed Image

- ferramenta: Higgsfield;
- status: proposed;
- objetivo: estado final da mesma cena;
- prioridade: alta;
- dependência: HERO-02 aprovado.

## HERO-03 — The Signal Plate

- ferramenta: Higgsfield;
- status: approved — Gate C;
- função: sinal azul mais legível e reflexão física durante a progressão do terminal;
- referência primária: `creative/outputs/images/HERO-02-AWAKENING-v01.png`;
- prompt: `creative/production/prompts/HERO-03/final.md`;
- saída prevista: `creative/outputs/images/HERO-03-SIGNAL-v01.png`;
- proporção: 16:9;
- quantidade: 1;
- resolução preferida: 2K;
- integração: proibida antes do Quality Gate;
- limite: uma geração, sem variação ou retry automático.
- modelo: GPT Image 2 (`gpt_image_2`), 16:9, 2K, high;
- custo estimado: 7 créditos;
- job: `ec1d8a6e-8c15-4484-8fa1-2ad08b0c939e`.
- resultado: `creative/outputs/images/HERO-03-SIGNAL-v01.png`, PNG, 5.167.727 bytes;
- saldo após geração: 188,73 créditos;
- Quality Gate: continuidade, tela limpa, progressão e reflexão física aprovadas;
- decisão: APPROVED; HERO-04 e HERO-05 serão resolvidos em CSS/GSAP e não serão gerados.

## HERO-FINAL-01 — Final Hero Workspace

- ferramenta: Higgsfield;
- modelo selecionado: GPT Image 2 (`gpt_image_2`);
- status: rejected — plan requirement;
- referência: imagem final de direção de arte anexada pelo usuário;
- prompt: `creative/production/prompts/HERO-FINAL/v01.md`;
- saída prevista: `creative/outputs/images/HERO-FINAL-01-v01.png`;
- proporção: 16:9;
- parâmetros: 1 saída, 2K, qualidade high;
- objetivo: placa fotorealista final do workspace com interface integralmente reservada ao DOM;
- limite: exatamente 1 geração, sem variação ou retry automático;
- integração: proibida nesta ordem;
- preflight: modelo compatível confirmado; custo estimado em 7 créditos; saldo de 9,73 sem unlimited disponível;
- referência Higgsfield: `a0c46096-4aa9-4067-929f-e142e6bc38b4`;
- resultado da submissão única: `Requires basic plan or higher.`;
- crédito: nenhum débito; saldo confirmado após a falha em 9,73;
- decisão: sem retry, variação, troca de modelo ou integração; `REVISION REQUIRED`.

## FX-01 — Screen Reflection

- ferramenta: Higgsfield;
- status: proposed;
- saída: PNG/WebP transparente;
- objetivo: reflexo discreto;
- prioridade: baixa;
- gerar somente se CSS não resolver.

## FX-02 — Ambient Texture

- ferramenta: Higgsfield ou local;
- status: proposed;
- objetivo: textura cinematográfica;
- prioridade: baixa.

## Regras de crédito

- gerar primeiro HERO-02;
- aprovar enquadramento;
- usar HERO-02 como referência para HERO-01;
- não gerar HERO-03 antes de aprovar HERO-02;
- não gerar FX antes de integrar Hero principal.

## Integração final do Hero Pack — 31/07/2026

- HERO-01 The Silence: `integrated`, eager/high;
- HERO-02 The Awakening: `integrated`, progressivo lazy/low;
- HERO-03 The Signal: `integrated`, progressivo lazy/low;
- derivados: AVIF qualidade 58 e WebP qualidade 84, larguras 2560/1920/1440/1024, em `creative/outputs/optimized/hero/`;
- masters PNG preservados e fora do carregamento de produção;
- HERO-04/HERO-05 resolvidos por CSS/GSAP, sem nova geração;
- decisão: `APPROVED FOR PRODUCTION`.
