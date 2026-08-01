# Integração do asset HERO-02-v01

## Objetivo

Integrar experimentalmente `creative/outputs/images/HERO-02-v01.png` à Hero sem perder o terminal no DOM, as timelines de entrada e travessia, o fallback estático, acessibilidade, responsividade, reduced motion ou estabilidade de layout. A análise e a implementação experimental foram executadas; a promoção para produção foi rejeitada pelos gates registrados no resultado.

## Estado atual

- `HeroScene.tsx` desenha ambiente, notebook, tela, terminal, cursor, mesa e objetos em HTML/CSS.
- A entrada anima `data-scene`, `data-desk`, `data-notebook`, `data-screen`, `data-light`, `data-terminal`, `data-cursor` e `data-scroll-hint` somente quando movimento é permitido.
- A travessia transforma `data-crossing-notebook`, amplia discretamente `data-screen` e revela `data-portal`.
- Reduced motion mantém a cena final legível e não cria timelines.
- HERO-02-v01 é PNG 2048 × 1152, 16:9, 2.688.178 bytes e está approved-for-integration.
- HERO-02-v02 é PNG 2048 × 1152, está rejected e não pode ser integrada nem usada como referência.
- A v01 preserva mesa, laptop, caneca, fones, journal e mouse. O bitmap contém pequeno pseudo-branding no bezel e uma tela azul que não pode substituir a tela interativa no DOM.
- Nenhuma integração, conversão ou otimização foi executada nesta análise.

## Escopo

Entra:

- comparar background full-bleed, camada absoluta e frame cinematográfico;
- definir comportamento responsivo por viewport solicitada;
- planejar tela DOM, máscara do bezel, carregamento e formatos responsivos;
- preservar a implementação atual como fallback;
- definir arquivos, riscos e validações da futura implementação.

Não entra:

- alterar React, CSS ou GSAP;
- converter PNG, criar variantes ou gerar novos assets;
- integrar HERO-02-v02;
- redesenhar teclado;
- executar nova geração de IA;
- commit ou push.

## Arquivos relacionados

Existentes:

- `creative/outputs/images/HERO-02-v01.png`;
- `creative/outputs/images/HERO-02-v02.png`;
- `src/components/hero/HeroScene.tsx`;
- `src/index.css`;
- `src/lib/gsap.ts`;
- `docs/ANIMATIONS.md`;
- `docs/ASSET_PIPELINE.md`.

Previstos para modificação na implementação:

- `src/components/hero/HeroScene.tsx`;
- `src/index.css`;
- possivelmente `src/assets/hero/` ou `public/assets/hero/`, conforme o mecanismo de importação escolhido;
- `TASKS.md`;
- `docs/CURRENT_STATE.md`;
- `docs/DECISIONS.md`;
- este ExecPlan.

Previstos para criação somente após autorização de implementação/otimização:

- variantes AVIF/WebP de 1024, 1440 e 2048 px de largura;
- nenhum derivado de HERO-02-v02.

## Decisões

### Estratégia recomendada — B: camada de mídia absoluta

Renderizar HERO-02-v01 em `<picture>/<img>` decorativo, absoluto e com dimensões intrínsecas. Imagem, máscara do bezel e tela DOM devem compartilhar um wrapper responsivo e as mesmas transformações GSAP.

Motivos:

- permite `srcset`, `sizes`, AVIF/WebP, `fetchPriority`, `decoding` e dimensões explícitas;
- mantém a mídia fora da árvore semântica por `alt=""` e `aria-hidden="true"`;
- oferece `object-fit` e `object-position` próprios por breakpoint;
- permite calibrar máscara e tela em percentuais relativos ao bitmap;
- preserva o terminal, cursor e mensagem como DOM acessível;
- permite aplicar a travessia ao wrapper completo, evitando deriva entre fotografia e overlay;
- mantém o fallback CSS/DOM existente em viewports onde o recorte do bitmap não é viável.

Configuração inicial recomendada:

- ativar o bitmap somente em `min-width: 1024px`;
- 1366 × 768 e desktop 16:9: preencher a viewport com recorte mínimo;
- 1440 × 900: `cover` com pequeno recorte lateral controlado e posição ligeiramente à esquerda do centro geométrico para preservar o laptop;
- 1024 × 768: ajustar pela largura/`contain` vertical ancorado ao fundo, completando o espaço restante com o fundo atual, pois `cover` cortaria a lateral esquerda do laptop;
- 1280 × 600: `cover` ancorado ao centro inferior, com recorte vertical controlado;
- abaixo de 1024 px: não carregar/renderizar a fotografia na primeira implementação; manter notebook, mesa, terminal e objetos atuais em CSS/DOM.

