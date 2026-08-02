# MS-02 — Typography Direction

## Objetivo

Auditar a tipografia integral da DevClub Experience e definir o menor conjunto de correções capaz de consolidar uma voz editorial, cinematográfica, restrita, precisa e legível, sem trocar fontes, instalar arquivos, alterar copy, redesenhar seções ou modificar a composição aprovada da Hero.

## Escopo e método

Foram auditados Hero, navegação, terminal, Story Scroll, Formações, Mentalidade, Quem Somos, histórias de alunos, Empresas, Tutores, CTA final e footer, incluindo headings, parágrafos, quotes, botões, labels, eyebrows e metadados.

A análise combinou:

- inventário de `font-family`, tamanho, peso, line-height, tracking, contraste, largura e wrapping no CSS e nas classes utilitárias;
- inspeção da estrutura semântica no DOM;
- medição de estilos computados e linhas reais;
- inspeção visual em 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- busca de overflow, clipping, headings órfãos, controles que mudam de altura e texto essencial abaixo de 10 px.

Nenhum código de interface foi alterado. Nenhuma fonte ou dependência foi instalada.

## 1. Resumo do sistema tipográfico atual

### Famílias

- Sans principal: `Inter, ui-sans-serif, system-ui, ...`. `Inter` é declarada, mas não é carregada pelo projeto; o resultado real depende das fontes disponíveis no sistema.
- Mono funcional: `ui-monospace`, SFMono, Menlo, Consolas ou `monospace`, usado em terminal, índices, eyebrows e metadados técnicos.
- Serif editorial: Georgia/Times, reservada ao statement de Mentalidade, texto institucional de Quem Somos, relatos e falas de tutores/empresas.

As três vozes têm funções compreensíveis: sans para narrativa, mono para orientação/sistema e serif para reflexão humana. A arquitetura deve ser preservada.

### Hierarquia e escala

- H1 da Hero: 18,4–29,5 px conforme viewport, caixa alta, tracking amplo de 0,13–0,30 em e duas linhas deliberadas.
- H2 editorial: aproximadamente 36–89 px. Journey chega a 88 px, CTA a 89,3 px, headings institucionais a 80 px e headings assimétricos a 73,4 px.
- H3: aproximadamente 16–57,6 px, misturando títulos narrativos grandes com títulos de princípios e perfis.
- Corpo principal: aproximadamente 14,2–18 px, geralmente com line-height entre 1,65 e 1,75.
- Leads e quotes serifados: aproximadamente 17,3–28 px, line-height entre 1,55 e 1,60.
- Labels e microcopy: aproximadamente 6,88–12,5 px; é aqui que se concentra a maior dispersão e os riscos de acessibilidade.
- Pesos declarados: 350, 380, 400, 420, 430, 450, 460, 470, 480, 500, 510, 520, 540, 550 e 650.

### Comportamento observado

- A ordem semântica é correta: um H1, H2 por seção e H3 para etapas, princípios, perfil e história ativa.
- Nenhum dos dez viewports apresentou overflow horizontal.
- O H1 da Hero permaneceu em duas linhas; “TUDO.” conservou o accent e o subheadline permaneceu em uma linha nos formatos testados.
- Headings institucionais chegam a quatro ou cinco linhas em composições estreitas; várias linhas contêm uma única palavra.
- O corpo principal possui larguras geralmente saudáveis, mas microcopy essencial fica pequena e pouco contrastada.
- Controles mantiveram suas caixas; não foi observada mudança de altura causada por quebra do label principal.

## 2. Achados por severidade

### BLOCKER — TY-01: navegação principal fica pequena demais no mobile

