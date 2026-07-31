# Auditoria inicial da DevClub Experience

## Objetivo

Produzir um diagnóstico técnico e criativo verificável da implementação atual e orientar a evolução da landing sem reescrever a base funcional. O resultado observável esperado é uma Hero cinematográfica, responsiva e acessível que preserve mesa e notebook como protagonistas, seguida por uma travessia e por conteúdo institucional editorial, com animações justificadas e funcionamento integral em reduced motion.

## Estado atual

- O projeto é uma aplicação Vite mínima com React e TypeScript.
- `App.tsx` renderiza somente `HeroScene` dentro de `main`.
- `HeroScene.tsx` constrói notebook, mesa, caneca, caderno, terminal e luz integralmente com HTML e Tailwind.
- A Hero possui uma timeline de entrada com GSAP e um tween infinito para o cursor, ambos criados dentro de `useGSAP` com escopo em `sceneRef`.
- Não há uso de ScrollTrigger nem de Lenis no código-fonte, embora Lenis esteja declarado em `package.json`.
- Ainda não existem travessia, Story Scroll, seções institucionais ou CTA interativo.
- A única responsividade explícita da Hero é fluida por unidades relativas e pela ocultação da caneca e do caderno abaixo de `sm`; não há composição própria documentada para tablet e mobile.
- Não há tratamento de `prefers-reduced-motion` no CSS ou na animação.
- `index.html` mantém `lang="en"`, título técnico e metadados mínimos, apesar de o conteúdo estar em português.
- `src/App.css`, `src/assets/react.svg`, `src/assets/vite.svg` e `src/assets/hero.png` não são importados pelo código atual. Os SVGs em `public` precisam ser confirmados quanto à função final; somente `favicon.svg` é referenciado pelo HTML.
- `README.md` ainda é o texto padrão do template Vite.
- `docs/ARCHITECTURE.md` e `docs/CODE_AUDIT.md` ainda são esqueletos e não descrevem a implementação real.
- O lint foi executado nesta auditoria e terminou sem erros.
- O ambiente não reconheceu a pasta como um repositório Git ao consultar `git status`; isso precisa ser confirmado fora desta sessão antes de depender de diff, commit ou push.

### Stack confirmada

Versões declaradas em `package.json`:

- React `^19.2.7` e React DOM `^19.2.7`;
- TypeScript `~6.0.2`;
- Vite `^8.1.1` e `@vitejs/plugin-react` `^6.0.3`;
- Tailwind CSS `^4.3.3` com `@tailwindcss/vite` `^4.3.3`;
- GSAP `^3.15.0`;
- `@gsap/react` `^2.1.2`;
- Lenis `^1.3.25`.

Versões instaladas observadas por `npm list --depth=0`:

- React e React DOM `19.2.8`;
- TypeScript `6.0.3`;
- Vite `8.1.5` e `@vitejs/plugin-react` `6.0.4`;
- Tailwind CSS e `@tailwindcss/vite` `4.3.3`;
- GSAP `3.15.0`;
- `@gsap/react` `2.1.2`;
- Lenis `1.3.25`;
- ESLint `10.8.0` e TypeScript ESLint `8.65.0`.

O `npm list` também reportou pacotes extraneous ligados a runtimes WASM. A origem e a necessidade deles devem ser verificadas antes de qualquer limpeza; não removê-los automaticamente.

### Pontos fortes a preservar

- A composição respeita o conceito central: mesa e notebook são protagonistas, sem personagem humano.
- Terminal, cursor e textos essenciais estão no DOM, alinhados ao pipeline de assets e à acessibilidade estrutural.
- A linguagem visual é sóbria e evita RGB, hologramas, partículas, chuva de código e cards SaaS.
- A Hero usa HTML semântico com `section`, `main`, `h1` e `aria-labelledby`.
- Elementos meramente decorativos possuem `aria-hidden` em vários pontos.
- O TypeScript está configurado com `noUnusedLocals` e `noUnusedParameters`.
- A animação usa `useGSAP`, escopo local e propriedades predominantemente adequadas (`transform`, `opacity`/`autoAlpha`).
- O layout usa dimensões fluidas e limitações máximas, oferecendo uma base razoável para adaptação responsiva.
- A implementação é pequena, legível e ainda não introduziu abstrações prematuras.

### Achados classificados

#### Bloqueador

1. **Experiência institucional incompleta.** Só existe a Hero; faltam travessia, Story Scroll, quem somos, formações, alunos, empresas, tutores, comunidade e CTA. Isso impede cumprir o Creative Brief e o arco narrativo.
2. **Reduced motion ausente.** A timeline inicial e o cursor infinito sempre executam. Isso viola um requisito obrigatório do repositório e impede considerar a Hero acessível/concluída.

