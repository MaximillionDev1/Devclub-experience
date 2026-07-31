# Story Scroll editorial

## Objetivo

Substituir o destino provisório por uma jornada editorial que mostre, em seis etapas legíveis e humanas, como direção, fundamentos, prática, projetos e comunidade conduzem à transformação de quem passa a construir com tecnologia.

## Estado atual

- A Hero e a travessia híbrida estão implementadas e devem ser preservadas.
- `JourneyPlaceholder` é uma seção provisória única, com heading e texto de continuidade.
- ScrollTrigger é registrado atualmente no módulo da Hero.
- A travessia usa um único trigger, pin curto e scroll nativo.
- Tablet, mobile e reduced motion já possuem políticas próprias na travessia.
- Não existem Story Scroll, conteúdo institucional definitivo, assets externos ou dependências adicionais.

## Escopo

### Entra

- seis etapas narrativas tipadas e realmente consumidas;
- composição editorial com texto em fluxo natural;
- painel tipográfico sticky apenas no desktop;
- uma única timeline/ScrollTrigger para a progressão visual desktop;
- fluxo direto em tablet, mobile e reduced motion;
- continuidade visual com o overlay da travessia e saída neutra;
- centralização do registro GSAP/ScrollTrigger;
- documentação e validações técnicas/visuais.

### Não entra

- formações completas, depoimentos, empresas, tutores, CTA final ou footer;
- conteúdo comercial definitivo ou métricas;
- assets do Higgsfield;
- novas dependências ou Lenis;
- refatorações fora de GSAP e jornada;
- commit ou push.

## Arquivos relacionados

- `src/App.tsx`;
- `src/lib/gsap.ts` (novo);
- `src/components/hero/HeroScene.tsx`;
- `src/components/journey/JourneyPlaceholder.tsx` (removido);
- `src/components/journey/JourneySection.tsx` (novo);
- `src/components/journey/JourneyStep.tsx` (novo);
- `src/components/journey/journey-data.ts` (novo);
- `src/index.css`;
- documentação da Sprint e este ExecPlan.

## Decisões

### Opção A — Painel fixo com etapas laterais

- **Coerência:** continua bem a sensação de entrada em um novo ambiente.
- **Impacto:** alto, com foco visual constante.
- **Clareza:** boa no desktop, mas pode separar texto e estado ativo.
- **Performance:** aceitável com um trigger, porém pin longo aumenta custo percebido.
- **Complexidade:** média a alta.
- **Desktop:** forte.
- **Tablet/mobile:** tende a comprimir ou exigir implementação paralela.
- **Reduced motion:** precisa desmontar o pin e reorganizar todo o fluxo.
- **Manutenção/prazo:** risco alto para esta Sprint.

### Opção B — Seções editoriais sequenciais

- **Coerência:** continuidade suave, mas reduz o contraste após a travessia.
- **Impacto:** moderado.
- **Clareza:** muito alta em qualquer largura.
- **Performance:** excelente, sem pin.
- **Complexidade:** baixa.
- **Desktop/tablet/mobile:** previsível e robusta.
- **Reduced motion:** funciona naturalmente.
- **Manutenção/prazo:** excelentes.
- **Trade-off:** pode parecer uma sequência editorial estática sem mudança visual suficiente.

### Opção C — Estrutura híbrida (escolhida)

- **Coerência:** mantém a atmosfera da travessia e depois devolve o visitante ao fluxo editorial.
- **Impacto:** alto no desktop, moderado e legível nas demais larguras.
- **Clareza:** textos permanecem na ordem do DOM; o painel é complementar.
- **Performance:** uma timeline, um trigger e somente transform/opacity.
- **Complexidade:** média e localizada.
- **Desktop:** painel sticky acompanha a progressão sem pin do ScrollTrigger.
- **Tablet/mobile:** painel é removido da composição e as etapas fluem diretamente.
- **Reduced motion:** conteúdo integral em sequência; nenhum trigger do Story Scroll.
- **Manutenção/prazo:** bom equilíbrio, sem acoplar cada etapa a um trigger.

**Escolha:** Opção C, por combinar mudança visual real e clareza sem prolongar artificialmente o scroll.

### Registro GSAP

O registro de `useGSAP` e `ScrollTrigger` será movido para `src/lib/gsap.ts`. Hero e Story Scroll importarão a mesma instância configurada, eliminando registro distribuído e dependência implícita da ordem de montagem.

## Etapas

1. Registrar alternativas, textos finais e arquitetura.
2. Criar dados tipados e componente de etapa.
3. Substituir o placeholder pela seção editorial.
4. Implementar painel desktop e timeline única.
5. Validar fluxo tablet/mobile/reduced motion.
6. Executar validações técnicas, estáticas e visuais.
7. Atualizar documentação com o resultado real.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- buscas por imports/variáveis/arrays/campos sem uso, `any`, logs, TODOs, triggers, timelines, dependências e placeholders;
- navegador em 1440×900, 1366×768, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- transição, progressão, retorno, saída, overflow, resize, orientação, refresh intermediário e reduced motion somente quando executados.

## Progresso

- [x] fontes, skill, referências e planos anteriores lidos;
- [x] três opções avaliadas e estrutura híbrida escolhida;
- [x] direção editorial e arquitetura definidas;
- [x] dados e componentes implementados;
- [x] timeline desktop implementada;
- [x] fluxos tablet/mobile/reduced motion implementados;
- [x] validações técnicas e estáticas aprovadas;
- [x] validação visual em movimento normal executada;
- [ ] reduced motion validado visualmente com a preferência ativa;
- [x] documentação concluída.

## Descobertas

- A jornada precisa assumir diretamente o fundo `#090d16` para continuar o overlay sem flash visual.
- CSS sticky oferece acompanhamento visual sem introduzir um segundo pin prolongado logo após a travessia.
- A primeira passagem visual mostrou o painel avançando antes do texto e a palavra “Fundamentos” cortada; o trigger foi alinhado ao contêiner das etapas, com um segmento por etapa, e a tipografia máxima do painel foi reduzida.
- A matriz nas nove dimensões confirmou `scrollWidth === clientWidth`, saída alcançável e retorno ao estado inicial.
- Desktop (1440, 1366, 1280 e 1024) exibiu painel e progressão; 768, 430, 390, 360 e 844×390 mantiveram painel oculto e artigos em fluxo.
- O refresh intermediário em 1024×768 preservou `scrollY`, geometria e um único pin da Hero; o scrub foi posicionado imediatamente no progresso correto.
- A troca 1024→768→1024 desmontou e recriou a timeline, sem novo pin ou overflow. A ferramenta voltou ao topo ao mudar a viewport, portanto não serviu como evidência de preservação da posição durante resize.
- A instância continuou reportando reduced motion `false`; o fluxo reduzido foi verificado por estrutura e condições, não visualmente.
- Não houve logs de warning/erro originados pela aplicação local.

## Resultado

Story Scroll editorial híbrido implementado. O placeholder foi removido, os seis textos vivem em dados tipados e os artigos permanecem acessíveis no DOM. Desktop utiliza painel sticky e uma timeline sem pin; tablet, mobile e reduced motion usam leitura direta. A saída neutra mantém o fundo e prepara futuras seções sem antecipar conteúdo institucional.

`npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` passaram. A busca estática confirmou registro único de ScrollTrigger, três timelines intencionais no total (entrada, travessia e Story Scroll), ausência de `any`, logs, TODOs, placeholder no código, campos mortos ou novas dependências. A validação visual normal foi executada nas nove dimensões; reduced motion ativo e performance em dispositivo real permanecem pendentes.