- **Seção:** Hero / header navigation.
- **Selector/componente:** `.hero-navigation a`, `HeroScene.tsx`.
- **Problema observável:** os labels medem 8,32 px em 430 px e 7,68 px em 390/360 px. Em 844×390 ficam em 8,8 px. A captura mobile confirma leitura frágil mesmo sem wrapping ou clipping.
- **Por que afeta qualidade percebida:** a navegação é conteúdo interativo essencial. O tamanho parece uma redução forçada para preservar quatro links e enfraquece clareza, acessibilidade e acabamento do primeiro frame.
- **Correção recomendada:** preservar conteúdo e posição geral, mas estabelecer mínimo legível de 10–11 px no recorte mais restrito e revisar gap/ocupação apenas na futura implementação tipográfica. Não alterar headline, imagem ou conceito da Hero.
- **Esforço:** pequeno a médio; 1–2 horas com reteste de 360, 390, 430 e 844×390.
- **Impacto:** mobile e baixa altura.

### BLOCKER — TY-02: microcopy essencial combina tamanho mínimo com contraste insuficiente

- **Seção:** Empresas, Tutores, CTA, footer e partes de Formações/Mentalidade.
- **Selector/componente:** `.companies-clubjobs`, `.company-detail > span`, `.tutor-profile-heading p`, `.tutor-profile-heading strong`, `.tutor-support span`, `.tutor-support p`, `.tutor-selector button small`, `.tutors-context`, `.final-cta-note`, `.experience-footer p`, `.mindset-video-action > p`, `.formation-detail dt`.
- **Problema observável:** conteúdo necessário aparece entre 8,32 e 12 px com branco entre 27% e 43% de opacidade. Exemplos críticos: contexto de Tutores a 11,52 px/32%, nota final a 9,44 px/27%, footer a 9,28 px/27%, “Perfil em conversa” a 8,32 px/28% e especialidades do seletor a 9,44 px/31%.
- **Por que afeta qualidade percebida:** baixa hierarquia não deve significar baixa legibilidade. O conjunto cria áreas que parecem desativadas ou decorativas, embora carreguem contexto real, e falha em oferecer contraste robusto para texto pequeno.
- **Correção recomendada:** separar metadado decorativo de conteúdo essencial. Conteúdo essencial deve usar no mínimo 12 px, preferencialmente 13–14 px, e contraste compatível com texto normal; opacidades abaixo de aproximadamente 45% devem ficar restritas a anotações verdadeiramente dispensáveis e `aria-hidden`.
- **Esforço:** médio; 3–5 horas para classificar cada ocorrência, ajustar e validar contraste.
- **Impacto:** todos.

### IMPORTANT — TY-03: a família sans não é determinística

- **Seção:** experiência inteira.
- **Selector/componente:** `:root` em `src/index.css`.
- **Problema observável:** `Inter` ocupa a primeira posição da stack, mas não há fonte local, import ou request correspondente. Em ambientes sem Inter, a experiência usa `system-ui`/Segoe UI/SF Pro, alterando largura, peso, wraps e textura.
- **Por que afeta qualidade percebida:** uma direção tipográfica não pode depender silenciosamente do sistema operacional. Os pesos intermediários e os line breaks medidos não são garantidos em outro dispositivo.
- **Correção recomendada:** antes de trocar ou instalar qualquer fonte, decidir na revisão se a stack de sistema é intencional. Se for, remover a promessa nominal de Inter e calibrar pelo sistema; se não for, aprovar uma fonte e sua estratégia de entrega em etapa separada.
- **Esforço:** pequeno para a decisão; médio para uma implementação futura com QA multiplataforma.
- **Impacto:** todos.

### IMPORTANT — TY-04: a escala de H2 cresce além da necessidade editorial

