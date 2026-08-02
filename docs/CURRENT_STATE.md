# CURRENT_STATE.md

## Status

Sprint 5 em andamento: Motion Direction e o recorte aprovado de Typography Direction e Spatial Rhythm estão implementados, sem novas animações, seções, assets ou alterações de copy.

## Validações confirmadas

- `npm install`: aprovado.
- `npm run dev`: aprovado.
- `npm run lint`: aprovado.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado.
- Sprint 4: `npm run lint` e `npm run typecheck` aprovados durante a implementação.
- MS-01: `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` aprovados após os refinamentos.

## Fase atual

Sprint 5 — a linguagem de movimento foi consolidada. A Hero encerra sua entrada temporal no primeiro progresso real do scroll antes de a timeline cinematográfica assumir os elementos compartilhados. Scroll suave do navegador foi removido; motion editorial passa a iniciar em 1024 px; Tutores desloca conteúdo apenas por transform; e a baseline editorial foi documentada com exceções justificadas.

Companies Editorial Ticker substituiu integralmente o campo radial porque sua linguagem repetia as órbitas de Formações. Desktop usa um horizonte tipográfico contínuo de 76 segundos, com movimento CSS linear e um único conjunto interativo anunciado; a sequência clonada é decorativa e `aria-hidden`. Mobile e reduced motion evitam autoplay e usam a lista real com scroll horizontal nativo. Oito empresas, setores, introdução, ClubJobs e disclaimers institucionais permanecem preservados. A referência de marquee serviu apenas como conceito de fluxo e não foi copiada. Nenhum logo, asset remoto, dependência ou outra seção foi alterado.

MS-05 — Institutional Accuracy substituiu as oito empresas fictícias por Accenture, Avanade, Bradesco, BTG Pactual, Capgemini, Compass UOL, IBM e iFood, todas presentes na apresentação institucional pública do DevClub. A seção não declara parceria, vaga ou garantia de contratação. Quem Somos recebeu uma revisão textual mínima para explicitar prática, projetos, mentoria, comunidade, tecnologia e preparação para o mercado. ClubJobs passou a ser descrito de forma consistente como parte do ecossistema de oportunidades do DevClub, sem promessa de emprego. Layout, CSS, tipografia, motion, Hero, Story Scroll, componentes e assets permaneceram inalterados.

A fase final de entrega publicou o DevClub Experience em `https://devclub-experience-five.vercel.app/` e substituiu o README padrão React + Vite por uma apresentação pública do projeto. O documento diferencia projeto independente e posicionamento institucional, descreve conceito, jornada, arquitetura, decisões, performance, acessibilidade, conteúdo conceitual, execução, uso assistido de IA e autoria. O repositório público está configurado em `https://github.com/MaximillionDev1/Devclub-experience`, com URL real de clone, GIF de preview, Hero desktop e overview editorial válidos. O QA final de produção permanece aberto para Lighthouse, validação visual com `prefers-reduced-motion: reduce`, zoom de 200%/400% e perfil em dispositivo real.

MS-04 auditou a experiência completa como uma única jornada de luz, atmosfera e contraste. O sistema recebeu 94/100, sem BLOCKER ou IMPORTANT. Hero, accents, capítulos institucionais, CTA e Footer foram aprovados sem redesign; apenas LD-01, uma calibração opcional da continuidade dos gradientes já existentes entre Story Scroll e Formações, permanece documentado como POLISH. Nenhuma alteração de interface, asset, motion, tipografia, espaçamento ou copy foi executada. A matriz de dez viewports não apresentou overflow horizontal; a validação visual com `prefers-reduced-motion: reduce` ativo continua pendente porque o navegador disponível reportou somente o estado normal.

MS-03 consolidou envelopes immersive, compact e standard; limitou padding institucional em telas até 720 px de altura; reduziu somente a duração espacial do Story Scroll em baixa altura; removeu a dupla pausa antes de Formações; e aproximou os sistemas de Formações/Students de seus leads. Hero, timeline, seis passos, tipografia, CTA/Footer e sistemas internos das seções permaneceram intactos. SR-05, SR-06, SR-07, SR-09 e SR-10 seguem apenas documentados.

A seção Mentalidade usa um artefato DOM/CSS do mesmo universo da Hero, sem thumbnail, player, retrato, iframe ou recurso remoto. O vídeo oficial aparece somente como link externo secundário após o conteúdo completo no DOM.

A regressão MS-01 percorreu 1440×900, 1366×768, 1280×720, 1024×768, 1023×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600. Todas as nove seções permaneceram presentes, com um único pin e sem overflow horizontal. Scroll precoce e reverso da Hero, corte 1023/1024, anchors da Hero, retorno `#top`, estado ativo de Tutores e CTA foram confirmados. O navegador não expôs emulação de reduced motion; logs observados pertenciam exclusivamente a uma extensão do Chrome, não à aplicação.

