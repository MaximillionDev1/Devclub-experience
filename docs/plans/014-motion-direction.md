# MS-01 — Motion Direction

## Objetivo

Auditar integralmente o movimento da DevClub Experience e definir o menor conjunto de refinamentos capaz de fazer Hero, Story Scroll, conteúdo institucional e interações parecerem dirigidos por uma única visão criativa, sem criar animações, substituir timelines funcionais ou alterar o conceito aprovado.

## Estado atual

- React 19.2.7, GSAP 3.15.0, `@gsap/react` 2.1.2 e ScrollTrigger compõem a infraestrutura de movimento.
- `src/lib/gsap.ts` centraliza o registro de plugins.
- A Hero possui uma timeline temporal de entrada e uma timeline cinematográfica ligada ao scroll, com o único pin da página.
- Story Scroll possui uma timeline desktop sem pin.
- Quem Somos, Empresas, Tutores e CTA possuem uma timeline desktop própria, sem pin, com `scrub`.
- Formações usa três loops CSS lentos; Alunos usa transições CSS por mudança de índice; Mentalidade permanece estática.
- Mobile simplifica ou remove timelines editoriais. Reduced motion impede a criação das timelines GSAP e desativa loops/transições no CSS.
- A preferência `prefers-reduced-motion: reduce` ainda não foi validada visualmente em um ambiente que a exponha de forma ativa.

## Escopo

Auditado:

- timing, easing, opacity, stagger, distância de reveal e scrub;
- entrada da Hero, narrativa pinada e passagem;
- Story Scroll e timelines editoriais;
- loops de Formações e transições de Alunos;
- microinterações de links, controles, empresas e tutores;
- transições entre seções, anchors, reverse scroll, breakpoints e reduced motion;
- cleanup, propriedades animadas e custo de renderização.

Fora do escopo da auditoria original:

- implementação de qualquer correção;
- novas animações, seções, dependências ou assets;
- redesign, alteração de copy ou modificação do conceito da Hero;
- substituição de timelines funcionais.

## Inventário de movimento

| Área | Mecanismo | Gatilho | Gramática atual | Reduced motion |
|---|---|---|---|---|
| Hero — entrada | GSAP temporal | montagem | `power2.out`, 0,65–1 s, deslocamentos 8–12 px | timeline não criada |
| Hero — narrativa | GSAP + ScrollTrigger | scroll pinado | `ease: none`, scrub 0,35/0,55/0,7, distância 0,7/1/1,35 viewport | timeline e pin não criados |
| Story Scroll | GSAP + ScrollTrigger | scroll desktop ≥1024 px | `power1.inOut`, scrub 0,55, deslocamento ±18 px | painel animado ausente |
| Formações | CSS keyframes | contínuo desktop | linear, 46/62/78 s, pausa em hover/foco | loops removidos |
| Alunos | transição CSS | seleção | transform 480 ms; opacity/borda 380 ms | transições removidas |
| Mentalidade | microtransição CSS | hover/foco | 180 ms ease | transições removidas |
| Quem Somos | GSAP + ScrollTrigger | scroll ≥901 px | `power1.out`, scrub 0,45, y 14–18 px, stagger 0,12 | timeline não criada |
| Empresas | GSAP + ScrollTrigger | scroll ≥901 px | `power1.out`, scrub 0,45, y 12–18 px, stagger 0,12–0,18 | timeline não criada |
| Tutores | GSAP + ScrollTrigger | scroll ≥901 px | `power1.out`, scrub 0,45, y 20/x 14 px, stagger 0,12–0,14 | timeline não criada |
| CTA final | GSAP + ScrollTrigger | scroll ≥901 px | `power1.out`, scrub 0,45, y 18 px, stagger 0,14 | timeline não criada |
| Navegação | CSS/browser | hover, foco e anchor | microtransições 180 ms + `scroll-behavior: smooth` | scroll e transições neutralizados |

## Diagnóstico por critério

### Timing e stagger