- **Seção:** Story Scroll, Formações, Quem Somos, Empresas, Tutores e CTA.
- **Selector/componente:** heading de `JourneySection`, `.institutional-heading h2`, `.about-statement h2`, `.companies-editorial h2`, `.tutors-editorial h2`, `.final-cta-editorial h2`.
- **Problema observável:** Journey chega a 88 px, CTA a 89,3 px e Formações a 80 px. Em 390 px, Formações ocupa cinco linhas/214,5 px; CTA chega a 54,6 px e 153,9 px de altura. A escala faz algumas seções parecerem campanhas independentes, não capítulos do mesmo sistema.
- **Por que afeta qualidade percebida:** o excesso repete impacto em quase toda seção, reduz o silêncio visual e aproxima a página de linguagem de marketing. A Hero, apesar de ser o ápice narrativo, usa um H1 muito mais contido.
- **Correção recomendada:** reduzir o teto dos displays institucionais e separar somente dois níveis: display narrativo e heading editorial. CTA pode permanecer um passo acima do corpo institucional, mas não precisa superar todos os headings.
- **Esforço:** médio; 3–5 horas de calibração responsiva.
- **Impacto:** todos, sobretudo desktop amplo e mobile estreito.

### IMPORTANT — TY-05: headings assimétricos produzem linhas isoladas fracas

- **Seção:** Mentalidade, Quem Somos, Empresas, Tutores e CTA.
- **Selector/componente:** `.mindset-editorial h2`, `.about-statement h2`, `.companies-editorial h2`, `.tutors-editorial h2`, `.final-cta-editorial h2`.
- **Problema observável:** em 1440×900, os wraps reais incluem “transformar”, “quando”, “acompanhado” e “continua” como linhas isoladas. Empresas forma cinco linhas: “Conhecimento / ganha valor / quando / começa a / contribuir.” Em 390 px, Formações termina com “a construir.” e Empresas mantém “a contribuir.” isolado.
- **Por que afeta qualidade percebida:** palavras de ligação ou verbos sem companhia criam pausas acidentais e dão importância gráfica a fragmentos que não sustentam o ritmo sozinhos.
- **Correção recomendada:** ajustar conjuntamente tamanho e `max-width` por faixa; usar largura em `ch` como intenção de leitura e preservar `text-wrap: balance` como auxílio, não como única solução. Não inserir `<br>` manual em copy editorial responsiva.
- **Esforço:** médio; 2–4 horas com matriz completa.
- **Impacto:** desktop e mobile; tablet está mais equilibrado.

### IMPORTANT — TY-06: terminal e pistas da Hero encostam no limite de legibilidade

- **Seção:** Hero.
- **Selector/componente:** `.hero-terminal-visual`, `.hero-start-guide p`, `.hero-scroll-hint p`, `.hero-copy p` em baixa altura.
- **Problema observável:** terminal mede 8 px em 1024×768 e aproximadamente 9,2 px em 1280×720/600; “ROLE PARA COMEÇAR” mede 9,28 px; “SCROLL” mede 8,48 px; o subheadline cai a 9,6 px em 844×390. O prompt do terminal usa apenas 38% de branco.
- **Por que afeta qualidade percebida:** essas pistas iniciam a narrativa. Quando parecem ruído de textura, o visitante percebe atmosfera, mas perde precisão. A transcrição semântica protege acessibilidade estrutural, não a leitura visual do frame.
- **Correção recomendada:** preservar H1, quebra, accent, posição e composição. Em futura correção tipográfica, aumentar somente pisos de terminal/pistas e contraste do prompt, com calibração específica para 1024 e baixa altura.
- **Esforço:** pequeno a médio; 2–3 horas com inspeção dos plates.
- **Impacto:** desktop intermediário, baixa altura e mobile fallback.

### IMPORTANT — TY-07: pesos intermediários demais não formam uma hierarquia confiável

- **Seção:** experiência inteira.
- **Selector/componente:** regras de headings, labels, perfis, botões e marca.
- **Problema observável:** quinze valores de peso aparecem entre 350 e 650, incluindo diferenças visualmente mínimas como 450/460/470/480 e 510/520/540/550. Em uma stack de sistema, vários podem mapear para o mesmo arquivo ou ser sintetizados.
- **Por que afeta qualidade percebida:** a intenção de hierarquia existe no código, mas não necessariamente na tela. Isso dificulta consistência, manutenção e futura troca controlada de fonte.
- **Correção recomendada:** reduzir a gramática a quatro papéis: regular 400, editorial médio 450/500 conforme suporte real, interface 500 e 600 para marca/ênfase rara. Confirmar os pesos disponíveis antes de fixar números finais.
- **Esforço:** médio; 2–4 horas e comparação multiplataforma.
- **Impacto:** todos.