### Alternativa rejeitada — A: background full-bleed

- `background-image` não fornece dimensões intrínsecas nem descoberta/priorização tão explícita quanto `<img>`;
- a tela DOM e a máscara dependeriam de duplicar cálculos de `background-size` e `background-position`;
- `cover` corta o laptop em proporções 4:3 e retrato;
- art direction, `srcset`, formatos e inspeção do LCP ficam menos diretos;
- o fundo seria decorativo e acessível, mas o ganho não compensa a perda de alinhamento.

### Alternativa rejeitada — C: frame cinematográfico

- preserva o bitmap completo e simplifica o recorte;
- reduz, porém, a escala e o impacto do laptop, principalmente em 1024 × 768;
- cria uma moldura dentro da Hero que rompe a continuidade da mesa com a viewport;
- aproxima a composição de um card ou painel, contrariando a experiência imersiva;
- permanece opção de contingência se a calibração absoluta não for estável, não a escolha inicial.

## Análise responsiva

Os valores abaixo são decisões propostas a partir da geometria 16:9 do arquivo e da implementação atual. Não são validações visuais executadas, pois a integração ainda não existe.

| Viewport | Escala/posição proposta | Laptop e objetos | Tela DOM e texto | Decisão inicial |
| --- | --- | --- | --- | --- |
| 1440 × 900 | `cover`, imagem ≈1600 × 900, ancorada ao centro inferior com leve ajuste horizontal para a esquerda | Pequeno recorte lateral; laptop integral e dominante; caneca exige checagem na borda esquerda | Alinhamento viável por coordenadas percentuais; mensagem inferior permanece fora da mídia | Usar imagem |
| 1366 × 768 | Encaixe praticamente 16:9, 1366 × 768, centro inferior | Cena quase integral; melhor referência para calibração | Melhor caso para calibrar máscara, tela e terminal | Usar imagem |
| 1024 × 768 | Ajustar pela largura, imagem ≈1024 × 576, centro inferior; não usar `cover` | Laptop e objetos preservados; faixa superior preenchida pelo fundo atual | Viável, mas requer conjunto próprio de coordenadas e fonte responsiva | Usar imagem com regra 4:3 |
| 768 × 1024 | Para preservar a cena, a imagem ficaria ≈768 × 432 e o laptop perderia protagonismo; `cover` cortaria sua lateral esquerda | Composição inadequada para retrato | Tela pequena e alinhamento sensível | Usar fallback CSS/DOM |
| 430 × 932 | `cover` destruiria a composição; `contain` produziria laptop pequeno | Caneca/laptop ou objetos seriam cortados conforme a posição | Terminal ficaria pequeno demais para a tela fotográfica | Usar fallback CSS/DOM |
| 390 × 844 | Mesmo conflito do viewport 430 px | Preservação simultânea do laptop e objetos inviável | Overlay não sustentaria legibilidade confortável | Usar fallback CSS/DOM |
| 360 × 640 | Altura menor não resolve a baixa largura útil do bitmap | Recorte excessivo ou notebook pequeno | Tela DOM fotográfica inviável | Usar fallback CSS/DOM |
| 844 × 390 | `cover` preservaria o laptop, mas a tela renderizada ficaria menor que o notebook CSS atual e o recorte vertical reduziria tolerância | Objetos poderiam permanecer, porém com pouco espaço para mensagem | Alinhamento possível, mas legibilidade inferior ao fallback já validado | Usar fallback CSS/DOM |
| 1280 × 600 | `cover`, centro inferior, imagem ≈1280 × 720 com recorte vertical distribuído/ajustado | Laptop preservado; confirmar mesa e borda inferior | Alinhamento viável; reduzir terminal e preservar mensagem | Usar imagem com regra de baixa altura |

### Espaço seguro para texto

- O conteúdo essencial continua no DOM.
- O terminal ocupa somente a área perspectivada da tela.
- A mensagem “Uma decisão muda tudo” continua fixada na região inferior da Hero e deve manter contraste por overlay/vinheta.
- Não adicionar headline sobre a parede da fotografia nesta etapa; a área superior serve ao silêncio visual e não precisa receber texto.
- Em 1024 × 768, a faixa superior criada pelo ajuste por largura pode receber apenas luz ambiente, nunca conteúdo essencial dependente do asset.

