# CURRENT_STATE.md

## Status

Sprint 4 em andamento: após Hero, travessia e Story Scroll, a página apresenta o ecossistema da formação Full Stack, uma pausa editorial sobre mentalidade e sete histórias de alunos.

## Validações confirmadas

- `npm install`: aprovado.
- `npm run dev`: aprovado.
- `npm run lint`: aprovado.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado.
- Sprint 4: `npm run lint` e `npm run typecheck` aprovados durante a implementação.

## Fase atual

Sprint 4 — Formações, Mentalidade e Alunos implementados. O ecossistema comunica nove pilares de uma única jornada Full Stack; uma reflexão sobre decisão e constância conecta formação e transformação; o carrossel usa sete relatos fictícios documentados.

A seção Mentalidade usa um artefato DOM/CSS do mesmo universo da Hero, sem thumbnail, player, retrato, iframe ou recurso remoto. O vídeo oficial aparece somente como link externo secundário após o conteúdo completo no DOM.

A matriz visual foi executada em 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600. Desktop/tablet exibem órbitas e até cinco depoimentos em profundidade; abaixo de 901 px, formações usam trilha horizontal e o carrossel reduz progressivamente os vizinhos. Não há overflow horizontal após a correção específica para 390/360 px.

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
- notebook interno fisicamente estável e push-in de câmera limitado a 1,12 no desktop, 1,08 no tablet e 1,04 no mobile;
- parede, luz ambiente, contraste periférico e glow da tela sincronizados aos cinco estados do terminal;
- direção final aprovada no Quality Gate e congelada sem vídeo, imagem ou asset adicional.

## Próxima etapa

1. Definir e implementar Quem Somos sem repetir o Story Scroll.
2. Planejar Empresas e Tutores como seções próprias; os destinos atuais são apenas continuação neutra.
3. Validar visualmente a experiência completa com `prefers-reduced-motion: reduce` efetivamente ativo.
4. Medir LCP, CLS e bytes em ambiente de produção e dispositivo real.

## Problemas conhecidos

- HERO-01-v01 está aprovado visualmente, mas o PNG bruto possui 4.641.778 bytes e ainda não foi otimizado nem validado em crops responsivos reais.
- HERO-02-AWAKENING-v01 está aprovado visualmente, mas o PNG bruto possui 5.072.540 bytes e ainda não foi otimizado nem integrado.
- HERO-03-SIGNAL-v01 está aprovado visualmente, mas o PNG bruto possui 5.167.727 bytes e ainda não foi otimizado nem integrado.
- HERO-FINAL-01 não foi gerado: a submissão única com referência real foi recusada por exigir plano Basic ou superior; nenhum crédito foi consumido e não houve retry.
- A instância de navegador usada reportou `prefers-reduced-motion: false` e não expôs emulação de mídia.
- A performance não foi perfilada em dispositivo real.
- Ainda não existem Quem Somos, Empresas, Tutores, CTA final ou footer; Formações e Alunos já estão implementados.
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