### IMPORTANT — TY-08: leads e corpos semelhantes recebem níveis de ênfase muito diferentes

- **Seção:** Mentalidade, Quem Somos, Empresas, Tutores e histórias.
- **Selector/componente:** `.mindset-editorial header > p:last-child`, `.about-content > p`, `.companies-editorial blockquote`, `.testimonial-card > p`, `.tutor-profile blockquote`, parágrafos de apoio.
- **Problema observável:** Quem Somos usa lead serifado de 28 px e seis linhas no desktop, enquanto contextos institucionais equivalentes ficam entre 14,2 e 17,3 px. Quotes serifados entre 21,6 e 23,2 px também competem com headings secundários.
- **Por que afeta qualidade percebida:** a serif deveria marcar voz humana ou reflexão, mas a amplitude de escala transforma alguns parágrafos em segundo headline. A repetição de grande ênfase reduz a distinção narrativa entre statement, evidência e explicação.
- **Correção recomendada:** definir dois papéis serifados: lead editorial e quote. Limitar lead a 20–24 px e quote a 18–22 px no desktop, com corpo sans estável de 16–18 px.
- **Esforço:** médio; 2–3 horas.
- **Impacto:** todos.

### IMPORTANT — TY-09: botões e labels interativos não compartilham um piso tipográfico

- **Seção:** Formações, Empresas, Tutores, carrossel e CTA.
- **Selector/componente:** `.formation-orbit-node span`, `.formation-mobile-pillar strong`, `.company-mark-name`, `.company-mark-sector`, `.tutor-selector button strong/small`, `.final-cta-primary`, `.final-cta-secondary`.
- **Problema observável:** labels principais variam aproximadamente de 10,7 a 13,1 px e auxiliares de 9,1 a 9,9 px. CTA usa 12,16 px, enquanto Tutores separa nome de 13,1 px e especialidade de 9,44 px. A densidade muda mais por origem do componente do que por função.
- **Por que afeta qualidade percebida:** controles equivalentes parecem pertencer a produtos distintos. Labels auxiliares longos perdem clareza justamente onde ajudam a escolher.
- **Correção recomendada:** adotar 13–14 px para ação/nome e 11–12 px apenas para complemento, sempre com contraste adequado. Manter ícones como apoio e impedir que a ação principal dependa de microcopy.
- **Esforço:** médio; 2–4 horas.
- **Impacto:** todos.

### POLISH — TY-10: eyebrow de Story Scroll foge da família mono

- **Seção:** Story Scroll.
- **Selector/componente:** eyebrow “A jornada” em `JourneySection.tsx` versus `.institutional-heading > p:first-child` e eyebrows das seções assimétricas.
- **Problema observável:** quase todos os eyebrows usam mono a 11 px e tracking 0,28 em; “A jornada” usa sans, 11 px e 0,30 em. “Progressão” usa mono 0,24 em.
- **Por que afeta qualidade percebida:** a pequena diferença é visível na passagem entre Hero e sistema editorial e não comunica uma função diferente.
- **Correção recomendada:** adotar o mesmo papel mono para eyebrows de seção e restringir tracking a uma faixa única.
- **Esforço:** pequeno; menos de 1 hora.
- **Impacto:** todos.

### POLISH — TY-11: tracking extremo aparece em ambos os extremos da hierarquia