#### Importante

1. **A Hero não comunica a decisão de forma interativa.** O cursor apenas pisca; não existe ação, controle ou transição que represente decisão e travessia.
2. **ScrollTrigger não está implementado.** Não há import, registro ou trigger; portanto, travessia e narrativa orientada por scroll ainda não existem.
3. **Lenis está instalado, mas sem uso.** A dependência aumenta superfície de manutenção sem função atual; decidir seu uso somente após definir a experiência de scroll e a compatibilidade com acessibilidade.
4. **Responsividade apenas implícita.** O código usa `vw`, `clamp`, `min()` e um breakpoint `sm`, mas não apresenta composições próprias para desktop, tablet e mobile nem tratamento de orientação e alturas reduzidas.
5. **Conteúdo visível insuficiente sem animação.** Terminal e mensagem inferior iniciam com classes `opacity-0`; se JavaScript falhar, ou se a política de movimento for tratada incorretamente, conteúdo narrativo permanece oculto.
6. **Sem foco ou CTA navegável.** A página atual não possui controle interativo, destino de navegação ou fluxo verificável por teclado.
7. **Documento em idioma incorreto.** `index.html` usa `lang="en"` para uma experiência em português, prejudicando tecnologias assistivas.
8. **Metadados provisórios.** Título técnico, ausência de descrição social/SEO e favicon ainda sem validação de marca reduzem a qualidade institucional.
9. **Hero não usa o asset `hero.png`.** Isso não é necessariamente um erro — a cena em CSS preserva flexibilidade —, mas o arquivo órfão deve ter sua intenção documentada ou ser removido em etapa autorizada.
10. **Documentação não representa a arquitetura real.** `ARCHITECTURE.md`, `CODE_AUDIT.md`, `CURRENT_STATE.md` e `TASKS.md` ainda indicam auditoria pendente ou conteúdo futuro.
11. **Estado Git não verificável no ambiente.** `git status` retornou que a pasta não é um repositório. Confirmar a existência/saúde do worktree antes da fase de implementação.

#### Refinamento

1. **Código morto do template.** `src/App.css`, `src/assets/react.svg` e `src/assets/vite.svg` não são usados; `README.md` ainda é o padrão do Vite.
2. **Assets públicos sem uso confirmado.** `public/icons.svg` não é referenciado; `favicon.svg` precisa ser revisado quanto à identidade visual.
3. **Seletores de animação baseados em strings.** O escopo reduz o risco, mas refs explícitas para alvos centrais podem tornar a timeline mais robusta durante a evolução.
4. **Tween infinito separado da timeline.** O cleanup está coberto pelo contexto de `useGSAP`, porém a política de pausa por visibilidade/reduced motion deve ser definida.
5. **Blur e sombras precisam de orçamento.** O `blur-2xl`, sombras amplas e gradientes são moderados no estado atual, mas precisam ser medidos em aparelhos móveis antes de expandir efeitos.
6. **A câmera do notebook é decorativa sem `aria-hidden` próprio.** Está inserida em um contêiner visual sem semântica; convém tornar explícita a intenção quando o componente for refinado.
7. **Configuração ESLint não é type-aware.** O lint atual passa, mas as regras não usam informação completa de tipos; avaliar custo/benefício sem instalar dependências adicionais.
8. **Não existe script `typecheck`.** O build inclui `tsc -b`, mas uma verificação isolada ajudaria o fluxo de validação sem gerar bundle.

## Escopo

### Entra neste plano

- consolidar arquitetura e responsabilidades dos componentes;
- estabilizar a composição estática e responsiva da Hero;
- implementar reduced motion antes de expandir animações;
- definir e implementar a decisão, a travessia e o Story Scroll em marcos separados;
- criar as seções institucionais exigidas;
- decidir conscientemente sobre ScrollTrigger e Lenis;
- auditar, otimizar e integrar somente assets com função narrativa;
- remover código e assets comprovadamente órfãos em etapa autorizada;
- completar acessibilidade, performance, documentação e validação visual.

### Não entra nesta auditoria inicial

- alteração do código da aplicação;
- instalação ou remoção de dependências;
- geração ou otimização de assets;
- implementação de animações ou seções;
- deploy, commit ou push;
- atualização imediata de `TASKS.md`, `CURRENT_STATE.md`, `DECISIONS.md` ou demais documentos além deste ExecPlan.

## Arquivos relacionados

### Existentes

