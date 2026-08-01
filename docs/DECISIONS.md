# DECISIONS.md

## ADR-001 — Mesa e notebook como protagonistas visuais

**Status:** aceita.

**Decisão:** não mostrar uma pessoa. Mostrar apenas os objetos e vestígios de presença.

**Motivo:** permite identificação ampla e evita uma narrativa presa a um personagem específico.

## ADR-002 — DevClub como guia

**Status:** aceita.

**Decisão:** o visitante é o protagonista; o DevClub oferece direção, mentoria e comunidade.

## ADR-003 — Uma única experiência cinematográfica principal

**Status:** aceita.

**Decisão:** concentrar o maior impacto na Hero e na travessia, usando o restante da landing de forma editorial e leve.

**Motivo:** preservar performance, ritmo e prazo.

## ADR-004 — Codex como agente principal

**Status:** aceita.

**Decisão:** usar Codex no VS Code e/ou aplicativo, guiado por `AGENTS.md`, skill local, ExecPlans e documentação viva.

## ADR-005 — Estado final estático e movimento progressivo

**Status:** aceita.

**Contexto:** conteúdo essencial da Hero começava oculto e dependia da execução da timeline GSAP.

**Decisão:** manter o estado final legível no DOM/CSS e permitir que o GSAP aplique estados iniciais apenas sob `prefers-reduced-motion: no-preference`. Em reduced motion, a timeline e o cursor intermitente não são criados.

**Trade-offs:** pode existir um instante do estado final antes de o JavaScript preparar a animação em conexões lentas, em troca de um fallback robusto sem JavaScript.

**Arquivos relacionados:** `src/components/hero/HeroScene.tsx`, `src/index.css`.

## ADR-006 — Avaliação do Lenis adiada para a travessia

**Status:** substituída pela ADR-008.

**Contexto:** Lenis está instalado, mas nenhuma parte do código-fonte depende dele e a travessia ainda não existe.

**Decisão:** não implementar nem remover Lenis na Sprint 1. Reavaliar sua necessidade na Sprint 2, comparando-o ao scroll nativo quanto a estabilidade, teclado, mobile e reduced motion.

**Alternativas:** remover agora ou adotar suavização antes da definição da travessia.

**Trade-offs:** a dependência permanece temporariamente instalada sem uso, evitando uma decisão prematura.

**Arquivos relacionados:** `package.json`, `docs/plans/002-estabilizacao-hero.md`.

## ADR-007 — Travessia híbrida entre Hero e destino

**Status:** aceita.

**Contexto:** a travessia precisava aproximar o notebook e expandir visualmente sua tela sem impor escala extrema, medições geométricas frágeis ou uma timeline desktop comprimida no mobile.

**Decisão:** combinar zoom moderado do notebook em um wrapper isolado com pequena expansão da tela e um overlay que assume a cena antes da seção provisória. Usar variantes próprias para desktop, tablet e mobile.

**Alternativas:** escalar toda a cena até preencher a viewport; expandir uma máscara calculada a partir dos limites exatos da tela.

**Trade-offs:** a transição não simula uma máscara pixel-perfect saindo da moldura, mas reduz acoplamento, custo de manutenção e risco em resize/orientação.

**Arquivos relacionados:** `src/components/hero/HeroScene.tsx`, `src/components/journey/JourneyPlaceholder.tsx`, `docs/plans/003-travessia-notebook.md`.

## ADR-008 — Scroll nativo e remoção do Lenis

**Status:** aceita.

**Contexto:** Lenis estava instalado sem uso. A Sprint 2 introduziu apenas uma travessia curta controlada por ScrollTrigger.

**Decisão:** manter scroll nativo e remover Lenis do manifesto e lockfile. Não há ganho perceptível ou requisito técnico que justifique sincronização, listeners e política adicional de acessibilidade.

**Alternativas:** integrar Lenis ao ticker do GSAP e ao `ScrollTrigger.update()`.

**Trade-offs:** não há suavização artificial; em troca, preservam-se comportamento esperado, teclado, mobile, reduced motion e menor superfície de falha.

