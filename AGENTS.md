# AGENTS.md — DevClub Experience

## Missão

Construir uma página institucional cinematográfica e disruptiva para o DevClub, mantendo narrativa clara, qualidade técnica, acessibilidade, responsividade e performance.

O visitante é o protagonista da transformação.
A mesa e o notebook são os protagonistas visuais.
O DevClub funciona como guia, comunidade e ambiente de evolução.

## Fontes de verdade

Antes de implementar, consulte nesta ordem:

1. `AGENTS.md`
2. `PROJECT_BRAIN.md`
3. `TASKS.md`
4. `docs/CURRENT_STATE.md`
5. `docs/CREATIVE_BRIEF.md`
6. `docs/DECISIONS.md`
7. `docs/ARCHITECTURE.md`

Consulte documentos adicionais somente quando relacionados à tarefa:

- animações: `docs/ANIMATIONS.md`
- assets: `docs/ASSET_PIPELINE.md`
- auditoria: `docs/CODE_AUDIT.md`
- apresentação: `docs/PRESENTATION_GUIDE.md`
- vídeo: `docs/VIDEO_SCRIPT.md`

## ExecPlans

Para funcionalidades complexas, refatorações significativas ou tarefas que envolvam vários arquivos, crie e mantenha um ExecPlan conforme `PLANS.md`.

Para tarefas pequenas e isoladas, não crie plano desnecessário.

## Princípios permanentes

- Preserve código funcional quando puder ser evoluído.
- Não reescreva o projeto inteiro sem necessidade comprovada.
- Trabalhe por etapas pequenas, completas e verificáveis.
- Antes de grandes alterações, apresente ou atualize o ExecPlan.
- Não instale bibliotecas sem confirmar necessidade.
- Não faça commit ou push sem solicitação.
- Não execute comandos destrutivos.
- Não exponha credenciais.
- Atualize `TASKS.md` e `docs/CURRENT_STATE.md` depois de cada marco.
- Registre decisões importantes em `docs/DECISIONS.md`.
- Não declare validações que não foram executadas.

## Direção criativa

Preserve:

- notebook como potencial;
- cursor como decisão;
- luz como crescimento;
- mesa como realidade cotidiana;
- transformação progressiva;
- narrativa antes da venda;
- silêncio visual;
- composição antes dos efeitos;
- emoção antes da explicação.

Evite:

- RGB;
- estética gamer;
- chuva de código;
- partículas gratuitas;
- hologramas;
- neon excessivo;
- cards genéricos repetidos;
- dashboard;
- template SaaS;
- personagem humano como foco;
- texto essencial dentro de imagens;
- glow e blur excessivos;
- efeitos sem propósito.

## Stack

Confirme as versões no `package.json`.

Stack esperada:

- React
- TypeScript
- Vite
- Tailwind CSS
- GSAP
- ScrollTrigger
- `@gsap/react`

Não suponha a versão do Tailwind antes de verificar.

## React e TypeScript

- Evite `any`.
- Remova imports, variáveis, estados, props e tipos sem uso.
- Não silencie erros com casts arbitrários.
- Componentes devem ter responsabilidade clara.
- Não use React state para acompanhar frames de animação.
- Use refs estáveis.
- Evite abstrações prematuras.

## GSAP

- Use `useGSAP` quando aplicável.
- Use escopo.
- Garanta cleanup.
- Não crie timelines duplicadas.
- Não deixe ScrollTriggers órfãos.
- Prefira `transform` e `opacity`.
- Valide resize, mobile e reduced motion.
- A página deve continuar compreensível sem animação.

## Acessibilidade

Obrigatório:

- HTML semântico;
- foco visível;
- navegação por teclado;
- contraste adequado;
- textos alternativos;
- reduced motion;
- conteúdo essencial no DOM;
- nenhuma informação comunicada somente por cor.

## Performance

- Otimize imagens.
- Defina dimensões de mídia.
- Evite blur pesado.
- Evite filtros caros.
- Evite vídeos grandes sem necessidade.
- Faça cleanup de listeners e timelines.
- Não use efeitos apenas para preencher espaço.

## Validação

Use os scripts realmente existentes no `package.json`.

Quando disponíveis:

```bash
npm run lint
npm run typecheck
npm run build
```

Também valide:

- execução local;
- console;
- desktop;
- tablet;
- mobile;
- teclado;
- reduced motion;
- scroll;
- resize;
- CTA e links.

## Relatório ao concluir uma etapa

Informe:

1. o que foi concluído;
2. arquivos alterados;
3. decisões tomadas;
4. validações executadas;
5. problemas conhecidos;
6. pendências;
7. próximo passo.

## Produção visual

Para qualquer geração ou integração de asset:

1. leia `creative/README.md`;
2. leia a ordem de produção relacionada;
3. verifique `creative/ASSET-DEPENDENCY-TREE.md`;
4. aplique `creative/QUALITY-GATE.md`;
5. não gere nenhum asset sem ordem de produção;
6. não gere múltiplas variações sem aprovação;
7. registre prompts e resultados em `creative/09-ASSET-LIBRARY.md`.