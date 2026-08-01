# Hero Experience Blueprint — A decisão abre a passagem

## Estado

Direção criativa final congelada. Parte A implementada; Parte B autorizada para concluir a Hero sem vídeo, imagem, asset ou dependência nova. Não haverá novas propostas de redesign após esta execução.

## Objetivo emocional

A única conclusão desejada é: **“Eu posso fazer parte disso.”** A Hero não apresenta curso, oferta ou interface tecnológica. Ela transforma um espaço cotidiano em evidência de possibilidade. O visitante é o agente; o laptop é apenas a passagem; o DevClub é a direção que responde do outro lado.

## Princípio de direção

A experiência dura aproximadamente 24 segundos percebidos para quem realiza quatro a seis gestos deliberados de scroll. Não há relógio nem autoplay. O progresso pode parar em qualquer ato e reverter integralmente. O ritmo herda clareza material da Apple, precisão da Linear, paciência de Interstellar e resposta tátil da Framer — nunca seus layouts.

## Logline

Uma mesa comum permanece em silêncio até que a decisão do visitante faça o terminal responder; essa resposta ilumina o ambiente, aproxima a câmera e converte a tela em passagem para uma jornada possível.

## Regras dramáticas

1. Nada acontece antes da ação do visitante.
2. Cada mudança é consequência do scroll anterior.
3. O ambiente reage depois do terminal.
4. A câmera se aproxima somente depois que a possibilidade foi compreendida.
5. A marca não interrompe a descoberta.
6. O portal nasce de escala, luz, contraste e desaparecimento, não de VFX.
7. Todo estado é coerente quando pausado ou percorrido ao contrário.

## Timeline emocional

| Progresso | Ato | Tempo percebido | Emoção | Acontecimento e razão |
| --- | --- | ---: | --- | --- |
| 0–12% | Silêncio | 4 s | Identificação | Mesa, laptop e terminal vazio imóveis. O visitante reconhece sua realidade antes da transformação. |
| 12–34% | Convite | 6 s | Curiosidade | O primeiro scroll desperta cursor, prompt e comando. A ação passa a ter consequência. |
| 34–42% | Pausa | 2 s | Expectativa | `$ iniciar_jornada_` permanece sozinho. A decisão ganha peso. |
| 42–68% | Resposta | 6 s | Reconhecimento | Quatro respostas surgem e a luz começa a afetar o espaço. Mentoria e prática são respostas, não propaganda. |
| 68–92% | Transformação | 5 s | Expansão | A câmera avança, objetos perdem presença e a tela domina. O cotidiano é atravessado, não negado. |
| 92–100% | Passagem | 1–2 s | Pertencimento | A tela ocupa o campo e entrega continuidade ao Story Scroll. |

## Texto do terminal

```text
devclub@future:~
$ iniciar_jornada_

loading...
connecting mentors...
building projects...
opening possibilities...
ready.
```

O underscore final é cursor visual, não caractere duplicado no conteúdo acessível.

## Timeline de animação

Uma única timeline principal, dirigida pelo ScrollTrigger, usa progresso normalizado de 0 a 1. Tweens auxiliares só existem para cursor e cadência de caracteres, dentro do mesmo contexto GSAP e com cleanup.

### 0–0,12 — retenção

Nenhuma animação narrativa. O estado composto permanece legível no DOM/CSS. O scroll hint não pulsa. Silêncio real não pode ser representado por movimento contínuo.

### 0,12–0,34 — digitação responsiva

Cursor aparece, `devclub@future:~` revela, há um intervalo curto e `$ iniciar_jornada` surge por caracteres discretos. O texto é quantizado por caracteres, derivado do progresso GSAP e sem React state por frame. Isso combina sensação de resposta com agência e reversibilidade.

### 0,34–0,42 — suspensão

Texto imóvel; apenas o cursor alterna opacidade lentamente. Câmera e luz não mudam. A pausa impede que a cena pareça uma demonstração de produto.

### 0,42–0,68 — resposta

Cada linha entra com 4–6 px de deslocamento e opacidade. `loading` é curto; mentores e projetos recebem mais tempo; possibilidades encerra a frase. A luz cresce em quatro degraus quase imperceptíveis e a mesa ganha separação tonal, sem glow decorativo.

### 0,68–0,92 — aproximação

O wrapper da cena avança; objetos laterais perdem opacidade lentamente; a mesa desce poucos pontos percentuais; a moldura continua visível até cerca de 86%; o terminal desaparece somente depois de lido. O visitante entende o que está atravessando.

### 0,92–1 — entrega

Tela e portal convergem para a cor inicial da jornada. O ambiente desaparece e o pin termina quando o Story Scroll já assumiu a continuidade visual.

## Timeline de scroll

