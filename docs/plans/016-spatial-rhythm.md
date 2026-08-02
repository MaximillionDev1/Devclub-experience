# MS-03 — Spatial Rhythm

## Status e escopo

Auditoria concluída em 01/08/2026. Nenhuma alteração de código, copy, tipografia, motion, componente, dependência ou asset foi realizada.

A análise combinou inspeção estrutural de React/CSS, medição dos espaçamentos computados e revisão visual nos viewports 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600.

## 1. Resumo do sistema espacial atual

A experiência já possui uma gramática interna reconhecível:

- eyebrow → H2 usa 20 px em todas as seções editoriais;
- H2 → lead varia de 24 a 32 px;
- lead → conteúdo principal varia de 44 a 112 px;
- seções institucionais usam containers entre 68 e 80 rem, com alinhamento central ou assimétrico conforme a narrativa;
- mobile converte composições em coluna e conserva 48–64 px antes dos sistemas principais;
- a Hero, o Story Scroll e o CTA possuem envelopes espaciais próprios.

O problema principal não está dentro dos pequenos grupos tipográficos. Ele aparece na soma dos envelopes externos. Formações/Students usam `clamp(5.5rem, 11vw, 10rem)`, Mentalidade/Quem Somos/Companies usam `clamp(6rem, 12vw, 11rem)`, Tutores começa em 6.5 rem e o CTA usa `clamp(7rem, 14vw, 12rem)`. Como essas fórmulas respondem à largura, desktops largos e baixos recebem pausas verticais desproporcionais: em 1280×600, os paddings por borda ficam entre 141 e 179 px.

A página mede aproximadamente 15,5 viewports em 1440×900, 17,5 em 1280×720, 20,3 em 1280×600, 20,1 em 360×640 e 28 em 844×390. A duração adicional em baixa altura vem mais de padding orientado por `vw`, `min-height` e sistemas empilhados do que de quantidade editorial.

Resposta à pergunta central: existe uma sequência legível de impacto → pausa → explicação → interação, mas as transições ainda não formam um único ritmo dirigido. Em vários encontros, a pausa é simplesmente a soma do bottom padding anterior com o top padding seguinte. Isso torna capítulos vizinhos mais independentes do que contínuos.

## 2. Achados por severidade

### BLOCKER

Nenhum blocker funcional ou espacial foi encontrado. Não há sobreposição de conteúdo, overflow horizontal, controle separado de seu contexto ou âncora encoberta por header fixo.

### IMPORTANT — SR-01: padding vertical responde à largura e penaliza desktops baixos

- **Seção:** Formações, Mentalidade, Quem Somos, Students, Companies, Tutores e CTA.
- **Selector/componente:** `.formations-section`, `.students-section`, `.mindset-section`, `.about-section`, `.companies-section`, `.tutors-section`, `.final-cta-section`.
- **Problema observável:** em 1280×600, cada borda de Formações/Students mede 141 px, as seções padrão medem 154 px e o CTA mede 179 px. Em 1280×720, permanecem entre 141 e 179 px. O override de baixa altura só entra abaixo de 500 px.
- **Por que afeta qualidade percebida:** o silêncio deixa de parecer uma pausa composta e passa a consumir contexto. O visitante vê menos relação entre heading, sistema e capítulo vizinho justamente nos notebooks baixos mais comuns.
- **Correção recomendada:** substituir a dependência puramente baseada em `vw` por faixas espaciais orientadas por papel e limitar o teto em `max-height: 720px`, sem tocar nos valores de tipografia ou na Hero.
- **Esforço:** médio, 3–5 horas com regressão completa.
- **Viewports afetados:** 1440×900 em menor grau; 1366×768, 1280×720, 1024×768, 1280×600; landscape 844×390 já possui compensação parcial.

### IMPORTANT — SR-02: transições somam dois paddings sem uma regra de pausa compartilhada

- **Seção:** todas as transições após Story Scroll.
- **Selector/componente:** pares de section paddings consecutivos.
- **Problema observável:** em 1280×600, Formações → Mentalidade soma 295 px; Mentalidade → Quem Somos, 308 px; Students → Companies, 295 px; Companies → Tutores, 308 px; Tutores → CTA, 333 px. Em 1440×900, Tutores → CTA chega a 365 px.
- **Por que afeta qualidade percebida:** o fim e o começo dos capítulos não negociam entre si. Em fundos muito próximos, como Students → Companies, a área vazia parece acidental; em mudanças de fundo, o intervalo faz a próxima ideia parecer desconectada.
- **Correção recomendada:** definir a pausa por transição, reduzindo apenas uma das duas bordas quando capítulos consecutivos compartilham fundo ou intensidade. Não zerar bordas nem tornar todas as seções iguais.
- **Esforço:** médio, 4–6 horas.
- **Viewports afetados:** todos, com maior impacto em desktops largos e baixos.