**Arquivos relacionados:** `package.json`, `package-lock.json`, `docs/plans/003-travessia-notebook.md`.

## ADR-009 — Story Scroll editorial híbrido

**Status:** aceita.

**Contexto:** seis etapas precisavam produzir progressão visual sem repetir cards, prolongar pinning ou comprimir uma experiência desktop no mobile.

**Decisão:** manter os textos em seções editoriais sequenciais e adicionar, somente no desktop, um painel tipográfico sticky controlado por uma única timeline/ScrollTrigger sem pin. Tablet, mobile e reduced motion usam o conteúdo em fluxo natural.

**Alternativas:** painel fixo com pin durante toda a jornada; seis seções sequenciais sem painel ou progressão visual compartilhada.

**Trade-offs:** o painel não aparece abaixo de 1024 px, reduzindo impacto visual nessas larguras em troca de leitura direta, menor duração e ausência de sobreposição.

**Arquivos relacionados:** `src/components/journey/JourneySection.tsx`, `src/components/journey/JourneyStep.tsx`, `src/components/journey/journey-data.ts`, `docs/plans/004-story-scroll.md`.

## ADR-010 — Registro GSAP centralizado

**Status:** aceita.

**Contexto:** Hero e Story Scroll utilizam a mesma instância de GSAP e ScrollTrigger.

**Decisão:** registrar `useGSAP` e ScrollTrigger uma única vez em `src/lib/gsap.ts` e importar essa configuração nos componentes animados.

**Trade-offs:** cria um módulo compartilhado pequeno, mas elimina registro distribuído e dependência implícita da ordem de montagem.

**Arquivos relacionados:** `src/lib/gsap.ts`, `src/components/hero/HeroScene.tsx`, `src/components/journey/JourneySection.tsx`.

## ADR-011 — Encerramento de geração e base HERO-02

**Status:** aceita.

**Contexto:** HERO-02-v01 preserva a composição utilizável, mas contém uma tela gerada e pequeno pseudo-branding. A tentativa v02 alterou enquadramento, objetos e ambiente e introduziu uma pessoa. As operações Higgsfield disponíveis aceitam referência, mas não expõem máscara, força de edição, criatividade ou preservação estrutural.

**Decisão:** selecionar `creative/outputs/images/HERO-02-v01.png` como base approved-for-integration, rejeitar HERO-02-v02 e encerrar novas gerações de IA para HERO-02. Tratar tela e pseudo-branding em camadas DOM/CSS durante a integração.

**Alternativas:** nova geração text-to-image; nova edição por referência sem controles de preservação; usar HERO-02-v02.

**Trade-offs:** pequenos artefatos do teclado podem permanecer no bitmap, mas evita-se novo gasto e preserva-se a cena mais coerente. A aprovação final dependerá da integração visual e responsiva.

**Arquivos relacionados:** `creative/09-ASSET-LIBRARY.md`, `creative/production/OP-001-HERO-BASE-IMAGE.md`, `creative/outputs/images/HERO-02-v01.png`, `docs/plans/005-hero-asset-integration.md`.

## ADR-012 — Camada de mídia absoluta para integração de HERO-02-v01

**Status:** substituída pela ADR-013.

**Contexto:** o bitmap precisa coexistir com terminal, cursor, entrada e travessia já implementados no DOM. A perspectiva da tela e os reparos do bezel devem permanecer vinculados às mesmas transformações da imagem.

**Decisão:** testar HERO-02-v01 como `<picture>/<img>` decorativo em uma camada absoluta com dimensões intrínsecas e sistema de coordenadas compartilhado por máscara e tela DOM. Usar a imagem somente a partir de 1024 px inicialmente; tablet estreito, mobile e paisagem móvel mantêm a composição CSS/DOM atual.

**Alternativas:** background full-bleed; imagem em frame isolado; substituir o fallback atual em todos os breakpoints.

**Trade-offs:** exige calibração percentual da tela e da máscara por breakpoint, mas oferece melhor controle de carregamento, art direction, acessibilidade e transformações do que background CSS. Manter o fallback abaixo de 1024 px reduz alcance inicial do asset em troca de composição e legibilidade estáveis.