- **Desktop:** pin proposto de 260–320vh; `scrub` entre 0,6 e 0,9; seis zonas dramáticas dentro de um único ScrollTrigger.
- **Tablet:** 210–250vh; mesma história, intervalos menores e aproximação máxima reduzida.
- **Mobile retrato:** 170–210vh; prompt e resposta em regiões legíveis; somente laptop e mesa quando objetos competirem.
- **Baixa altura/paisagem:** 140–170vh; resposta mais concisa no espaço, nunca tipografia menor que o limite legível.
- O retorno ao topo desfaz caracteres, luz, câmera e portal.

A história é constante; duração espacial e composição pertencem ao dispositivo.

## Timeline de câmera

| Progresso | Movimento | Intenção |
| --- | --- | --- |
| 0–42% | Plano geral imóvel | Dar credibilidade à realidade comum. |
| 42–58% | Push-in de 1–2% | A câmera reage somente após o terminal. |
| 58–68% | Aproximação até 6–8% | O laptop ganha gravidade sem dominar. |
| 68–86% | Escala progressiva a ~1,35–1,45 desktop | O visitante escolhe continuar. |
| 86–100% | Tela se torna quadro | A câmera deixa de observar e atravessa. |

O transform de entrada continua em `data-notebook`; a câmera permanece em `data-crossing-notebook`. Não há parallax independente sem função narrativa.

## Timeline de iluminação

| Progresso | Estado | Razão |
| --- | --- | --- |
| 0–34% | Azul meia-noite estável; materiais apenas legíveis | O laptop está ligado, mas ainda não promete. |
| 34–42% | Pulso quase imperceptível somente na tela | Sinal de espera, não recompensa. |
| 42–68% | Quatro passos de luz sincronizados às respostas | Cada frase produz consequência física. |
| 68–86% | Centro aprofunda, periferia escurece | O olhar converge por hierarquia. |
| 86–100% | Luz converge com o destino | A luz se torna espaço. |

Evitar filtros caros, blur amplo e sombras continuamente animadas. Priorizar pseudo-elementos, opacity, transform e poucas mudanças calibradas de sombra.

## Estrutura DOM proposta

```text
section.hero-scene[aria-labelledby="hero-title"]
├── h1#hero-title.sr-only
├── div.hero-environment[aria-hidden="true"]
├── div.hero-composition
│   ├── div[data-crossing-notebook]
│   │   └── div[data-notebook]
│   │       ├── div[data-screen]
│   │       │   ├── div.hero-terminal-visual[aria-hidden="true"]
│   │       │   └── p.hero-terminal-summary.sr-only
│   │       └── div.hero-base
│   └── div[data-desk]
│       ├── div.hero-mug[aria-hidden="true"]
│       └── div.hero-journal[aria-hidden="true"]
├── p.hero-message
├── div[data-portal][aria-hidden="true"]
└── p.hero-experience-summary.sr-only
```

`HeroScene` coordena refs/timelines; `HeroTerminal` pode conter transcript e visual; `HeroWorkspace` pode conter composição. A separação só será feita se reduzir responsabilidade real, sem criar sistema genérico de cenas.

## Estratégia de acessibilidade

1. H1 e mensagem emocional existem desde o primeiro paint.
2. Terminal animado é `aria-hidden`; uma transcrição estática equivalente atende leitores de tela.
3. Não usar `aria-live`, pois atualizações pelo scroll seriam repetitivas.
4. Page Down, Space, teclado e scroll nativo progridem a experiência.
5. Nada exige hover, áudio ou precisão de ponteiro.
6. Contraste é validado no estado mais escuro.
7. Sem JavaScript, o estado final e um resumo textual permanecem compreensíveis.
8. Em `prefers-reduced-motion: reduce`, não há pin, digitação, cursor intermitente, push-in ou portal: mesa estável, transcript completo e jornada em fluxo.
9. O pin nunca aprisiona foco nem muda a ordem do documento.
10. A mensagem não depende somente de luz, cor ou movimento.

## Estratégia de performance

1. Hero CSS/DOM; HERO-02 continua fora do bundle.
2. Reutilizar GSAP, ScrollTrigger e `useGSAP`; nenhuma dependência nova.
3. Uma timeline principal e um único pin.
4. Nenhum React state por frame.
5. Priorizar transform, opacity e custom properties.
6. Limitar `will-change` ao período ativo.
7. Sem áudio, vídeo, canvas, WebGL ou imagem LCP nesta fase.
8. Geometria calculada no refresh, nunca em cada frame.
9. Estado CSS final e dimensões estáveis minimizam CLS.
10. Orçamento: zero overflow, zero warning GSAP, um pin, nenhuma timeline duplicada e nenhum novo download.

## Relação com o Story Scroll

A Hero termina na cor, luminosidade e eixo do início da jornada. A primeira etapa não repete “possibilidade”; responde com “direção”. O Story Scroll permanece independente e sem pin adicional. A Hero gera pertencimento; a jornada organiza esse desejo.

## Fora de escopo

CTA comercial, preço, formulário, áudio real, vídeo, imagem gerada, partículas, código flutuante, parallax gratuito, RGB/neon, autoplay, múltiplos pins e reescrita do Story Scroll.

## Complexidade estimada