### IMPORTANT — SR-03: Story Scroll prolonga a abertura além do necessário em baixa altura

- **Seção:** Story Scroll.
- **Selector/componente:** `JourneySection`, `.story-step`, header `min-h-[62svh]`, steps `lg:min-h-[52vh] lg:py-24` e cauda `h-[24svh] min-h-32`.
- **Problema observável:** a seção mede 4,07–4,90 viewports nos desktops auditados e 5,93 viewports em 844×390. A combinação de seis steps, header imersivo e cauda cria uma longa permanência antes de Formações.
- **Por que afeta qualidade percebida:** a abertura sustenta bem a narrativa, mas em baixa altura a repetição espacial supera a variação de conteúdo e retarda o primeiro capítulo institucional.
- **Correção recomendada:** preservar os seis passos e o sticky, mas criar uma calibração de baixa altura para padding/min-height dos steps e reduzir moderadamente a cauda. Não alterar timeline, copy ou estrutura.
- **Esforço:** médio, 3–5 horas.
- **Viewports afetados:** 1366×768, 1280×720, 1024×768, 844×390 e 1280×600; impacto menor em tablet/mobile portrait.

### IMPORTANT — SR-04: Journey → Formações contém uma dupla pausa excessiva

- **Seção:** Story Scroll → Formações.
- **Selector/componente:** cauda `h-[24svh] min-h-32` de `JourneySection` + top padding de `.formations-section`.
- **Problema observável:** em 1280×600, a cauda representa 144 px e o início de Formações acrescenta 141 px; em 360×640, são aproximadamente 154 + 88 px. A transição pode consumir de 38% a 48% da altura antes do próximo eyebrow.
- **Por que afeta qualidade percebida:** dois mecanismos cumprem a mesma função de desaceleração. A passagem deixa de parecer intencionalmente cinematográfica e se aproxima de um vazio redundante.
- **Correção recomendada:** manter o gradient de saída do Story Scroll, mas reduzir sua altura ou compensar o top padding de Formações. Preservar ao menos um gesto claro de transição.
- **Esforço:** baixo, 1–2 horas.
- **Viewports afetados:** todos.

### IMPORTANT — SR-05: Companies se torna o capítulo institucional mais longo no mobile

- **Seção:** Companies.
- **Selector/componente:** `.companies-field`, padding-top de 8.5 rem abaixo de 900 px, `.companies-marks`, `.company-mark` e breakpoint de uma coluna abaixo de 600 px.
- **Problema observável:** a seção mede 1,83 viewport em 430×932, 2,09 em 390×844 e 2,80 em 360×640. Oito destinos empilhados, cards de 5.5 rem e a reserva acima das marcas transformam o sistema em uma sequência longa e uniforme.
- **Por que afeta qualidade percebida:** a demonstração de amplitude passa a dominar o arco, e Tutores/CTA parecem chegar tarde. A densidade não cresce por aprofundamento, mas pela repetição espacial.
- **Correção recomendada:** manter todos os nomes no DOM e a composição de uma coluna, mas revisar somente reserva superior, min-height dos marks e gaps mobile. Não converter em carousel nem remover conteúdo.
- **Esforço:** médio, 2–4 horas.
- **Viewports afetados:** 430×932, 390×844 e 360×640.

### IMPORTANT — SR-06: Quem Somos acumula sistema visual, gap e princípios em telas estreitas

- **Seção:** Quem Somos.
- **Selector/componente:** `.about-layout`, `.about-system`, `.about-content`, `.about-principles`.
- **Problema observável:** a seção mede 1,75 viewport em 430×932, 1,97 em 390×844, 2,73 em 360×640 e 3,68 em 844×390. O sistema reserva 16–18 rem, seguido por gap de 3.5 rem e princípios com padding vertical próprio.
- **Por que afeta qualidade percebida:** o elemento orbital, que deveria apoiar a explicação, ocupa espaço comparável ao conteúdo institucional. Em baixa altura ele fragmenta a relação entre statement e princípios.
- **Correção recomendada:** reduzir apenas `min-height` do sistema e gap de empilhamento em telas estreitas/baixas; preservar o desenho, a ordem e todos os princípios.
- **Esforço:** baixo a médio, 2–3 horas.
- **Viewports afetados:** 430×932, 390×844, 360×640 e 844×390.