**Arquivos relacionados:** `src/components/hero/HeroScene.tsx`, `src/index.css`, `docs/plans/005-hero-asset-integration.md`.

## Modelo

## ADR-013 — Rejeição da integração fotográfica experimental para produção

**Status:** aceita e executada.

**Contexto:** HERO-02-v01 foi integrado experimentalmente somente a partir de 1024 px e validado nas nove dimensões-alvo. O alinhamento visual, o fallback móvel e o resize contínuo ficaram estáveis, mas o build ainda entrega o PNG bruto de 2.688,17 kB, a composição fotográfica registra warnings GSAP por ausência de `[data-desk]` e o ambiente não permitiu ativar `prefers-reduced-motion: reduce` para o gate visual obrigatório.

**Decisão:** não promover a integração experimental a produção, remover integralmente seu código e seus estilos e adotar a Hero CSS/DOM como implementação definitiva. Preservar HERO-02-v01 como `archived-reference` e HERO-02-v02 como `rejected` apenas para histórico.

**Alternativas:** aprovar visualmente e adiar performance e reduced motion; promover o PNG bruto; ignorar os warnings observados.

**Trade-offs:** a fotografia não entra em produção; em troca, a Hero recupera maior estabilidade, acessibilidade, performance e controle responsivo. Os arquivos visuais continuam disponíveis apenas como registro histórico.

**Arquivos relacionados:** `src/components/hero/HeroScene.tsx`, `src/index.css`, `creative/09-ASSET-LIBRARY.md`, `docs/plans/005-hero-asset-integration.md`.

## ADR-014 — Hero como curta interativo dirigido pelo visitante

**Status:** aceita, com implementação dividida em Parte A e Parte B.

**Contexto:** a Hero CSS/DOM atual é estável, mas ainda funciona principalmente como composição de entrada e travessia curta. A nova direção exige que ela prepare emocionalmente todo o restante da experiência e produza pertencimento antes de explicar o DevClub.

**Decisão:** estruturar a Hero como uma sequência de aproximadamente 24 segundos percebidos, dividida em silêncio, convite, pausa, resposta, transformação e passagem. Todo progresso narrativo será consequência do scroll; não haverá autoplay. A implementação reutilizará a arquitetura GSAP atual, manterá a composição CSS/DOM e preservará Story Scroll, acessibilidade, reduced motion e performance.

**Alternativas:** manter a Hero curta atual; usar autoplay temporal; introduzir vídeo ou asset fotográfico; aumentar o impacto com VFX decorativo.

**Trade-offs:** o pin e o QA ficam mais longos e a calibração de ritmo ganha complexidade. Em troca, a Hero se torna o centro emocional do produto sem adicionar mídia pesada, dependências ou estética artificial.

**Recorte aprovado:** a Parte A entrega transcript, resposta ao primeiro gesto, mensagens e atmosfera sincronizadas, preparação visual, mobile e reduced motion. Aproximação cinematográfica, nova passagem e portal final permanecem na Parte B. A travessia estável existente não é modificada pela Parte A.

**Arquivos relacionados:** `docs/plans/006-hero-cinematic-blueprint.md`, `src/components/hero/HeroScene.tsx`, `docs/ANIMATIONS.md`, `docs/CREATIVE_BRIEF.md`.

## ADR-015 — Congelamento da Hero cinematográfica CSS/DOM

**Status:** aceita e executada.

**Contexto:** a Parte A comprovou transcript e iluminação dirigidos pelo scroll. A tentativa de produzir uma placa em vídeo foi bloqueada antes da geração e a direção final determinou que o valor emocional deve vir de tipografia, luz, ritmo, composição e GSAP.

**Decisão:** congelar a Hero como abertura interativa CSS/DOM. O terminal é o centro emocional; cada resposta altera o ambiente; o notebook interno permanece imóvel; um único push-in discreto ocorre no terço final; a passagem e o Story Scroll existentes são preservados. Não haverá vídeo, imagem nova, asset novo ou nova proposta de redesign da Hero.