**Média-alta; 4–6 dias focados**, sem geração de assets ou novas dependências.

- Direção/ritmo: alta — valor depende de pausas e proporções.
- DOM/CSS: média — reutiliza composição, separa terminal e luz.
- GSAP: média-alta — timeline longa, reversível e responsiva.
- Acessibilidade: média — transcript e reduced motion são versões completas.
- Performance: baixa-média — sem mídia pesada, com disciplina no pin.
- QA: alta — ritmo, baixa altura, retorno, resize e inputs variados.

## Micro-sprints

### Recorte de execução aprovado

A Parte A reúne o transcript acessível, a reação ao primeiro gesto, as cinco respostas, luz/atmosfera sincronizadas, preparação visual sem aproximação, comportamento compacto e fallback reduced motion. Ela reutiliza o pin existente sem modificá-lo. A Parte B permanece responsável pela aproximação, passagem final e integração cinematográfica com a continuidade já existente.

### MS-01 — Dramaturgia no DOM

Estruturar transcript visual/acessível e estados finais sem alterar travessia. Gate: legível sem JS, mobile e reduced motion estático.

### MS-02 — Convite controlado pelo scroll

Implementar silêncio, cursor e digitação entre 0–42%. Gate: zero autoplay, reversão, teclado, zero warning e sem state por frame.

### MS-03 — Resposta e luz

Inserir quatro linhas e reação luminosa entre 42–68%. Gate: contraste, contenção visual e baixa altura.

### MS-04 — Câmera e passagem

Evoluir a travessia entre 68–100% sem reescrever Story Scroll. Gate: avanço, reversão, refresh, resize e um pin.

### MS-05 — Versões responsivas

Calibrar duração espacial, escala, objetos e texto. Gate: matriz de viewports, zero overflow/cortes e terminal legível.

### MS-06 — Acessibilidade, performance e direção final

Validar reduced motion ativo, teclado, console, bundle e ritmo. Gate: lint, typecheck, build, diff check, zero warning, nenhum download novo e aprovação criativa.

## Critérios de aprovação criativa

1. O primeiro scroll parece escolha, não gatilho mecânico.
2. A pausa sustenta expectativa sem parecer falha.
3. As respostas são compreendidas antes da câmera dominar.
4. O laptop deixa de ser protagonista quando a transformação começa.
5. O portal funciona sem espetáculo visual.
6. O Story Scroll recebe um visitante emocionalmente preparado.
7. Qualquer frame pausado continua premium.

## Estado de execução e plano da Parte B

A autorização da Parte A foi exercida e preserva a Hero atual como base. A Parte B seguirá, somente após nova aprovação, nesta ordem:

1. congelar os checkpoints e gates da Parte A;
2. iniciar a aproximação apenas depois de `ready.`, reutilizando `data-crossing-notebook` e o único pin;
3. reduzir progressivamente a presença do ambiente e entregar a passagem à travessia existente, sem vídeo, canvas ou novo asset por padrão;
4. recalibrar desktop, tablet, mobile e baixa altura sem comprimir a versão desktop;
5. validar reversão, refresh intermediário, resize, reduced motion, continuidade do Story Scroll e orçamento de performance antes de qualquer integração adicional.

## Execução final autorizada

### Escopo

- consolidar mensagens, luz, atmosfera, câmera e passagem em uma timeline principal e um único pin;
- manter o notebook fisicamente estável; somente o wrapper de câmera pode avançar no terço final;
- sincronizar cada resposta a mudanças perceptíveis de brilho, contraste tonal, gradiente da parede e glow da tela;
- preservar travessia, Story Scroll, DOM semântico, mobile próprio e reduced motion;
- remover da Hero qualquer linguagem de landing genérica sem adicionar conteúdo institucional.

### Fora de escopo

Vídeo, imagem, asset, áudio, canvas, nova dependência, novo pin, órbita, shake, zoom dramático, Sprint 4 e qualquer nova proposta de redesign.

### Marcos verificáveis

1. timeline principal unificada e reversível;
2. cinco checkpoints textuais com cinco respostas ambientais;
3. push-in único e discreto somente após `ready.`;
4. passagem atual preservada ao fim da timeline;
5. mobile/baixa altura e reduced motion validados;
6. matriz visual, console e gates técnicos aprovados.

### Progresso

- [x] direção final congelada e escopo registrado;
- [x] timeline e hierarquia visual implementadas;
- [x] responsividade normal e fallback reduced motion validados estruturalmente;
- [x] Quality Gate criativo aprovado;
- [x] documentação final atualizada.

### Resultado

A Hero final permanece CSS/DOM e usa um único pin. O primeiro scroll inicia a resposta; cinco mensagens acordam progressivamente parede, ambiente, contraste e tela; `ready.` encerra a compreensão; somente então ocorre um push-in discreto antes da passagem existente. Desktop, tablet, mobile e baixa altura possuem calibração própria. Story Scroll, acessibilidade e performance foram preservados. A direção está congelada e não admite novas propostas de redesign.