### IMPORTANT — SR-07: âncoras de Quem Somos e CTA chegam tarde em desktops baixos

- **Seção:** Quem Somos e Final CTA.
- **Selector/componente:** `#quem-somos`, `.about-statement` sticky, `#comece`, `.final-cta-layout` e `.final-doorway`.
- **Problema observável:** em 1280×600, `#quem-somos` chega ao topo, mas o primeiro texto aparece a 225 px; em `#comece`, aparece a 304 px, mais de metade da viewport. O problema não é obstrução, e sim offset interno produzido por sticky/alinhamento e pelo envelope alto.
- **Por que afeta qualidade percebida:** a navegação funciona tecnicamente, porém o usuário recebe primeiro uma grande área atmosférica e pode não reconhecer imediatamente o destino.
- **Correção recomendada:** não aplicar `scroll-margin-top` global. Corrigir a calibração interna apenas em baixa altura; se necessário, hospedar o alvo de CTA no bloco editorial sem mudar o destino público `#comece`.
- **Esforço:** médio, 2–4 horas.
- **Viewports afetados:** principalmente 1280×600; observar também 1366×768 e 1280×720.

### POLISH — SR-08: distância entre lead e sistema é alta em Formações e Students desktop

- **Seção:** Formações e Student Stories.
- **Selector/componente:** `.formation-ecosystem`, `.testimonials-carousel`.
- **Problema observável:** lead → ecossistema varia de 82 a 112 px em desktop; lead → carrossel, de 72 a 96 px. Depois da redução aprovada dos H2, esse espaço ganhou mais peso relativo.
- **Por que afeta qualidade percebida:** a explicação e sua evidência visual parecem pertencer a momentos distintos, especialmente quando somente o topo do sistema entra na viewport.
- **Correção recomendada:** aproximar os sistemas para uma faixa imersiva de 64–96 px, preservando Students ligeiramente mais contida que Formações.
- **Esforço:** baixo, 1–2 horas.
- **Viewports afetados:** 1440×900, 1366×768, 1280×720, 1024×768 e 1280×600.

### POLISH — SR-09: Tutores repete duas pausas antes da seleção mobile

- **Seção:** Tutores.
- **Selector/componente:** `.tutor-profile`, `.tutors-layout`, `.tutors-conversation`.
- **Problema observável:** abaixo de 600 px o perfil recebe `margin-top: 3rem`; depois, o layout adiciona 3.5 rem antes da conversa/seletor. A seção chega a 2,02 viewports em 360×640.
- **Por que afeta qualidade percebida:** perfil e escolha de voz parecem blocos separados, embora constituam a mesma interação.
- **Correção recomendada:** preservar um intervalo forte antes do perfil e reduzir o segundo gap, mantendo o seletor associado ao painel.
- **Esforço:** baixo, 1 hora.
- **Viewports afetados:** 430×932, 390×844 e 360×640.

### POLISH — SR-10: CTA → Footer é coerente, mas o fechamento é longo em baixa altura

- **Seção:** Final CTA → Footer.
- **Selector/componente:** bottom padding de `.final-cta-section`, `.final-doorway`, `.experience-footer`.
- **Problema observável:** o footer toca semanticamente o CTA sem gap externo, mas o CTA mede 1,56 viewport em 1280×600 e 2,36 em 844×390. O footer mede 112–128 px.
- **Por que afeta qualidade percebida:** a passagem justifica silêncio, porém a confirmação institucional pode demorar a aparecer em telas baixas.
- **Correção recomendada:** manter a maior pausa de fechamento, limitando apenas o envelope de baixa altura. Não comprimir o footer nem aproximá-lo da assinatura dentro da passagem.
- **Esforço:** baixo, 1–2 horas.
- **Viewports afetados:** 844×390 e 1280×600.

## 3. Tabela de ritmo por seção

