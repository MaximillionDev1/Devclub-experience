# Integração dos plates cinematográficos da Hero

## Objetivo

Integrar HERO-01, HERO-02 e HERO-03 como ambiente cinematográfico decorativo da Hero, mantendo toda interface e narrativa no DOM, uma timeline GSAP coordenada, fallback CSS/DOM, reduced motion completo, Story Scroll intacto e transferência de imagem adequada à produção.

## Estado atual

- três PNGs aprovados em 2688×1520, somando 14.882.045 bytes;
- Hero atual integralmente CSS/DOM, com terminal acessível e uma timeline ScrollTrigger;
- código já possui fallback responsivo, reduced motion, push-in e passagem ao Story Scroll;
- os PNGs não estão no grafo de imports da aplicação;
- não há `magick`, `cwebp`, `avifenc` ou `ffmpeg` disponível no PATH;
- worktree contém alterações documentais e de Hero desta mesma evolução, além de arquivos não relacionados que serão preservados.

## Escopo

Entra:

- variantes WebP e, se a ferramenta local confiável suportar, AVIF;
- wrapper absoluto compartilhado para os três plates;
- header/nav, guia lateral, headline/subheadline e terminal no DOM;
- crossfades, push-in e passagem em uma timeline coordenada;
- carregamento prioritário apenas de HERO-01;
- variantes desktop/tablet e fallback CSS/DOM no mobile se o crop não passar;
- reduced motion estático;
- validação técnica, visual, acessível e documental.

Não entra:

- novas gerações;
- novas dependências;
- novas seções institucionais;
- commit, push ou deploy;
- remoção dos PNGs originais ou do fallback antes do gate final.

## Arquivos relacionados

- `src/components/hero/HeroScene.tsx`;
- `src/components/hero/hero-transcript.ts`;
- `src/index.css`;
- `creative/outputs/images/HERO-01-v01.png`;
- `creative/outputs/images/HERO-02-AWAKENING-v01.png`;
- `creative/outputs/images/HERO-03-SIGNAL-v01.png`;
- `creative/outputs/optimized/hero/` (novo);
- `TASKS.md`;
- `docs/CURRENT_STATE.md`;
- `docs/DECISIONS.md`;
- `docs/ARCHITECTURE.md`;
- `docs/ANIMATIONS.md`;
- `creative/09-ASSET-LIBRARY.md`.

## Decisões

1. Todos os plates compartilharão um único wrapper e as mesmas regras de `object-fit`/`object-position`; somente opacidade será animada entre eles.
2. O transform cinematográfico pertencerá ao wrapper compartilhado, nunca a imagens individuais.
3. O terminal será alinhado por coordenadas percentuais dentro do mesmo wrapper de aspecto da imagem.
4. Desktop e tablet usarão plates se o gate visual passar. Mobile e paisagem baixa poderão manter o fallback CSS/DOM se o crop ou o terminal ficarem frágeis.
5. Reduced motion mostrará um único estado representativo, sem pin ou crossfade animado.
6. HERO-01 será eager/high; HERO-02 e HERO-03 usarão lazy/low sem bloquear o primeiro paint.
7. Os PNGs originais permanecerão apenas como masters de produção.

## Etapas

1. Produzir e inspecionar variantes otimizadas sem dependência nova.
2. Implementar estrutura DOM editorial e wrapper compartilhado.
3. Calibrar terminal e timeline única com crossfades.
4. Calibrar desktop, tablet, mobile e baixa altura.
5. Validar fallback, reduced motion, acessibilidade, rede e performance.
6. Atualizar documentação e decisão final.

## Validação

Comandos:

```text
npm run lint
npm run typecheck
npm run build
git diff --check
```

Matriz visual: 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600. Verificar console, requests, bytes, LCP/CLS quando expostos, scroll reverso, refresh intermediário, resize, teclado, foco e reduced motion quando possível.

## Progresso

- [x] estado e escopo registrados;
- [x] variantes otimizadas produzidas e aprovadas;
- [x] estrutura e interface DOM implementadas;
- [x] crossfades e terminal alinhados;
- [x] responsividade e reduced motion calibrados;
- [x] gates técnicos aprovados;
- [x] matriz visual aprovada;
- [x] documentação final atualizada.

## Descobertas

- Os três masters somam 14.882.045 bytes e não podem ser entregues diretamente.
- Nenhum encoder de imagem dedicado está disponível no PATH; será necessário usar apenas uma capacidade local já existente e verificar visualmente o resultado.

## Resultado

APPROVED FOR PRODUCTION. Os três plates foram integrados com derivados AVIF/WebP, interface no DOM, crossfades reversíveis, fallback CSS/DOM, reduced motion estático e validação técnica completa. A instância disponível não permite emular reduced motion nem expôs métricas LCP/CLS; ambos permanecem como validações adicionais em dispositivo real, sem bloquear este gate.
