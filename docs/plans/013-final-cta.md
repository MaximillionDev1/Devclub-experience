# CTA final

## Objetivo

Encerrar a experiência retomando a decisão apresentada na Hero e convidar o visitante a agir sem pressão comercial, com uma ação primária clara, retorno nativo ao início e fechamento institucional mínimo.

## Estado atual

- O fluxo termina em Tutores seguido por uma continuação neutra sem âncora.
- A Hero possui `id="top"`, disponível para a ação secundária.
- Não existe URL institucional oficial do DevClub verificada no repositório ou na documentação.
- React 19, TypeScript 6, GSAP e `@gsap/react` atendem à implementação sem dependência adicional.

## Escopo

Entra:

- seção semântica `id="comece"` após Tutores;
- statement final, apoio curto, ação primária e ação secundária;
- constante de destino primário explicitamente marcada como placeholder;
- passagem luminosa construída em DOM/CSS como único motivo visual;
- uma entrada contida, sem pin ou loop;
- footer mínimo com nome do projeto, contexto do concurso e ano atual;
- composição mobile própria e reduced motion estático.

Não entra:

- URL de produção inventada;
- pricing, escassez, depoimentos, newsletter ou sitemap;
- mídia, asset ou request remoto;
- redes sociais, links legais inexistentes ou nova dependência;
- alteração da Hero ou das seções anteriores.

## Arquivos relacionados

- criar `src/components/final-cta/FinalCtaSection.tsx`;
- alterar `src/App.tsx` e `src/index.css`;
- atualizar `TASKS.md`, `docs/CURRENT_STATE.md`, `docs/DECISIONS.md`, `docs/ARCHITECTURE.md`, `docs/ANIMATIONS.md`, `docs/CONTENT-SOURCES.md` e este plano.

## Decisões

- Usar “A decisão continua sendo sua.” porque devolve agência ao visitante e fecha diretamente a ideia central da Hero.
- Enquanto não houver URL oficial validada, `DEVCLUB_DESTINATION_PLACEHOLDER` aponta internamente para `#quem-somos`; não abre nova aba nem simula conversão.
- A ação secundária “Rever a jornada” usa `#top` e scroll nativo.
- A passagem luminosa é o único motivo visual: um contorno aberto com luz azul contida e calor lateral.
- Uma timeline revela texto, ações e passagem no desktop, sem pin. Mobile e reduced motion mostram o estado final.

## Etapas

1. Criar seção, ações e footer mínimo.
2. Integrar no fluxo e remover a continuação provisória.
3. Implementar composição, passagem e comportamento responsivo.
4. Implementar entrada com cleanup e reduced motion.
5. Atualizar documentação e validar.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- dez viewports solicitados;
- ações primária/secundária, teclado, foco, reverse scroll, resize, orientação e overflow;
- ausência de recursos remotos, novo pin e regressões.

## Progresso

- [x] pedido e estado atual inspecionados;
- [x] URL oficial pesquisada e arquitetura definida;
- [x] seção, ações e footer implementados;
- [x] animação e fallbacks implementados;
- [x] documentação atualizada;
- [x] validações técnicas executadas;
- [x] matriz visual e interativa executada.

## Descobertas

- A única URL oficial registrada é a do vídeo em Mentalidade; não há destino institucional validado para o CTA.
- A matriz confirmou links com 52–54,78 px de altura, zero overflow, passagem proporcional e somente o pin preexistente da Hero nas dez dimensões.
- A ação primária chegou a `#quem-somos`; a secundária restaurou `#top`, incluindo o estado pinado da Hero.
- A timeline respondeu ao reverse scroll reduzindo presença do headline, escala da passagem e linha de limiar.
- O console da aplicação permaneceu sem warnings ou erros; recursos remotos do CTA permaneceram ausentes.
- O navegador não expõe emulação de `prefers-reduced-motion`; o fallback foi revisado no código, mas o teste visual com a preferência ativa permanece pendente.
- `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` concluíram com código zero; o último reportou apenas avisos de normalização LF para CRLF.

## Resultado

O CTA final substituiu a continuação provisória depois de Tutores. Statement, ações, passagem luminosa e footer encerram a narrativa sem pressão comercial, URL inventada, mídia ou dependência. Desktop, mobile, teclado, dois destinos, reverse scroll e dez viewports foram aprovados sem overflow, request remoto, erro da aplicação ou novo pin.