**Alternativas:** placa atmosférica em vídeo; fotografia como composição; câmera mais dramática; nova reconstrução visual.

**Trade-offs:** a cena depende de direção refinada em código e não de realismo fotográfico. Em troca, mantém controle responsivo, acessibilidade, performance, reversão e continuidade integral com o DOM.

**Arquivos relacionados:** `src/components/hero/HeroScene.tsx`, `src/components/hero/hero-transcript.ts`, `src/index.css`, `docs/plans/006-hero-cinematic-blueprint.md`.

## ADR-016 — Preflight bloqueante para HERO-FINAL-01

**Status:** aceita.

**Contexto:** a direção final autoriza exatamente uma geração Higgsfield e proíbe text-to-image sem a referência anexada. O catálogo confirmou GPT Image 2 com referência `image`, 16:9, 2K/4K e qualidade high. A referência foi posteriormente fornecida e confirmada como mídia Higgsfield.

**Decisão:** selecionar GPT Image 2 em 16:9, `count: 1`, 2K e high; congelar o prompt v01; realizar uma única submissão com a referência real. Como o backend respondeu `Requires basic plan or higher.` antes de criar o job, encerrar sem retry ou alternativa automática.

**Alternativas:** gerar apenas pelo texto; usar a imagem anterior HERO-02; escolher um modelo sem referência.

**Trade-offs:** nenhum asset foi produzido; em troca, nenhum crédito foi consumido e as restrições de referência, modelo e tentativa única foram preservadas.

**Arquivos relacionados:** `creative/production/OP-006-FINAL-HERO-WORKSPACE.md`, `creative/production/prompts/HERO-FINAL/v01.md`, `creative/09-ASSET-LIBRARY.md`.

## ADR-017 — Gate A aprovado para o Cinematic Asset Pack

**Status:** aceita.

**Contexto:** OP-007 define até 14 assets possíveis, mas condiciona qualquer produção a gates de necessidade e continuidade. A referência primária contém UI baked-in e não pode entrar diretamente na aplicação. HERO-01 precisava oferecer um plate limpo, realista e cinematográfico para o frame anterior à decisão.

**Decisão:** aprovar `creative/outputs/images/HERO-01-v01.png`, gerado em uma única tentativa com GPT Image 2, referência real, 16:9, 2K e qualidade high. O asset passa a ser a referência primária de HERO-02, mas não autoriza sua geração nem a integração do próprio HERO-01.

**Alternativas:** usar a referência com UI; reutilizar HERO-02-v01 arquivado; manter somente CSS/DOM; gerar todo o pack em lote.

**Trade-offs:** o plate entrega realismo e composição superiores, mas o PNG bruto de 4.641.778 bytes exige otimização e art direction responsiva antes de integração. A geração consumiu 7 créditos.

**Arquivos relacionados:** `creative/production/OP-007-CINEMATIC-ASSET-PACK.md`, `creative/production/prompts/HERO-01/final.md`, `creative/outputs/images/HERO-01-v01.png`, `creative/09-ASSET-LIBRARY.md`.

## ADR-018 — Gate B aprovado para HERO-02 The Awakening

**Status:** aceita.

**Contexto:** HERO-02 deveria ser o frame imediatamente posterior a HERO-01, mudando somente a primeira iluminação da tela. Continuidade de câmera, objetos e materiais era requisito bloqueante.

**Decisão:** aprovar `creative/outputs/images/HERO-02-AWAKENING-v01.png`, gerado em uma única tentativa com GPT Image 2 e HERO-01 como referência direta. A tela permanece vazia e recebe iluminação azul meia-noite contida, com spill mínimo no teclado. O asset passa a ser referência primária de HERO-03, sem autorizar sua geração.

**Alternativas:** simular todo o despertar em CSS; reutilizar HERO-01 sem mudança; aceitar uma regeneração com câmera/objetos alterados.

**Trade-offs:** a continuidade visual e a progressão física foram preservadas, mas o PNG bruto de 5.072.540 bytes requer otimização futura. A geração consumiu 7 créditos.