- **Seção:** Hero, headings institucionais, CTA, eyebrows e metadados.
- **Selector/componente:** `.hero-copy h1`, headings com `-.045em` a `-.058em`, eyebrows com `.28em`/`.30em`.
- **Problema observável:** o H1 usa até 8,86 px entre letras e o CTA chega a -5,18 px. Esses extremos funcionam isoladamente, mas tornam o sistema dependente da fonte/fallback e amplificam irregularidades de kerning.
- **Por que afeta qualidade percebida:** precisão premium vem de intervalos controlados; extremos repetidos podem parecer styling aplicado por categoria, não direção óptica.
- **Correção recomendada:** preservar o tracking aprovado da Hero; limitar headings editoriais futuros a aproximadamente `-0.04em` e eyebrows a `0.18em–0.22em`.
- **Esforço:** pequeno a médio; 1–2 horas.
- **Impacto:** todos.

### POLISH — TY-12: ritmo vertical dos parágrafos não possui uma regra explícita

- **Seção:** Formações, Mentalidade, Quem Somos, Empresas, Tutores e CTA.
- **Selector/componente:** margens entre heading, apoio, princípios, blockquote e notas em `src/index.css`.
- **Problema observável:** apoios começam entre 1,35 e 2 rem após headings; princípios entre 2,75 e 5,5 rem; notas entre 1,6 e 2,2 rem. Parte da variação é composicional, mas não há regra que diferencie heading→lead, lead→body e body→metadata.
- **Por que afeta qualidade percebida:** diferenças pequenas acumuladas alteram a densidade de cada capítulo e dificultam perceber uma cadência editorial comum.
- **Correção recomendada:** documentar três intervalos, sem tokenização prematura: heading→lead, lead→conteúdo e conteúdo→nota. Preservar exceções apenas onde a composição assimétrica exige.
- **Esforço:** pequeno a médio; 1–2 horas.
- **Impacto:** todos.

## 3. Escala unificada proposta

Valores direcionais para uma futura implementação; não são autorização para troca de fonte ou redesign.

| Papel | Faixa proposta | Uso |
|---|---:|---|
| Hero display | manter implementação atual | H1 aprovado da Hero |
| Display narrativo | `clamp(3.25rem, 5vw, 4.75rem)` | abertura de Story Scroll e CTA, com uso raro |
| H2 editorial | `clamp(2.5rem, 4.6vw, 4.25rem)` | seções institucionais |
| H3 narrativo | `clamp(1.75rem, 3vw, 3rem)` | etapas e detalhes de formação |
| H3 de princípio/perfil | `clamp(1.0625rem, 1.5vw, 1.375rem)` | listas e painéis |
| Lead serifado | `clamp(1.25rem, 1.8vw, 1.5rem)` | reflexão/statement |
| Quote | `clamp(1.125rem, 1.5vw, 1.375rem)` | relatos e falas |
| Corpo grande | `1.0625rem–1.125rem` | apoio principal |
| Corpo | `0.9375rem–1rem` | explicação e princípios |
| Interface | `0.8125rem–0.875rem` | botões e nomes |
| Label | `0.75rem` | eyebrows e contexto essencial |
| Micro | `0.6875rem` | somente metadado dispensável/decorativo |
| Terminal | `0.6875rem–0.75rem`; mínimo compacto `0.625rem` | terminal visual |

## 4. Regras de line-height propostas

- Hero H1: manter `1.25`, pois o tracking amplo exige separação adicional e o equilíbrio foi aprovado.
- Display narrativo: `0.96–1.02`.
- H2 editorial: `1.00–1.08`.
- H3 narrativo: `1.05–1.15`.
- H3 de princípio/interface: `1.2–1.35`.
- Lead e quote serifados: `1.5–1.6`.
- Corpo e apoio: `1.65–1.75`.
- Labels/eyebrows: `1.3–1.5`.
- Botões: `1.2–1.35`, sem inferir número de linhas pela altura do target.
- Terminal: `1.35–1.45`, preservando separação entre respostas.

## 5. Regras de tracking propostas

- Hero H1: preservar os valores atuais aprovados por formato.
- Headings editoriais: `-0.025em` a `-0.04em`; evitar valores mais apertados que `-0.04em` sem revisão óptica.
- Corpo, leads e quotes: `normal`.
- Navegação: `0` a `0.02em`.
- Botões: `0.02em–0.04em`.
- Eyebrows: `0.18em–0.22em`, mono e caixa alta.
- Labels técnicos: `0.10em–0.16em`.
- Microcopy longa não deve usar tracking amplo para compensar tamanho pequeno.