A família institucional já converge em durações de 0,44–0,75 s, stagger de 0,12–0,18 e scrub 0,45. A Hero é deliberadamente mais lenta e o carrossel mais tátil. A principal inconsistência não é a existência de velocidades diferentes, mas a ausência de uma regra explícita que explique quando usar 0,12, 0,14, 0,16 ou 0,18.

### Easing

`power1.out` domina os reveals editoriais; Story Scroll usa `power1.inOut`; Hero temporal usa `power2.out`; progressões ligadas diretamente ao scroll usam `none`. Essa distribuição é coerente com as funções. O ponto fora da gramática é a animação de padding em Tutores, que produz movimento de layout com `ease` genérico em vez de presença por transform ou cor.

### Opacity, blur e distância

Reveals usam `autoAlpha` e deslocamentos contidos de 8–20 px. Não existe blur animado. Sombras e glows são estáticos ou têm apenas opacity dirigida pelo scroll. A progressão é leve e adequada. Não há justificativa para acrescentar blur.

### Scrub e reverse scroll

Todos os ScrollTriggers usam `invalidateOnRefresh` e propriedades reversíveis. O scrub institucional é consistentemente 0,45; Story Scroll usa 0,55; Hero varia por formato. Essas exceções são narrativamente justificáveis. O risco de reverse scroll está na Hero: a timeline temporal de entrada e a timeline pinada escrevem simultaneamente em elementos compartilhados.

### Responsividade

Hero possui variantes desktop, tablet e compacta. Formações muda de órbita para trilha. As timelines institucionais param abaixo de 901 px, enquanto Story Scroll para abaixo de 1024 px. Cada fallback funciona, mas a faixa 901–1023 combina seções editoriais animadas com Story Scroll estático, criando uma mudança de densidade de movimento sem uma regra documentada.

### Reduced motion

A implementação é estruturalmente completa: timelines GSAP exigem `no-preference`, loops CSS são removidos, transições são neutralizadas globalmente e estados finais são restaurados explicitamente. Falta evidência visual com a preferência realmente ativa. Esse é um bloqueio de validação, não uma falha já comprovada de código.

## Achados

### BLOCKER — MD-01: duas timelines possuem as mesmas propriedades na Hero

- **Por que afeta qualidade percebida:** a entrada temporal e a narrativa por scroll podem disputar `opacity`, `x` ou `y` de `data-start-guide`, `data-hero-copy` e `data-scroll-hint`. Se o visitante rolar antes de a entrada terminar, a resposta pode depender da ordem de overwrite do GSAP, enfraquecendo reverse scroll e tornando o primeiro gesto menos dirigido.
- **Onde:** `src/components/hero/HeroScene.tsx`, entrada nas linhas 39–52 e timeline cinematográfica nas linhas 86–145.
- **Correção recomendada:** preservar ambas as sequências, mas estabelecer ownership exclusivo. A correção mínima é concluir ou interromper a entrada temporal no primeiro progresso real do ScrollTrigger antes de a timeline cinematográfica escrever nos elementos compartilhados; alternativamente, retirar da entrada as propriedades que a timeline de scroll também controla.
- **Esforço estimado:** pequeno a médio — 2 a 4 horas, incluindo teste de scroll precoce, retorno ao topo e reload no meio do pin.

### BLOCKER — MD-02: reduced motion está implementado, mas ainda não possui validação visual ativa

- **Por que afeta qualidade percebida:** o fallback reduzido é uma composição própria, não apenas ausência de tween. Sem vê-lo ativo, não há evidência de que plates, transcript, sticky, anchors e estados finais convivam corretamente em toda a experiência.
- **Onde:** media queries em `src/index.css` e todos os `gsap.matchMedia()`; pendência também registrada em `docs/CURRENT_STATE.md` e `docs/ANIMATIONS.md`.
- **Correção recomendada:** antes de qualquer aprovação integrada, executar a matriz crítica com `prefers-reduced-motion: reduce` efetivamente ativo: 1440×900, 768×1024, 390×844 e 844×390. Alterar código somente se o teste revelar defeito.
- **Esforço estimado:** pequeno — 1 a 2 horas de QA; implementação adicional indeterminada apenas se houver falha.

