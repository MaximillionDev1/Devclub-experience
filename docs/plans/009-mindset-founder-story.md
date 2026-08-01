# Mentalidade e reflexão oficial

## Objetivo

Conectar o ecossistema da formação às histórias de alunos por meio de uma pausa editorial curta sobre decisão e constância, acompanhada por um artefato visual do mesmo universo cinematográfico da Hero e por um link secundário ao vídeo oficial da DevClub.

## Estado atual

- `App.tsx` organiza Hero, Story Scroll, Formações, Alunos e continuação neutra.
- Formações termina em um painel concreto de aprendizagem; Alunos começa com histórias de transformação.
- O projeto usa React 19, TypeScript 6, Tailwind CSS 4, CSS global e `lucide-react`.
- Não existe seção de Mentalidade nem carregamento de YouTube.

## Escopo

Entra:

- seção editorial entre Formações e Alunos;
- statement central e três princípios concisos;
- artefato DOM/CSS inspirado na luz, mesa, decisão e silêncio da Hero;
- link externo para o vídeo oficial `https://www.youtube.com/watch?v=gc7y-wXJvkU`;
- composição desktop assimétrica e fluxo mobile natural;
- foco visível e reduced motion.

Não entra:

- iframe, modal, autoplay, thumbnail, logo ou recursos do YouTube;
- biografia de Rodolfo Mori;
- download, reprodução ou edição do vídeo;
- alteração da Hero, Empresas ou Tutores;
- nova dependência ou asset gerado.

## Arquivos relacionados

- criar `src/components/mindset/MindsetSection.tsx`;
- alterar `src/App.tsx` e `src/index.css`;
- atualizar `TASKS.md`, `docs/CURRENT_STATE.md`, `docs/DECISIONS.md`, `docs/ARCHITECTURE.md`, `docs/ANIMATIONS.md`, `docs/CONTENT-SOURCES.md` e este plano.

## Decisões

- O frame é um artefato editorial não interativo; nenhuma affordance de player aparece sobre ele.
- O link para o vídeo fica separado e só revela a relação com YouTube depois da reflexão.
- A composição usa somente DOM/CSS, com luz quente lateral, feixe azul contido e marcações `FRAME 04`, `DECISÃO` e `PRÓXIMO PASSO`.
- Não haverá timeline ou animação de entrada: a seção funciona como pausa estática entre duas seções mais densas.
- No mobile, statement e princípios antecedem o artefato no próprio DOM.

## Etapas

1. Criar conteúdo e estrutura semântica.
2. Integrar a ordem narrativa no `App.tsx`.
3. Criar composição visual desktop/mobile e estados de foco/reduced motion.
4. Atualizar documentação.
5. Executar validações técnicas e visuais.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- desktop, tablet, mobile, paisagem, teclado, foco, link, overflow e reduced motion quando disponível;
- ausência de iframe, autoplay e requests iniciais ao YouTube.

## Progresso

- [x] direção editorial aprovada;
- [x] plano criado;
- [x] seção implementada;
- [x] documentação atualizada;
- [x] validações técnicas executadas;
- [x] validação visual executada em desktop e mobile com movimento normal.

## Descobertas

- A opção de link externo oferece a menor superfície de acessibilidade e o menor custo de rede.
- O artefato deve ser percebido antes como parte da experiência e somente depois como introdução a uma conversa externa.
- O teste mobile com reload em 390×844 confirmou fluxo editorial antes do frame, link com 44 px e ausência de overflow.
- Resize sequencial após o pin da Hero reteve a largura anterior em parte da matriz; o resultado não foi usado para aprovar resize contínuo.
- O navegador não expõe emulação de `prefers-reduced-motion`; a regra foi revisada no código, mas o estado visual ativo permanece pendente.

## Resultado

A seção foi integrada entre Formações e Alunos. O quadro é reconhecível como parte da DevClub Experience antes do vínculo externo e não contém linguagem visual de YouTube. Desktop e mobile foram revisados; estrutura semântica, link, ausência de iframe/mídia remota e console foram verificados. `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` passaram.