## Plano da tela DOM

1. Criar um wrapper de mídia com `aspect-ratio: 16 / 9` e coordenadas relativas estáveis.
2. Renderizar a fotografia como `<picture>/<img>` dentro desse wrapper.
3. Posicionar uma camada `data-screen` sobre os quatro limites visuais do display usando percentuais relativos ao bitmap e `clip-path: polygon(...)`.
4. Manter fundo midnight blue, glow, terminal e cursor dentro dessa camada; o bitmap azul fica completamente coberto.
5. Aplicar uma transformação perspectiva calibrada ao terminal, sem rasterizar texto e sem gerar labels dentro da imagem.
6. Vincular fotografia, máscara e tela ao mesmo `data-crossing-notebook` ou a um novo wrapper de mídia único, para que entrada e travessia não desalinhem as camadas.
7. Preservar os seletores e responsabilidades atuais de `data-screen`, `data-terminal` e `data-cursor`, adaptando somente seus contêineres.
8. Em reduced motion, renderizar o estado final estático sem criar timeline; tela, terminal e mensagem continuam legíveis.
9. Se a calibração não sobreviver a resize e às três regras desktop, abortar a camada fotográfica e manter o fallback existente.

## Plano para mascarar o pseudo-branding

- Adicionar uma pequena camada decorativa posicionada em percentuais sobre o centro do bezel inferior.
- Usar gradiente/material grafite com bordas suaves, sem texto, blur pesado ou alteração da espessura visual do bezel.
- Manter a máscara dentro do mesmo wrapper da fotografia e da tela para herdar escala, posição e transformações.
- Validar em 100%, 125% e 200% de zoom e durante toda a travessia.
- Não alterar o PNG original e não tentar redesenhar teclado ou chassi.

## Plano de performance

- Preservar o PNG original como fonte de produção; não enviá-lo diretamente como única variante final.
- Gerar, somente após autorização, AVIF principal e WebP fallback nas larguras 1024, 1440 e 2048 px, sem upscale acima da fonte 2048 × 1152.
- Medir qualidade de tela, teclado e madeira antes de escolher compressão; iniciar avaliação visual em AVIF qualidade aproximada 55–65 e WebP 72–80, sem declarar esses valores finais antes do teste.
- Usar `<picture>` com AVIF, WebP e PNG apenas como fallback final.
- Definir `width="2048"`, `height="1152"` e/ou `aspect-ratio: 16 / 9` para impedir layout shift.
- Como a mídia tende a ser o LCP em desktop, usar `loading="eager"`, `fetchPriority="high"` e `decoding="async"` somente na variante desktop ativa.
- Usar `srcset`/`sizes` para evitar entregar 2048 px a 1024 px CSS; considerar DPR sem ultrapassar a resolução real da fonte.
- Não carregar o asset em viewports abaixo de 1024 px na primeira implementação. A técnica precisa ser confirmada no navegador; um `<source media>` que aponte para fallback leve ou renderização condicional deve ser testado para garantir ausência real da requisição.
- Avaliar preload apenas depois de confirmar a URL final emitida pelo Vite; evitar preload duplicado ou incompatível com a variante escolhida pelo `<picture>`.
- Medir LCP, bytes transferidos e CLS antes/depois em desktop e confirmar que o fallback mobile não baixa o asset.

## Riscos

- A tela do laptop é trapezoidal; `clip-path` cobre limites, mas o terminal pode exigir perspectiva CSS cuidadosamente calibrada.
- `object-fit` e `object-position` distintos podem desalinhar overlays se imagem e camadas não compartilharem exatamente o mesmo wrapper.
- A travessia atual amplia notebook e tela em wrappers diferentes; a integração pode produzir deriva se esses transforms não forem reorganizados de forma mínima.
- O recorte de 1440 × 900 pode pressionar a caneca na borda esquerda.
- O modo 1024 × 768 exige regra específica; `cover` não é seguro.
- A imagem pode se tornar o LCP e piorar carregamento se o PNG bruto ou uma variante excessiva for entregue.
- Artefatos pequenos do teclado permanecem; devem ser avaliados no tamanho efetivamente renderizado, não em zoom editorial.
- A máscara do pseudo-brand pode denunciar o reparo sob escala, travessia ou telas de alto contraste.
- Renderização condicional por largura pode atrasar descoberta do LCP; `<picture>` e comportamento real de download precisam ser medidos.
- HERO-02-v01 ainda pode falhar o gate final se a camada DOM não alinhar de forma estável nos breakpoints desktop.