Quem Somos combina statement institucional, contexto alinhado à prática, projetos, mentoria, comunidade, tecnologia e preparação para o mercado, além de quatro princípios: aprender construindo, evoluir acompanhado, transformar prática em portfólio e preparar para o mercado. Um arco parcial e um eixo de quatro pontos continuam a linguagem espacial de Formações sem repetir sua órbita ou interação.

A matriz visual foi executada em 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600. Desktop/tablet exibem órbitas e até cinco depoimentos em profundidade; abaixo de 901 px, formações usam trilha horizontal e o carrossel reduz progressivamente os vizinhos. Não há overflow horizontal após a correção específica para 390/360 px.

Quem Somos foi revalidada com reload individual na mesma matriz de dez viewports. Hero, Story Scroll, Formações, Mentalidade e Alunos permaneceram presentes, sem overflow, assets ausentes ou erros da aplicação.

Empresas usa oito nomes presentes na seção institucional pública “Nossos alunos trabalham em” do DevClub, organizados em um horizonte editorial tipográfico. Seleção, foco e hover atualizam um único detalhe de setor; desktop usa ticker lento e mobile usa scroll horizontal nativo sem autoplay. A seção não afirma parceria com o projeto, vaga, contratação futura ou resultado garantido.

A matriz de dez viewports foi repetida com reload individual. Não houve overflow, mídia remota, novo pin ou erro da aplicação; a âncora da Hero chegou ao topo exato de `#empresas`.

Tutores usa cinco perfis fictícios e um único painel compartilhado. A seleção por botões consome nome, iniciais, especialidade, statement, tipo de apoio e accent; desktop organiza as vozes em sequência vertical e mobile usa seletor horizontal. Não há retratos, perfis reais ou promessa de disponibilidade individual.

A matriz solicitada foi repetida para Tutores em 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600. Os cinco controles mantêm targets de 88–92 px, o perfil permanece legível, não há overflow, recurso remoto ou novo pin. Âncora, seleção repetida, Tab e reverse scroll foram confirmados.

O CTA final usa “A decisão continua sendo sua.”, uma passagem luminosa DOM/CSS e duas ações. “Quero me matricular” abre em nova aba o contato de matrícula no WhatsApp fornecido e verificado para esta etapa; “Rever a jornada” retorna nativamente a `#top`. A passagem incorpora a assinatura discreta `DEVCLUB //` e a frase “Onde começa o próximo passo.”, sem carregar o JPEG de referência, criar animação ou alterar sua geometria. Um footer mínimo mantém explícito o contexto de concurso.

A matriz solicitada foi repetida para o CTA em 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600. Links mantêm targets acima de 52 px, não há overflow, recurso remoto, erro da aplicação ou pin adicional. As duas ações, foco sequencial e reverse scroll foram confirmados.

Em paralelo, a geração de HERO-02 foi encerrada: v01 está arquivada como referência e v02 está rejeitada. A integração experimental desktop foi rejeitada e removida. A Hero definitiva voltou integralmente à composição CSS/DOM.

O blueprint cinematográfico em `docs/plans/006-hero-cinematic-blueprint.md` foi concluído e a direção criativa da Hero está congelada. Uma única timeline de scroll coordena transcript, cinco estados ambientais, push-in discreto no terço final e a passagem existente. A solução permanece integralmente CSS/DOM, sem mídia nova, e o Story Scroll não foi reescrito.

## Concluído

- auditoria estrutural inicial;
- estado final da Hero legível sem timeline;
- `prefers-reduced-motion` sem timeline de entrada ou cursor infinito;
- composições adaptadas para desktop, tablet, mobile, baixa altura e paisagem móvel;
- metadados essenciais em `pt-BR`;
- resíduos não utilizados do template removidos;
- script explícito de typecheck;
- Lenis adiado na Sprint 1, avaliado e removido na Sprint 2;
- ScrollTrigger registrado uma vez e integrado à Hero com `useGSAP`, escopo e cleanup;
- travessia híbrida com pin de 0,90 viewport no desktop, 0,68 no tablet e 0,55 no mobile;
- zoom máximo de 1,55 no desktop, 1,30 no tablet e 1,22 no mobile;
- seção provisória acessível com heading real;
- scroll nativo escolhido e Lenis removido do manifesto e lockfile;
- entrada, saída, retorno, orientação horizontal e refresh no meio da travessia validados no navegador.
- destino provisório substituído por jornada editorial com seis etapas;
- dados narrativos tipados e consumidos por `JourneySection` e `JourneyStep`;
- painel sticky complementar no desktop, sem novo pin;
- timeline única do Story Scroll, ativa somente a partir de 1024 px e sem reduced motion;
- fluxo natural para tablet e mobile;
- registro de GSAP, `useGSAP` e ScrollTrigger centralizado;
- matriz visual, retorno, saída, breakpoint e refresh intermediário validados.
- integração experimental de HERO-02-v01 validada nas nove dimensões-alvo;
- foto condicionada a `min-width: 1024px`, sem elemento de imagem abaixo desse breakpoint;
- resize contínuo corrigido para atualizar o pin sem overflow horizontal.
- implementação fotográfica experimental removida sem apagar os PNGs ou o histórico documental;
- Hero CSS/DOM restaurada exatamente ao estado estável anterior ao experimento.
- transcript da Parte A centralizado em configuração tipada e consumido pelo terminal visual e pela transcrição semântica;
- progressão `loading...` → `connecting mentors...` → `building projects...` → `opening possibilities...` → `ready.` dirigida pelo scroll;
- atmosfera e luz da tela sincronizadas aos mesmos checkpoints das mensagens;
- versão compacta sem pin adicional para mobile e baixa altura;
- estado reduced motion completo no CSS/DOM, sem digitação simulada, scrub ou cursor intermitente.
- timeline narrativa consolidada no mesmo ScrollTrigger que mantém o único pin da Hero;
- notebook interno fisicamente estável e push-in de câmera limitado a 1,10 no desktop, 1,06 no tablet e 1,04 no mobile;
- parede, luz ambiente, contraste periférico e glow da tela sincronizados aos cinco estados do terminal;
- direção final aprovada no Quality Gate e congelada sem vídeo, imagem ou asset adicional.