### IMPORTANT — MD-03: o scroll suave nativo não pertence ao mesmo sistema temporal dos ScrollTriggers

- **Por que afeta qualidade percebida:** `scroll-behavior: smooth` delega duração e curva ao navegador. Em saltos longos, principalmente atravessando a Hero pinada, a sensação de deslocamento pode variar por browser e competir com scrubs desenhados em GSAP.
- **Onde:** `src/index.css:9`; anchors da Hero, CTA e marca.
- **Correção recomendada:** decidir uma política única. A opção mínima e mais previsível é usar scroll nativo instantâneo (`auto`) para anchors e deixar o movimento exclusivamente sob o gesto do visitante e os ScrollTriggers. Não adicionar biblioteca nem scroll programático.
- **Esforço estimado:** pequeno — até 1 hora com reteste das seis âncoras e reduced motion.

### IMPORTANT — MD-04: a faixa de ativação editorial não é uniforme

- **Por que afeta qualidade percebida:** entre 901 e 1023 px, Quem Somos, Empresas, Tutores e CTA ganham reveals, enquanto Story Scroll permanece completamente estático. A mudança de linguagem ocorre por origem histórica dos componentes, não por uma decisão de direção registrada.
- **Onde:** `JourneySection.tsx:14` usa 1024 px; seções institucionais usam 901 px.
- **Correção recomendada:** escolher e documentar um único breakpoint de “motion editorial expandido”. A correção mínima preferível é 1024 px para todas as timelines editoriais, preservando tablet em fluxo estático e mantendo a Hero com sua adaptação própria.
- **Esforço estimado:** pequeno — 1 a 2 horas, incluindo 901, 1023 e 1024 px.

### IMPORTANT — MD-05: a interação de Tutores anima padding e provoca reflow

- **Por que afeta qualidade percebida:** o texto desloca pela alteração de padding em hover, foco e seleção. Além de mover layout, a mudança é mais “UI de lista” do que editorial e contrasta com o uso predominante de transform, opacity e cor.
- **Onde:** `src/index.css`, regras de `.tutor-selector button` e estados hover/focus/active.
- **Correção recomendada:** remover o deslocamento de padding. Manter somente cor, borda e marcador ativo; se deslocamento ainda for necessário, aplicá-lo ao conteúdo interno com transform, sem alterar a caixa.
- **Esforço estimado:** pequeno — até 1 hora com foco, hover e mobile.

### IMPORTANT — MD-06: os envelopes de reveal institucional derivam sem uma regra explícita

- **Por que afeta qualidade percebida:** Quem Somos inicia em `top 74%`, Empresas/Tutores em `top 76%` e CTA em `top 78%`; os finais variam entre 62%, 64% e 68%. A diferença é pequena isoladamente, mas cria entradas progressivamente mais tardias e comprimidas sem que essa desaceleração esteja formalizada.
- **Onde:** `AboutSection.tsx`, `CompaniesSection.tsx`, `TutorsSection.tsx` e `FinalCtaSection.tsx`.
- **Correção recomendada:** adotar `top 76%` → `bottom 64%`, scrub 0,45 como base editorial. Manter exceções somente quando a composição exigir e registrar o motivo; Quem Somos pode conservar maior extensão por possuir quatro princípios, e CTA pode manter entrada mais tardia se o silêncio final for confirmado visualmente.
- **Esforço estimado:** pequeno a médio — 2 a 3 horas de calibração e reverse scroll.

### POLISH — MD-07: o vocabulário de stagger ainda não está formalizado

- **Por que afeta qualidade percebida:** 0,12, 0,14, 0,16 e 0,18 aparecem próximos sem uma taxonomia. O resultado atual funciona, mas pequenos ajustes futuros podem ampliar a dispersão.
- **Onde:** timelines de Quem Somos, Empresas, Tutores e CTA.
- **Correção recomendada:** sem criar abstração ou helper, adotar uma regra simples na implementação futura: texto 0,12; grupos estruturais 0,14; campos densos no máximo 0,16. Reduzir Empresas de 0,18 para 0,16 somente se o QA confirmar sensação arrastada.
- **Esforço estimado:** pequeno — até 1 hora.