**Arquivos relacionados:** `creative/production/OP-007-CINEMATIC-ASSET-PACK.md`, `creative/production/prompts/HERO-02/final.md`, `creative/outputs/images/HERO-02-AWAKENING-v01.png`, `creative/09-ASSET-LIBRARY.md`.

## ADR-019 — Gate C aprovado e Hero Pack encerrado em três plates

**Status:** aceita.

**Contexto:** HERO-03 precisava elevar o sinal luminoso mantendo a cena estável. Após três frames, OP-007 exige decidir se HERO-04/HERO-05 justificam novas gerações ou podem ser obtidos em código.

**Decisão:** aprovar `creative/outputs/images/HERO-03-SIGNAL-v01.png`, gerado uma vez com GPT Image 2 e HERO-02 como referência direta. Encerrar a geração do Hero Pack em HERO-01, HERO-02 e HERO-03. Implementar Decision e Threshold futuramente com crossfade, gradientes, vinheta, escala, push-in e portal CSS/GSAP.

**Alternativas:** gerar HERO-04 e HERO-05; usar somente HERO-03; criar vídeo intermediário.

**Trade-offs:** código deverá interpolar os dois atos finais, mas evita pelo menos 14 créditos adicionais, dois PNGs pesados e risco de deriva de composição. HERO-03 bruto possui 5.167.727 bytes e também requer otimização antes de integração.

**Arquivos relacionados:** `creative/production/OP-007-CINEMATIC-ASSET-PACK.md`, `creative/production/prompts/HERO-03/final.md`, `creative/outputs/images/HERO-03-SIGNAL-v01.png`, `creative/09-ASSET-LIBRARY.md`.

## ADR-XXX — Título

**Status:** proposta | aceita | substituída.

**Contexto:**

**Decisão:**

**Alternativas:**

**Trade-offs:**

**Arquivos relacionados:**

## ADR-020 — Hero Pack responsivo em câmera compartilhada

**Status:** aceita e executada.

**Contexto:** três plates aprovados precisavam entrar em produção sem transferir 14,88 MB de PNGs, sem converter texto em bitmap e sem fragilizar mobile, acessibilidade ou o Story Scroll.

**Decisão:** entregar derivados AVIF/WebP em quatro larguras, usar HERO-01 como recurso prioritário e carregar HERO-02/HERO-03 progressivamente. Os três estados compartilham wrapper, enquadramento e transform; a timeline faz crossfades verdadeiros e reversíveis. Abaixo de 900 px ou 501 px de altura, a Hero mantém o fallback CSS/DOM. Reduced motion exibe um estado completo sem timeline.

**Alternativas:** carregar PNGs brutos; usar uma plate única; forçar o crop fotográfico em todas as dimensões.

**Trade-offs:** mobile não recebe a fotografia, mas preserva composição, legibilidade, transferência mínima e robustez. Os 24 derivados permanecem no bundle, enquanto o navegador solicita somente o formato e a largura selecionados.

**Arquivos relacionados:** `src/components/hero/HeroScene.tsx`, `src/components/hero/hero-plates.ts`, `src/index.css`, `creative/outputs/optimized/hero/`, `docs/plans/007-hero-plates-integration.md`.

## ADR-021 — Ecossistema Full Stack e relatos editoriais sem assets remotos

**Status:** aceita e executada.

**Contexto:** a Sprint 4 precisava tornar a jornada abstrata concreta sem representar tecnologias como cursos independentes, copiar a referência orbital ou introduzir renderização pesada. Os relatos ainda não possuem autorização para retratos ou fonte factual pública.

**Decisão:** representar nove pilares conectados a uma única formação Full Stack com DOM, CSS e ícones locais de `lucide-react`. Desktop/tablet usam três órbitas lentas; mobile usa trilha horizontal. Histórias usam sete relatos explicitamente fictícios, monogramas e carrossel por índice modular. Empresas e Tutores recebem apenas destinos de navegação em uma continuação neutra.

**Alternativas:** Three.js/canvas para a esfera; nove cards de cursos; logos e avatares remotos; mutação de array no carrossel; manter links da Hero apontando para `#jornada`.

