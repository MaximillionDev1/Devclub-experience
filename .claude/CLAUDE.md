# DevClub Experience — Instruções permanentes

## Objetivo do projeto

Construir uma experiência web cinematográfica e editorial para o desafio DevClub.

A interface deve transmitir que uma pessoa comum pode iniciar uma jornada de transformação por meio da programação. A mesa e o notebook representam essa evolução. O visitante ocupa o papel de protagonista; a DevClub funciona como facilitadora.

## Fonte da verdade

Antes de alterar conceito, narrativa ou direção visual, leia:

- `docs/CREATIVE_BRIEF.md`
- `docs/CURRENT_STATE.md`
- `docs/DECISIONS.md`

Leia documentos adicionais somente quando forem relevantes:

- arquitetura: `docs/ARCHITECTURE.md`
- animações: `docs/ANIMATIONS.md`
- assets: `docs/ASSET_PIPELINE.md`
- apresentação: `docs/PRESENTATION_GUIDE.md`
- auditoria: `docs/CODE_AUDIT.md`

Não duplique todo o conteúdo desses documentos neste arquivo.

## Stack

Confirme as versões reais no `package.json` antes de implementar.

Stack planejada:

- React
- TypeScript
- Vite
- Tailwind CSS
- GSAP
- ScrollTrigger
- `@gsap/react`
- Lenis, apenas quando houver benefício real

Não instale ou atualize bibliotecas sem necessidade comprovada.

## Regras de implementação

- Preserve código funcional existente.
- Não reescreva arquivos inteiros sem necessidade.
- Prefira componentes pequenos, sem fragmentação artificial.
- Use nomes semânticos.
- Remova imports, estados e variáveis não utilizados.
- Evite `any`.
- Não deixe código comentado, placeholders esquecidos ou TODOs sem contexto.
- Execute lint, typecheck e build ao concluir uma etapa relevante.
- Corrija erros introduzidos pela alteração antes de encerrar.
- Não declare uma tarefa concluída sem validação objetiva.

## Context7

Use Context7 quando a implementação depender de uma API externa cuja assinatura, versão ou comportamento possa estar incerto.

Fluxo:

1. Leia a versão instalada no `package.json`.
2. Consulte apenas a documentação necessária.
3. Confirme a API correspondente à versão instalada.
4. Implemente.
5. Não atualize a dependência apenas para combinar com documentação mais recente.

Priorize consultas para:

- GSAP
- ScrollTrigger
- `@gsap/react`
- Lenis
- Tailwind CSS
- Vite
- React
- TypeScript

Não use Context7 para lógica interna simples já verificável no repositório.

## UI UX Pro Max

Use como consultor de:

- hierarquia
- tipografia
- espaçamento
- grid
- contraste
- consistência
- responsividade
- acessibilidade visual
- design tokens

Não permita que a skill redefina:

- narrativa
- protagonista
- direção de arte
- conceito cinematográfico
- ordem narrativa
- identidade central

O `CREATIVE_BRIEF.md` tem prioridade sobre sugestões genéricas de UI.

## Higgsfield

Use apenas para assets com ganho visual claro.

Não use geração para:

- textos
- botões
- terminal
- cursor
- conteúdo interativo
- elementos geométricos simples
- efeitos que funcionem melhor em CSS

Nunca exponha chaves ou tokens no front-end.

Antes de gerar, leia `docs/ASSET_PIPELINE.md`.

## Linguagem

Aplique revisão editorial do tipo Stop Slop em:

- textos da landing
- README
- roteiro
- documentação de apresentação

Evite:

- introduções vazias
- jargões genéricos
- exageros
- repetição
- excesso de travessões
- frases artificiais como “não é apenas X, é Y”
- afirmações não comprovadas

Não altere nomes técnicos, comandos, APIs ou citações para “humanizar” o texto.

## Controle de contexto

Não releia o repositório inteiro a cada etapa.

Antes de trabalhar:

1. leia `docs/CURRENT_STATE.md`;
2. localize os arquivos relacionados;
3. leia apenas dependências diretas;
4. consulte documentação externa somente quando necessário.

Antes de `/compact`:

1. atualize `docs/CURRENT_STATE.md`;
2. registre decisões relevantes;
3. registre pendências e próximo passo;
4. confirme o estado do build.

Não compacte durante investigação, bug ou implementação incompleta.

## Documentação obrigatória

Ao concluir uma etapa:

- atualize `docs/CURRENT_STATE.md`;
- registre decisões relevantes em `docs/DECISIONS.md`;
- atualize o documento especializado afetado;
- liste arquivos alterados;
- registre testes executados;
- informe pendências reais.

## Acessibilidade e movimento

- Respeite `prefers-reduced-motion`.
- Mantenha navegação por teclado.
- Preserve foco visível.
- Use HTML semântico.
- Não dependa apenas de cor para comunicar estado.
- Garanta contraste suficiente.
- Imagens decorativas devem ter `alt=""`.
- Elementos interativos precisam de nome acessível.

## Performance

- Prefira `transform` e `opacity` em animações.
- Evite layout thrashing.
- Faça cleanup de timelines, listeners e ScrollTriggers.
- Evite imagens maiores que o necessário.
- Defina dimensões de mídia para reduzir layout shift.
- Carregue apenas o necessário para a primeira dobra.
- Não adicione efeitos sem função narrativa.

## Regra de prioridade

Em caso de conflito:

1. funcionamento
2. acessibilidade
3. narrativa
4. clareza visual
5. performance
6. refinamento estético

Use a skill `/devclub-experience` em implementações, revisões visuais, animações, assets e preparação da entrega.