| Seção | Padding externo atual | Ritmo interno observado | Altura representativa | Avaliação |
|---|---:|---|---:|---|
| Hero | 0; composição em 100dvh | interface e copy posicionadas dentro da cena | 1,00 viewport | Imersiva e deliberada; preservar. |
| Story Scroll | header 62svh; steps 52vh/py-24 desktop; cauda 24svh | 20 px eyebrow→H2; 28 px H2→lead; seis etapas regulares | 4,07–5,93 viewports desktop/landscape | Narrativa coerente, longa em baixa altura. |
| Formações | 88–160 px por borda | 20; 25–26; 64–112 px até ecossistema | 0,95–2,43 viewports | Imersiva; entrada excessiva em desktop baixo. |
| Mentalidade | 96–176 px por borda | 20; 24; 44–72 px até princípios; 32 px até ação | 1,20–3,51 viewports | Estrutura clara, mas não funciona como pausa compacta. |
| Quem Somos | 96–176 px por borda | 20; sistema após 48–80 px; 52–69 px até princípios | 1,39–3,68 viewports | Editorial padrão; sistema visual pesa demais em telas baixas. |
| Student Stories | 88–160 px por borda | 20; 25–26; 48–96 px até carrossel | 0,86–2,05 viewports | Imersiva e mais eficiente que Formações. |
| Companies | 72–176 px por borda | 20; 28; desktop em paralelo; mobile 64 px até campo | 1,03–3,27 viewports | Boa assimetria desktop; repetição domina mobile. |
| Tutores | 72–176 px por borda | 20; 28; 48–64 px até perfil; 56 px entre colunas mobile | 1,11–2,76 viewports | Relação editorial boa; duas pausas no mobile. |
| Final CTA | 72–192 px por borda | 20; 32; 44 px até ação; 35 px até nota | 0,98–2,36 viewports | Closing distinto e coerente; alto em baixa altura. |
| Footer | 2 rem vertical; min-height 7–8 rem | dois labels, 32 px de gap desktop/10 px mobile | 112–128 px | Compacto, legível e conectado ao CTA. |

## 4. Avaliação transição por transição

| Transição | Fim anterior / pausa | Início seguinte | Fundo e continuidade | Mobile | Diagnóstico |
|---|---|---|---|---|---|
| Hero → Story Scroll | A saída da Hero é inequívoca. | Header central em 62svh oferece reorientação. | Preto para azul-grafite é intencional. | Continua claro sem pin editorial. | **Aprovada; preservar.** |
| Story Scroll → Formações | Gradient final de 24svh já encerra o capítulo. | Formações adiciona 88–160 px. | Continuidade escura funciona. | Pausa combinada chega a cerca de 242 px em 360×640. | **Excessiva por duplicação.** |
| Formações → Mentalidade | Ecossistema termina com amplo bottom padding. | Mentalidade inicia com padding ainda maior. | Mudança de luz quente/azul ajuda, mas chega tarde. | Coerente, embora longa. | **Reduzir uma das bordas.** |
| Mentalidade → Quem Somos | Frame e figcaption fecham bem a reflexão. | Quem Somos reabre com grande respiro. | Fundos próximos preservam universo. | Duas composições empilhadas tornam a passagem lenta. | **Pausa maior que a função compacta pede.** |
| Quem Somos → Students | Princípios encerram claramente o institucional. | Students volta ao centro e ao testemunho. | A mudança de voz justifica pausa forte. | Boa legibilidade, mas Quem Somos já chega longa. | **Aprovada com ajuste no capítulo anterior.** |
| Students → Companies | Controles fecham a evidência humana. | Companies inicia outro capítulo sobre destino. | Ambos usam essencialmente `#07090d`; o vazio não tem marcador forte. | Pausa aceitável, porém Companies alonga depois. | **Transição mais acidental do conjunto.** |
| Companies → Tutores | Detalhe final conclui o campo profissional. | Tutores muda para presença humana. | Alteração sutil de graphite é adequada. | A relação é clara. | **Boa direção; envelope desktop alto.** |
| Tutores → Final CTA | Contexto final prepara decisão. | CTA possui linguagem e luz próprias. | Mudança para near-black/azul fecha o arco. | CTA continua reconhecível. | **Pausa forte justificada, mas excessiva em baixa altura.** |
| Final CTA → Footer | Passagem e threshold encerram a ação. | Footer toca a seção sem gap artificial. | `#05070a` para `#040506` é contínuo. | Footer permanece associado. | **Aprovada; preservar estrutura.** |

## 5. Papéis espaciais propostos

Os papéis refletem a arquitetura atual e são recomendados:

- **Immersive:** Hero, Story Scroll, Formações e Student Stories. Podem sustentar permanência maior porque possuem progressão ou interação central.
- **Compact pause:** Mentalidade. Deve desacelerar e articular decisão, sem durar tanto quanto um ecossistema ou lista institucional.
- **Standard editorial:** Quem Somos, Companies e Tutores. Compartilham statement assimétrico + sistema de apoio, mas devem conservar diferenças internas.
- **Closing:** Final CTA e Footer. Precisam da maior pausa final, com teto específico para baixa altura.

Esses papéis devem controlar apenas envelopes e distâncias principais; não devem converter todas as seções do mesmo papel em layouts idênticos.

## 6. Faixas espaciais propostas

Valores conceituais para uma futura implementação, sujeitos à validação visual:

| Relação | Desktop normal | Desktop ≤720 px de altura | Tablet/mobile portrait |
|---|---:|---:|---:|
| Eyebrow → H2 | 18–22 px | 18–22 px | 18–22 px |
| H2 → lead | 24–32 px | 22–28 px | 24–28 px |
| Lead → conteúdo compacto | 40–64 px | 36–52 px | 40–56 px |
| Lead → conteúdo padrão | 56–80 px | 48–64 px | 48–64 px |
| Lead → conteúdo imersivo | 64–96 px | 56–80 px | 48–72 px |
| Conteúdo → ação/controle relacionado | 24–48 px | 24–40 px | 20–40 px |
| Padding por borda — compact | 88–128 px | 64–88 px | 72–96 px |
| Padding por borda — padrão | 112–152 px | 72–104 px | 80–104 px |
| Padding por borda — imersivo | 120–160 px | 80–112 px | 80–104 px |
| Padding por borda — closing | 144–192 px | 88–120 px | 96–112 px |
| Pausa total entre capítulos | 176–256 px | 128–192 px | 144–208 px |

Os valores internos atuais de 20 px e 24–32 px já pertencem às faixas e não precisam de correção generalizada.

## 7. Recomendações responsivas

### Desktop 1440×900

- preservar a amplitude da Hero e do CTA;
- limitar somente transições que ultrapassam aproximadamente 320 px combinados;
- aproximar lead e sistema em Formações/Students;
- manter layouts assimétricos e sticky existentes.

### Desktop 1366×768, 1280×720, 1024×768 e 1280×600

- criar uma faixa explícita de baixa altura até 720 px, não apenas abaixo de 500 px;
- reduzir paddings por papel, step spacing do Story Scroll e cauda de transição;
- conservar 1024 px como breakpoint editorial de motion; ritmo não deve criar outro breakpoint conflitante;
- dar contexto imediato a `#quem-somos` e `#comece` em 1280×600.

### Tablet 768×1024

- o ritmo geral é o mais equilibrado da matriz: Formações, Students e CTA ficam próximos de uma viewport;
- preservar gaps de 56–64 px entre lead e sistemas;
- reduzir Quem Somos apenas se a altura do sistema continuar superior à sua contribuição visual.

### Mobile 430×932, 390×844 e 360×640

- não comprimir texto ou touch targets;
- reduzir espaço repetido em Companies e entre perfil/seletor de Tutores;
- reduzir o envelope de Quem Somos pelo sistema decorativo, não pelos princípios;
- manter paddings externos em torno de 80–104 px, com CTA em 96–112 px;
- preservar o fluxo natural e a ausência de alturas fixas nos blocos de copy.

### Landscape 844×390

- o override atual de 72 px evita o pior excesso externo e deve ser preservado como conceito;
- Story Scroll, Mentalidade e Quem Somos continuam entre 3,5 e 5,9 viewports e precisam de calibração interna própria;
- evitar reduzir targets ou line-height para ganhar espaço.

## 8. Recomendações para âncoras

Resultados observados:

- `#formacoes`, `#alunos`, `#empresas`, `#tutores`, `#quem-somos` e `#comece` posicionam o início da seção no topo quando carregados diretamente;
- o clique nativo em “Formações” foi validado em 390×844 e posicionou `#formacoes` em 0 px;
- `#top` retorna ao início estável fora do elemento pinado;
- todos os alvos possuem `scroll-margin-top: 0` e não existe header fixo cobrindo conteúdo;
- o primeiro conteúdo aparece aproximadamente 88–113 px abaixo do topo em mobile, faixa adequada;
- em 1280×600, os primeiros conteúdos aparecem a 140 px em Formações, 141 px em Students, 186 px em Companies, 159 px em Tutores, 225 px em Quem Somos e 304 px no CTA.

Recomendação:

- não adicionar `scroll-margin-top` global;
- não reintroduzir smooth scroll;
- corrigir primeiro padding/alinhamento de baixa altura;
- reavaliar apenas `#quem-somos` e `#comece` depois dessa correção;
- se o CTA continuar chegando tarde, manter o ID público e deslocar o ponto semântico para um wrapper editorial, em vez de compensar com margem arbitrária.

## 9. Conjunto mínimo de mudanças recomendado

Para uma futura etapa de implementação, o menor conjunto suficiente é:

1. criar quatro papéis de envelope espacial — immersive, compact, standard e closing — sem alterar os componentes;
2. adicionar calibração de `padding-block` para desktops com altura até 720 px;
3. remover a dupla pausa Story Scroll → Formações;
4. reduzir spacing/min-height do Story Scroll somente em baixa altura;
5. reduzir reserva vertical do sistema de Quem Somos em mobile/landscape;
6. compactar reserva, min-height e gaps de Companies mobile sem remover marcas;
7. aproximar seletor e perfil em Tutores mobile;
8. revalidar `#quem-somos` e `#comece` após os ajustes, sem `scroll-margin-top` global.

Não é necessário alterar copy, tipografia, motion, estrutura React, ordem das seções, assets ou dependências.

## 10. Elementos e espaçamentos que devem permanecer intocados

- composição, 100dvh, pin, câmera e interface da Hero;
- escala tipográfica fixada no MS-02;
- ordem Hero → Story Scroll → Formações → Mentalidade → Quem Somos → Students → Companies → Tutores → CTA → Footer;
- 20 px entre eyebrow e H2 como baseline editorial;
- faixa de 24–32 px entre H2 e lead;
- alinhamento central de Formações e Students;
- assimetria de Mentalidade, Quem Somos, Companies, Tutores e CTA;
- sticky visual do Story Scroll em desktop e seus seis passos;
- todos os princípios, marcas, perfis e depoimentos no DOM;
- targets de interação e foco visível;
- direção de luz, passagem e maior pausa relativa do CTA;
- contato nativo entre CTA e Footer;
- scroll nativo e âncora estável `#top`;
- único pin da Hero e toda a direção de motion aprovada.

## Limites da auditoria

- O navegador usado não expôs uma mudança mensurável após o comando de zoom; portanto, zoom 200%/400% permanece como validação manual futura. A ordem de conteúdo foi inspecionada no DOM e os viewports estreitos funcionaram como proxy de reflow, sem overflow horizontal.
- Medições de elementos em colunas paralelas podem produzir gaps negativos; esses valores representam sobreposição vertical intencional entre colunas, não colisão.
- Nenhuma correção foi implementada e nenhuma validação técnica de build era necessária para este documento; `git diff --check` deve confirmar apenas a integridade textual do relatório.

## Registro de implementação aprovada — 01/08/2026

Status: concluída no escopo reduzido.

- **SR-01:** Formações/Students usam envelope immersive, Mentalidade usa compact e Quem Somos/Companies/Tutores usam standard. Uma calibração até 720 px de altura limita os envelopes sem alterar a Hero. O CTA manteve seu padding anterior porque SR-10 foi explicitamente excluído.
- **SR-02:** a soma entre capítulos foi reduzida por papéis e por um bottom padding menor em Students; nenhuma borda foi zerada e os alinhamentos permaneceram intactos.
- **SR-03:** somente baixa altura foi calibrada: header, padding/min-height dos steps e cauda do Story Scroll. Os seis passos, sticky, DOM, timeline, triggers e narrativa não mudaram.
- **SR-04:** a cauda entre Story Scroll e Formações passou de 24svh/min 128 px para 18svh/min 96 px, com 14svh/min 80 px até 720 px de altura.
- **SR-08:** em larguras a partir de 901 px, lead → Formações passou para 64–88 px e lead → Students para 56–80 px. Mobile preservou seus valores anteriores.

Não implementados: SR-05, SR-06, SR-07, SR-09 e SR-10. Sistemas internos de Companies/Quem Somos/Tutores, comportamento das âncoras e envelope CTA/Footer não receberam correções específicas.

Resultado medido: em 1280×600, o Story Scroll caiu de 4,90 para aproximadamente 4,06 viewports e a página de 20,3 para aproximadamente 18,0 viewports, sem overflow e mantendo um único pin. Em 1440×900, a página caiu de 15,5 para aproximadamente 14,8 viewports, preservando amplitude normal.