## 6. Regras de max-width propostas

- Display central: `18–22ch`.
- Heading assimétrico: `13–17ch`; evitar colunas próximas de 9–11ch para frases longas.
- Lead serifado: `42–55ch`.
- Apoio principal: `55–68ch`.
- Corpo editorial: `55–70ch`.
- Quote: `28–42ch`.
- Metadata/nota: `45–60ch`, sem reduzir abaixo do piso de legibilidade.
- Botão: label principal em uma linha; complemento não deve determinar a altura da ação.

## 7. Recomendações responsivas

### 1440×900 e 1366×768

- Reduzir os tetos de Journey, Formações e CTA.
- Ampliar moderadamente as colunas de Quem Somos, Empresas e Tutores para eliminar linhas isoladas.
- Preservar H1, subheadline e composição da Hero; apenas terminal e pistas exigem estudo de legibilidade.

### 1280×720 e 1280×600

- Evitar que a escala baseada apenas em `vw` mantenha headings com 64–79 px em pouca altura.
- Aplicar uma consideração de baixa altura aos displays editoriais, não somente à Hero.
- Elevar o terminal acima de 9,2 px se o plate conservar área útil.

### 1024×768

- Tratar como primeiro formato editorial expandido, mas não como desktop amplo.
- Terminal a 8 px é insuficiente; headings de 51–63 px ainda são grandes para colunas estreitas.
- Preservar o fluxo e breakpoint de motion aprovados.

### 768×1024

- O estado tipográfico é o mais equilibrado da matriz: headings geralmente usam duas ou três linhas e a CTA cabe em uma.
- Usar este formato como referência intermediária para a futura interpolação.

### 430×932, 390×844 e 360×640

- Limitar H2 institucional a aproximadamente 40–44 px e CTA a aproximadamente 46–48 px.
- Corrigir a navegação abaixo de 9 px e estabelecer piso real para labels essenciais.
- Evitar headings de cinco linhas; ajustar escala/largura antes de considerar quebra manual.
- Manter corpos entre 15 e 17 px e garantir que notas contextuais não caiam abaixo de 12 px.

### 844×390

- Preservar o H1 compacto e seu equilíbrio em duas linhas.
- Elevar navegação de 8,8 px e subheadline de 9,6 px.
- Reduzir displays das seções seguintes por altura disponível, evitando consumir quase toda a viewport ao navegar por anchor.

### Zoom

- A inspeção automatizada não conseguiu alterar o zoom do Chrome enquanto o viewport explícito estava ativo; portanto, zoom de 200% não deve ser declarado aprovado.
- A matriz até 360 px oferece evidência de reflow estreito sem overflow, mas não substitui o gate manual de zoom em 200% e 400%.

## 8. Conjunto mínimo recomendado

Implementar somente após aprovação desta auditoria:

1. Definir se a stack sans de sistema é intencional antes de qualquer decisão de fonte.
2. Corrigir o piso e contraste da navegação mobile e da microcopy essencial.
3. Consolidar dois níveis de H2 e reduzir os tetos de Journey/CTA/institucional.
4. Recalibrar `max-width` e escala dos headings assimétricos para remover linhas isoladas, sem `<br>` manual.
5. Simplificar pesos para quatro papéis realmente suportados.
6. Unificar eyebrows em mono, 12 px e tracking controlado.
7. Definir papéis separados para lead serifado e quote.
8. Validar Hero terminal/pistas em 1024, baixa altura e fallback mobile sem alterar sua composição.
9. Executar QA manual de contraste e zoom 200%/400% antes da aprovação final.

Não é necessário trocar fonte, reescrever copy, alterar layout estrutural ou criar novos componentes para resolver os problemas observados.

## 9. Elementos que devem permanecer intocados