### POLISH — MD-08: a entrada remota do carrossel pode aparecer já no estado final

- **Por que afeta qualidade percebida:** a cada avanço, um card sai do conjunto de cinco e outro é montado diretamente no slot ±2. O centro e os vizinhos transitam bem, mas a nova borda pode surgir sem trajetória em viewports que ainda exibem opacity 0,2.
- **Onde:** `src/components/ui/stagger-testimonials.tsx` e regras `.testimonial-card[data-offset="±2"]`.
- **Correção recomendada:** não criar nova animação agora. Primeiro confirmar se o pop é perceptível em 1440 e 1366 px; se for, reduzir a opacity dos slots remotos ou ocultá-los, preservando a transição existente dos três slots relevantes.
- **Esforço estimado:** pequeno — 1 hora de QA e ajuste CSS.

### POLISH — MD-09: há uma transição de transform sem estado correspondente em Empresas

- **Por que afeta qualidade percebida:** a propriedade sugere uma intenção de movimento que não existe em hover, foco ou seleção, aumentando ruído de manutenção e tornando a gramática menos legível.
- **Onde:** `src/index.css`, `.company-mark { transition: ... transform 180ms ease; }`.
- **Correção recomendada:** remover `transform` da lista de transições. Não adicionar deslocamento.
- **Esforço estimado:** trivial — menos de 30 minutos.

### POLISH — MD-10: `will-change: transform` permanece ativo durante toda a página

- **Por que afeta qualidade percebida:** não muda o visual diretamente, mas mantém uma dica de composição para a câmera da Hero mesmo depois que ela sai de cena. Em uma página longa, a promoção permanente é desnecessária.
- **Onde:** `src/index.css:19`, `.hero-shared-camera`.
- **Correção recomendada:** medir antes de alterar. Se a camada permanecer promovida, aplicar `will-change` somente enquanto a timeline da Hero estiver ativa ou remover e comparar a estabilidade do push-in. Não generalizar a otimização.
- **Esforço estimado:** pequeno — 1 hora com perfil de camadas.

### POLISH — MD-11: documentação e código divergem nos valores finais da câmera

- **Por que afeta qualidade percebida:** a implementação usa escala 1,10 desktop e 1,06 tablet, enquanto trechos de `docs/ANIMATIONS.md` registram 1,12/1,08 e também mantêm números históricos de distância. Isso não altera o frame atual, mas impede calibração consistente e aumenta o risco de “corrigir” para um valor obsoleto.
- **Onde:** `HeroScene.tsx` e seções Hero/Travessia/Integração dos plates em `docs/ANIMATIONS.md`.
- **Correção recomendada:** após decidir que o código atual é a referência, consolidar um único quadro de valores vigentes e mover números substituídos para histórico.
- **Esforço estimado:** trivial — até 30 minutos.

## Aspectos aprovados sem correção

- Não há blur animado, parallax, partículas ou filtros pesados em timelines.
- GSAP anima predominantemente transform e opacity.
- Todos os componentes usam `useGSAP`, escopo, `gsap.matchMedia()` e `media.revert()`.
- Todos os ScrollTriggers usam `invalidateOnRefresh`.
- Existe somente um pin, pertencente à Hero.
- Story Scroll, Quem Somos, Empresas, Tutores e CTA revertem de forma determinística pelo scrub.
- As órbitas são lentas, lineares, pausáveis e removidas em reduced motion.
- O carrossel não possui autoplay e mantém resposta direta ao controle.
- Mentalidade funciona como pausa estática deliberada.
- Mobile não tenta comprimir as timelines desktop.
- O estado essencial permanece disponível no DOM sem animação.

## Conjunto mínimo de refinamentos proposto

Conjunto aprovado e executado:

1. Resolver ownership entre entrada temporal e timeline pinada da Hero.
2. Manter a validação visual de reduced motion como gate de QA separado.
3. Tornar anchors previsíveis removendo o smooth browser-dependent.
4. Unificar o breakpoint de motion editorial em 1024 px.
5. Remover a animação de padding de Tutores.
6. Calibrar uma única base editorial de trigger/scrub/stagger, preservando apenas exceções justificadas.

MD-10 e MD-11 foram incluídos na aprovação: a declaração permanente de `will-change` foi removida e os valores documentais foram sincronizados. MD-08 e MD-09 permanecem adiados. Nenhuma nova animação foi criada.

## Decisões

- A Hero permanece o único momento cinematográfico dominante.
- Diferenças de velocidade por função são preservadas; consistência não significa valores idênticos em toda a página.
- `power1.out` permanece a base editorial; `none` permanece reservado a progresso diretamente ligado ao scroll.
- Não será introduzido blur para “sofisticar” reveals.
- Não serão criados motion tokens, helpers ou abstrações antes de uma necessidade real.
- A implementação foi autorizada após a aprovação explícita do plano.

## Etapas

1. Inventariar timelines, transições e loops.
2. Comparar timing, easing, opacity, distância, stagger e scrub.
3. Auditar reverse scroll, responsividade, cleanup e reduced motion.
4. Classificar achados e propor o conjunto mínimo.
5. Aguardar revisão antes de alterar código.

## Validação

Executado na auditoria:

- leitura integral dos componentes com movimento;
- inventário por busca de GSAP, ScrollTrigger, transition, animation, blur e reduced motion;
- comparação entre código, arquitetura, decisões e documentação de animações;
- inspeção estática de cleanup, breakpoints, propriedades e estados finais.

Não executado durante a auditoria, por restrição daquela etapa:

- alteração de código;
- lint, typecheck ou build, pois somente documentação foi criada;
- QA visual de refinamentos, pois nenhuma correção foi implementada;
- emulação visual de reduced motion, ainda indisponível no ambiente registrado.

Executado após a aprovação:

- `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` aprovados;
- regressão integrada em 1440×900, 1366×768, 1280×720, 1024×768, 1023×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- todas as seções presentes, dimensões válidas, um único pin e nenhum overflow horizontal;
- 1023 px com estado editorial estático e 1024 px com timelines editoriais ativas;
- scroll precoce e reverso da Hero restaurando guide, copy e hint; anchors institucionais no topo exato e `#top` em `scrollY=0`;
- seletor de Tutores com padding constante, estado pressionado funcional e fallback tablet sem transform;
- `scroll-behavior: auto` e `will-change: auto` confirmados por estilo computado;
- console da aplicação sem erros; mensagens registradas pertenciam a uma extensão externa do Chrome.

Permanece pendente:

- validação visual com `prefers-reduced-motion: reduce` efetivamente ativo;
- profiling de composição e frame time em dispositivo real para confirmar o ganho da remoção de `will-change` fora do ambiente automatizado.

## Progresso

- [x] fontes de verdade e checklists lidos;
- [x] inventário completo realizado;
- [x] findings classificados;
- [x] conjunto mínimo proposto;
- [x] refinamentos aprovados;
- [x] implementação autorizada e concluída;

## Descobertas

- O sistema já possui uma gramática editorial próxima da unidade desejada.
- O maior risco não é excesso de efeitos, mas ownership concorrente dentro da Hero.
- A ausência de blur e de pins institucionais deve ser preservada.
- Reduced motion está bem coberto no código, porém continua sem evidência visual ativa.

## Resultado

Auditoria concluída e refinamentos aprovados implementados. Ownership da Hero, política de scroll, breakpoint editorial, progressão de Tutores, baseline de reveal, promoção de camada e documentação foram alinhados sem criar animações, alterar layout ou substituir timelines funcionais. MD-08 e MD-09 seguem fora deste recorte; reduced motion visual e profiling em dispositivo real continuam como gates de QA.