- `package.json` e `package-lock.json`;
- `vite.config.ts`;
- `tsconfig.json`, `tsconfig.app.json` e `tsconfig.node.json`;
- `eslint.config.js`;
- `index.html`;
- `src/main.tsx`;
- `src/App.tsx`;
- `src/App.css`;
- `src/index.css`;
- `src/components/hero/HeroScene.tsx`;
- `src/assets/hero.png`;
- `src/assets/react.svg` e `src/assets/vite.svg`;
- `public/favicon.svg` e `public/icons.svg`;
- `AGENTS.md`, `PROJECT_BRAIN.md`, `TASKS.md` e `PLANS.md`;
- `docs/CURRENT_STATE.md`, `docs/CREATIVE_BRIEF.md`, `docs/DECISIONS.md` e `docs/ARCHITECTURE.md`;
- `docs/ANIMATIONS.md`, `docs/ASSET_PIPELINE.md` e `docs/CODE_AUDIT.md`.

### Criado nesta etapa

- `docs/plans/001-auditoria-inicial.md`.

### Prováveis arquivos futuros

Os nomes e limites devem ser confirmados durante cada marco, evitando arquitetura prematura. Áreas prováveis incluem componentes próprios para Hero, travessia, Story Scroll, conteúdo institucional e utilitários de preferências de movimento.

## Decisões

1. **Preservar a Hero atual como fundação.** Ela já materializa mesa, notebook, terminal, cursor e luz com uma composição sóbria. Evoluir é mais seguro e coerente do que reescrever.
2. **Tratar reduced motion antes da expansão narrativa.** É requisito estrutural, não acabamento; toda timeline futura dependerá dessa política.
3. **Manter texto e terminal no DOM.** Assets devem complementar a cena e nunca carregar conteúdo essencial.
4. **Concentrar o maior custo visual na Hero e na travessia.** As seções posteriores devem seguir abordagem editorial e leve, conforme ADR-003.
5. **Não adotar Lenis automaticamente.** Scroll nativo com ScrollTrigger deve ser o ponto de partida; Lenis só permanece se produzir ganho mensurável sem prejudicar teclado, reduced motion ou estabilidade.
6. **Não remover arquivos ou dependências durante a auditoria.** Itens órfãos serão tratados apenas após confirmação e em marco próprio.
7. **Não criar um grande componente único.** Separar responsabilidades conforme a narrativa surgir, sem antecipar abstrações genéricas.

## Etapas

### Marco 1 — Regularizar fundação e documentação

- confirmar saúde do worktree Git;
- corrigir idioma e metadados essenciais do documento;
- definir script de typecheck, se aprovado e compatível com a configuração atual;
- documentar arquitetura real e atualizar estado/tarefas após o marco;
- remover apenas resíduos de template comprovadamente sem uso.

Critério verificável: lint e typecheck/build passam; documentação descreve a aplicação real; nenhuma referência órfã permanece sem decisão registrada.

### Marco 2 — Consolidar a composição estática da Hero

- revisar hierarquia, espaço negativo, proporção e legibilidade;
- criar tratamentos próprios para desktop, tablet, mobile, orientação paisagem e alturas reduzidas;
- garantir conteúdo compreensível e visível sem animação;
- definir o papel de `hero.png` e dos assets públicos.

Critério verificável: a Hero funciona estaticamente em todos os breakpoints-alvo, sem overflow e com notebook como foco inequívoco.

### Marco 3 — Acessibilidade e política de movimento

- implementar `prefers-reduced-motion` com estado final legível e sem tween infinito;
- garantir ordem semântica, contraste, foco visível e alvos de toque adequados;
- introduzir uma ação real de decisão acessível por teclado e toque;
- garantir que nenhuma informação dependa apenas de movimento ou cor.

Critério verificável: navegação integral por teclado; reduced motion não oculta conteúdo nem bloqueia progressão; auditoria automatizada e manual sem falhas bloqueadoras conhecidas.

### Marco 4 — Decisão e travessia

- desenhar o momento de decisão com ação explícita;
- implementar a transição principal com GSAP e, se necessário, ScrollTrigger;
- assegurar escopo, cleanup, resize, orientação e alternativa mobile;
- manter duração percebida do storytelling inicial em até aproximadamente 30 segundos de interação.

Critério verificável: a travessia tem função narrativa clara, não trava scroll/teclado e degrada corretamente em mobile e reduced motion.

### Marco 5 — Story Scroll e conteúdo institucional

- definir etapas com mudança visual real;
- implementar quem somos, formações, alunos, empresas, tutores, comunidade e CTA;
- usar composição editorial leve fora do núcleo cinematográfico;
- manter textos no DOM e evitar cards repetitivos.

Critério verificável: todo o arco narrativo e conteúdo obrigatório estão presentes, navegáveis e compreensíveis sem animação.

### Marco 6 — Assets e performance