## Etapas

1. Criar uma implementação experimental isolada da camada absoluta sem remover o fallback atual.
2. Calibrar fotografia, tela e máscara em 1366 × 768.
3. Adicionar regras para 1440 × 900, 1024 × 768 e 1280 × 600.
4. Conectar a entrada existente ao wrapper de mídia sem duplicar timelines.
5. Conectar a travessia ao wrapper compartilhado e verificar retorno ao topo.
6. Confirmar fallback CSS/DOM e ausência de download do asset nos cinco viewports abaixo de 1024 px.
7. Validar reduced motion antes de otimizar mídia.
8. Após aprovação visual, gerar variantes locais AVIF/WebP e medir LCP/CLS/bytes.
9. Atualizar documentação com resultados observáveis; reverter o experimento se o alinhamento não for robusto.

## Validação

### Estática e responsiva

- comparar fotografia e overlay em 1440 × 900, 1366 × 768, 1024 × 768 e 1280 × 600;
- confirmar fallback atual em 768 × 1024, 430 × 932, 390 × 844, 360 × 640 e 844 × 390;
- verificar laptop integral, caneca, fones, journal, mouse, mesa, espaço negativo, mensagem e ausência de overflow;
- validar máscara e tela em resize contínuo e mudanças de orientação.

### Interação e acessibilidade

- terminal e cursor permanecem no DOM e legíveis;
- árvore semântica mantém heading e mensagem;
- fotografia usa `alt=""` e não duplica conteúdo;
- foco e teclado não são afetados;
- entrada, cursor, pin, travessia, retorno ao topo e refresh intermediário permanecem estáveis;
- `prefers-reduced-motion: reduce` não cria timelines e mostra estado final coerente;
- sem JavaScript, fallback continua compreensível.

### Performance e técnica

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- console sem erros;
- um único ScrollTrigger de pin na Hero;
- nenhuma timeline duplicada após resize;
- dimensões intrínsecas reservam espaço sem CLS;
- medir LCP, CLS e bytes transferidos;
- confirmar variante correta por DPR e viewport;
- confirmar que mobile não solicita HERO-02;
- comparar AVIF/WebP ao PNG em 100% e no tamanho renderizado.

## Progresso

- [x] HERO-02-v01 selecionado como base approved-for-integration;
- [x] HERO-02-v02 rejeitado;
- [x] novas gerações de IA encerradas para HERO-02;
- [x] estratégias A, B e C analisadas;
- [x] estratégia B recomendada;
- [x] matriz responsiva proposta;
- [x] tela DOM e máscara planejadas;
- [x] plano de performance documentado;
- [x] implementação experimental autorizada;
- [x] integração implementada;
- [x] validação visual executada em movimento normal;
- [ ] otimização executada;
- [x] implementação experimental removida após decisão final `REJECTED — KEEP CSS/DOM HERO`;

## Descobertas

- A proporção da fonte coincide com 1366 × 768, tornando esse viewport a referência inicial de calibração.
- Em 1024 × 768, `cover` exige recorte horizontal equivalente a cerca de 12,5% do bitmap em cada lado e ameaça a lateral esquerda do laptop; ajuste pela largura é mais seguro.
- Em retrato, preservar o bitmap completo reduz demais o laptop; preencher a viewport corta a composição. O fallback DOM/CSS é tecnicamente superior.
- A tela fotográfica precisa ser totalmente substituída visualmente por DOM; usá-la como fundo interativo comprometeria acessibilidade e controle da travessia.
- O PNG bruto tem 2,56 MiB aproximados e deve ser tratado como fonte, não como entrega única.

## Resultado

Experimento executado com a Estratégia B somente em desktop a partir de 1024 px; tablet estreito, mobile e paisagem móvel permaneceram no fallback CSS/DOM e não renderizaram imagem. O gate de produção foi rejeitado devido ao PNG bruto de 2.688,17 kB, warnings GSAP do modo fotográfico e ausência do gate visual obrigatório com reduced motion ativo. A implementação experimental foi então removida integralmente. A Hero definitiva é CSS/DOM por oferecer maior estabilidade, acessibilidade, performance e controle responsivo. HERO-02-v01 permanece como `archived-reference`, HERO-02-v02 permanece `rejected`, e nenhum asset foi apagado, convertido ou gerado.