**Trade-offs:** o diagrama privilegia clareza editorial em vez de profundidade tridimensional, e os monogramas são provisórios. Em troca, a solução mantém baixo custo, conteúdo no DOM, navegação por teclado, reduced motion completo e nenhum request remoto adicional.

**Arquivos relacionados:** `src/components/formations/`, `src/components/students/`, `src/components/ui/`, `src/index.css`, `docs/CONTENT-SOURCES.md`, `docs/plans/008-formations-and-students.md`.

## ADR-022 — Artefato editorial antes do vínculo com o vídeo

**Status:** aceita e executada.

**Contexto:** a reflexão oficial precisava conectar Formações e Alunos sem interromper o ritmo com um grande bloco de vídeo nem transformar a página em uma história sobre o fundador. Um poster com linguagem de thumbnail faria o visitante perceber primeiro a plataforma externa, não a DevClub Experience.

**Decisão:** criar uma pausa editorial estática com statement e três princípios. O quadro visual é um artefato DOM/CSS do mesmo universo da Hero — mesa, luz azul contida, calor lateral e marcações de decisão — sem affordance de player. A relação com o vídeo aparece somente depois, em link externo para a URL oficial.

**Alternativas:** thumbnail oficial; iframe sob consentimento; modal com embed tardio; card clicável com botão de play.

**Trade-offs:** o vídeo não toca dentro da página, mas o fluxo fica mais leve, acessível e coerente. Nenhum recurso do YouTube é carregado antes da decisão explícita de sair para o vídeo.

**Arquivos relacionados:** `src/components/mindset/MindsetSection.tsx`, `src/App.tsx`, `src/index.css`, `docs/plans/009-mindset-founder-story.md`.

## ADR-023 — Quem Somos como ambiente, não catálogo

**Status:** aceita e executada.

**Contexto:** a seção precisava explicar quem ajuda a transformar decisão em caminho sem repetir os nove pilares de Formações, os princípios pessoais de Mentalidade ou recorrer a quatro cards institucionais genéricos.

**Decisão:** organizar Quem Somos como statement assimétrico, contexto institucional e quatro princípios numerados. Um arco incompleto e um eixo progressivo continuam a linguagem espacial do ecossistema sem recriar órbitas. Uma timeline desktop revela o conteúdo e percorre os pontos, sem pin; tablet, mobile e reduced motion permanecem estáticos.

**Alternativas:** quatro cards com ícones; nova órbita interativa; manifesto longo; seção de métricas institucionais.

**Trade-offs:** o conteúdo exige leitura editorial e não oferece interação própria. Em troca, mantém hierarquia, silêncio visual, acessibilidade, baixo custo e distinção narrativa entre decisão, ambiente e histórias.

**Arquivos relacionados:** `src/components/about/AboutSection.tsx`, `src/App.tsx`, `src/index.css`, `docs/plans/010-quem-somos.md`.

## ADR-024 — Empresas como destinos conceituais, não prova social

**Status:** aceita e executada.

**Contexto:** a consequência profissional da jornada precisava ser comunicada sem logo wall, marquee, parceiros inventados ou promessa de contratação. Marcas totalmente passivas perderiam a oportunidade de contextualizar os diferentes ambientes profissionais.

**Decisão:** criar oito identidades fictícias originais, posicionadas em um campo editorial ao redor de “Talento em movimento”. Cada marca é um botão com nome, iniciais, setor e accent; foco, hover ou clique atualizam um único detalhe compartilhado. Mobile exibe grid e setores diretamente. Uma timeline desktop revela conexões e marcas sem pin ou loop.

**Alternativas:** logos reais; parede uniforme; marquee infinito; marcas não interativas; cards de empresas com descrição completa.

**Trade-offs:** a composição demanda disclosure documental e não constitui prova factual de parceria. Em troca, comunica variedade de destinos e preparo para colaboração sem afirmações indevidas ou requests externos.

**Arquivos relacionados:** `src/components/companies/company-data.ts`, `src/components/companies/CompaniesSection.tsx`, `src/App.tsx`, `src/index.css`, `docs/plans/011-empresas.md`.