- inventariar função, proporção, resolução, perspectiva, iluminação, formato, fallback e destino de cada asset;
- gerar somente assets aprovados em tarefa futura explícita;
- otimizar dimensões, formatos e carregamento;
- medir custo de blur, sombras, timelines, pinning e suavização de scroll;
- remover dependências e assets sem função comprovada.

Critério verificável: mídia possui dimensões e fallback; não há asset/dependência órfão; métricas e testes em dispositivo confirmam fluidez adequada.

### Marco 7 — Validação e entrega

- executar lint, typecheck quando existir e build;
- validar execução local, console, resize, orientação e links/CTA;
- revisar desktop, tablet, mobile, teclado e reduced motion;
- completar README e documentos de auditoria, arquitetura, animação, assets, apresentação e vídeo;
- preparar deploy e entrega somente quando solicitados.

Critério verificável: checklist de entrega preenchido com evidências reais e sem erro conhecido bloqueador.

## Validação

### Executada nesta auditoria

- `npm run lint`: aprovado, sem erros reportados.
- `npm list --depth=0`: executado; confirmou versões instaladas e reportou pacotes extraneous.
- busca estática por GSAP, `useGSAP`, ScrollTrigger, Lenis, estados, logs, TODOs e referências aos assets: executada.
- inspeção estática integral dos arquivos de configuração, entrada, estilos globais, `App` e `HeroScene`: executada.
- `git status --short`: não executou com sucesso porque o ambiente não reconheceu a pasta como repositório Git.

### Necessária antes de concluir a implementação

- `npm run lint`;
- typecheck isolado, caso um script seja criado;
- `npm run build`;
- `npm run dev` e inspeção do console;
- revisão visual em larguras representativas de desktop, tablet e mobile;
- revisão em alturas reduzidas e orientação paisagem;
- navegação por teclado e inspeção de foco;
- verificação de contraste e semântica;
- teste com `prefers-reduced-motion: reduce`;
- teste de scroll, resize, mudança de orientação e retorno de rota/aba;
- verificação de CTA e links;
- perfil de performance em desktop e aparelho móvel;
- confirmação de ausência de timelines duplicadas, ScrollTriggers órfãos, listeners sem cleanup e layout thrashing;
- inspeção de dimensões, formatos, peso e fallback de todos os assets;
- validação de funcionamento com JavaScript/animação indisponível na medida aplicável.

## Progresso

- [x] fontes de verdade e referências especializadas lidas;
- [x] estrutura e configuração inventariadas;
- [x] versões declaradas e instaladas confirmadas;
- [x] React, TypeScript, Tailwind, GSAP e `@gsap/react` auditados estaticamente;
- [x] ausência atual de ScrollTrigger e uso de Lenis confirmada;
- [x] Hero, animações, assets, responsividade, acessibilidade e performance auditados no código;
- [x] código morto e referências sem uso mapeados;
- [x] conflitos com o Creative Brief e elementos a preservar registrados;
- [x] lint executado;
- [ ] validação visual em navegador e dispositivos;
- [ ] build atual executado;
- [ ] saúde do worktree Git confirmada;
- [ ] implementação dos marcos autorizada.

## Descobertas

- A base visual atual já está mais alinhada ao Creative Brief do que os assets residuais do template; preservá-la reduz risco criativo.
- O CSS global importa Tailwind 4 diretamente e a integração usa o plugin oficial do Vite; não há arquivo de configuração Tailwind separado, o que é compatível com essa abordagem.
- `App.css` contém estilos do template anterior e não é importado por `App.tsx`.
- A configuração TypeScript já impede locais e parâmetros sem uso, e o lint atual passa; não foram encontrados `any`, estados React, logs temporários ou TODOs no código-fonte inspecionado.
- A animação atual não usa ScrollTrigger nem acompanha frames em React state.
- O uso de seletores por atributo permanece limitado ao escopo do `useGSAP`, e o contexto fornece cleanup para a timeline e o tween criados dentro dele.
- A ausência de reduced motion é o maior débito técnico da implementação existente da Hero.
- O repositório contém `package-lock.json`, mas as versões instaladas estão acima de algumas versões mínimas declaradas, dentro dos intervalos permitidos; qualquer diagnóstico reproduzível deve considerar o lockfile como referência.
- A verificação visual do asset `hero.png` não foi concluída nesta sessão; sua presença e peso foram confirmados, mas sua função final permanece indefinida.

## Resultado

Auditoria inicial concluída em nível estrutural e estático, com lint aprovado. Nenhum código, dependência ou asset foi alterado; somente este ExecPlan foi criado. A implementação permanece deliberadamente pendente de autorização. Os próximos passos recomendados são o Marco 1 (fundação/documentação) e o Marco 2 (composição estática da Hero), mantendo reduced motion como requisito anterior a qualquer expansão das animações.