- conceito, enquadramento, posição e composição aprovada da Hero;
- quebra deliberada “UMA DECISÃO / MUDA TUDO.”;
- accent azul exclusivamente em “TUDO.”;
- proporção hierárquica entre H1 e subheadline da Hero;
- notebook, plates, luz, terminal como elemento narrativo e único pin;
- ordem semântica H1 → H2 → H3;
- arquitetura de três vozes: sans narrativa, mono funcional e serif humana;
- texto completo no DOM e transcrição acessível do terminal;
- copy de todas as seções;
- ausência de texto essencial dentro de assets;
- silêncio visual, espaço negativo e assimetria das composições;
- comportamento de motion aprovado no MS-01.

## Aspectos aprovados sem correção

- H1 da Hero permaneceu equilibrado em duas linhas nos dez viewports.
- “TUDO.” mantém accent claro sem competir com o restante da frase.
- Subheadline da Hero conserva largura contida e não cria órfãos nos formatos testados.
- Hierarquia semântica não salta níveis.
- Corpo principal usa line-height confortável e larguras majoritariamente adequadas.
- Serif permanece associada a voz, testemunho ou reflexão, não ao sistema inteiro.
- Nenhum viewport apresentou overflow horizontal.
- Não foi observado texto essencial cortado por altura ou largura fixa.
- Labels principais dos botões não alteraram a altura dos controles por wrapping.

## Validação e limites

Executado:

- leitura das fontes de verdade, regras criativas e estrutura tipográfica;
- inventário estático de todos os papéis tipográficos;
- inspeção semântica completa do DOM;
- matriz visual e métrica nos dez viewports solicitados;
- medição de tamanho, peso, tracking, line-height, largura, número de linhas e overflow;
- inspeção visual específica da Hero mobile, Empresas mobile e Hero desktop;
- verificação de wraps reais nos principais H2.

Pendente antes de implementar ou aprovar a direção final:

- zoom manual em 200% e 400%;
- aferição de contraste sobre pixels finais dos gradients/plates, além da análise de cores computadas;
- comparação multiplataforma da stack sans atual;
- revisão visual com reduced motion, que não muda os estilos tipográficos, mas altera quais estados ficam imediatamente visíveis.

## Resultado

O sistema atual já possui uma arquitetura editorial válida, mas ainda não uma escala plenamente dirigida. Há dois bloqueios de legibilidade — navegação mobile e microcopy essencial — e sete correções importantes concentradas em previsibilidade da fonte, escala, wraps, terminal, pesos, ênfase serifada e labels interativos. O menor caminho é consolidar papéis e pisos, não trocar fontes ou redesenhar seções.

## Registro de implementação aprovada — 01/08/2026

Status: concluída no recorte autorizado.

- TY-01: navegação da Hero recebeu piso de 10 px em mobile e baixa altura, sem mudança de posição, espaçamento negativo ou headline.
- TY-02: somente microcopy que sustenta compreensão, contexto ou decisão recebeu piso e contraste maiores; anotações estritamente decorativas permaneceram discretas.
- TY-04: os H2 editoriais passaram a consumir `--type-editorial-h2`, de 32 a 42 px, mantendo a Hero como ápice narrativo.
- TY-05: larguras máximas foram recalibradas, wrapping usa `balance` ou `pretty` conforme a frase e “a contribuir.” permanece como unidade de leitura sem alterar a copy nem inserir `<br>`.
- TY-09: ações e nomes interativos usam `--type-interactive` em 13 px, preservando pesos e tracking próprios até eventual aprovação de TY-07/TY-11.

Fora do escopo e sem alteração: TY-03, TY-07, TY-08, TY-10, TY-11 e TY-12. Nenhuma fonte, dependência, copy, composição, animação ou componente novo foi introduzido.

Validação final: lint, typecheck, build e `git diff --check` aprovados; matriz 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600 sem overflow horizontal, com nove seções presentes, navegação em pelo menos 10 px e papel interativo visível em 13 px.