## Próxima etapa

1. Iniciar MS-03 — Spatial Rhythm, auditando intervalos e densidade antes de qualquer alteração.
2. Substituir o destino provisório do CTA quando uma URL institucional oficial for fornecida.
3. Validar visualmente a experiência completa com `prefers-reduced-motion: reduce` efetivamente ativo.
4. Medir LCP, CLS e bytes em ambiente de produção e dispositivo real.

## Marco — MS-02 tipografia aplicada no recorte aprovado (01/08/2026)

- TY-01, TY-02, TY-04, TY-05 e TY-09 implementados sem troca de fonte, copy, layout, componentes ou dependências;
- Hero preservada, com mudança limitada ao piso de 10 px da navegação em mobile e baixa altura;
- H2 editoriais consolidados em uma escala responsiva de 32–42 px e revisados sem `<br>`;
- microcopy essencial e nomes/ações interativos tornaram-se legíveis sem promover anotações decorativas;
- dez viewports revalidados sem overflow horizontal ou ausência de seções;
- TY-03, TY-07, TY-08, TY-10, TY-11 e TY-12 seguem apenas documentados.

## Problemas conhecidos

- HERO-01-v01 está aprovado visualmente, mas o PNG bruto possui 4.641.778 bytes e ainda não foi otimizado nem validado em crops responsivos reais.
- HERO-02-AWAKENING-v01 está aprovado visualmente, mas o PNG bruto possui 5.072.540 bytes e ainda não foi otimizado nem integrado.
- HERO-03-SIGNAL-v01 está aprovado visualmente, mas o PNG bruto possui 5.167.727 bytes e ainda não foi otimizado nem integrado.
- HERO-FINAL-01 não foi gerado: a submissão única com referência real foi recusada por exigir plano Basic ou superior; nenhum crédito foi consumido e não houve retry.
- A instância de navegador usada reportou `prefers-reduced-motion: false` e não expôs emulação de mídia.
- A performance não foi perfilada em dispositivo real.
- A URL institucional oficial do CTA ainda não foi fornecida; a ação primária usa fallback interno explicitamente documentado.
- HERO-02-v01 contém tela gerada e pequeno pseudo-branding no bezel; permanece somente como referência histórica.
- HERO-02-v02 altera a cena e introduz uma pessoa; está rejeitada e não deve ser integrada nem usada como referência.
- o build experimental entregava HERO-02-v01 como PNG de 2.688,17 kB; a referência foi removida do código de produção;
- os warnings GSAP específicos do modo fotográfico foram eliminados com a remoção da composição experimental;
- a instância continuou reportando `prefers-reduced-motion: false`, impedindo o gate visual obrigatório do estado reduzido.
- HERO-PLATE-01 foi encerrado sem geração: a tentativa Seedance 2.0 foi recusada antes do job e a direção final congelada não usa vídeo ou novos assets.

## Pendências

- validação visual com reduced motion ativo;
- validação de performance;
- definição dos assets finais;
- integração de ferramentas externas.

## Marco — Hero Pack integrado (31/07/2026)

- HERO-01, HERO-02-AWAKENING e HERO-03-SIGNAL integrados em câmera compartilhada com crossfades reversíveis;
- 24 derivados AVIF/WebP em quatro larguras; os três AVIF selecionados em 1440 px somam aproximadamente 61,15 kB;
- HERO-01 prioritário e estados seguintes carregados após o primeiro render;
- interface e transcript no DOM; plates estritamente decorativos;
- fallback CSS/DOM abaixo de 900 px ou 501 px de altura e estado reduzido estático completo;
- matriz de dez viewports, lint, typecheck, build e diff aprovados;
- os PNGs brutos permanecem somente como masters; LCP/CLS e reduced motion visual seguem como aferições adicionais em dispositivo real.
