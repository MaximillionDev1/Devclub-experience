# Quem Somos

## Objetivo

Explicar o DevClub como o ambiente que transforma uma decisão de mudança em um caminho estruturado, conectando formação técnica, prática, acompanhamento humano, comunidade e preparação profissional sem repetir as seções de Formações ou Mentalidade.

## Estado atual

- O fluxo atual é Hero, Story Scroll, Formações, Mentalidade, Alunos e continuação neutra.
- Formações apresenta nove pilares de uma única jornada Full Stack por meio de órbitas e um painel de detalhe.
- Mentalidade apresenta decisão e constância por meio de statement, três princípios e um artefato estático.
- `src/lib/gsap.ts` centraliza GSAP, ScrollTrigger e `useGSAP`.
- A Hero mantém o único pin narrativo principal; Story Scroll e novas seções não devem criar outro pin.

## Escopo

Entra:

- seção semântica `id="quem-somos"` entre Mentalidade e Alunos;
- statement institucional, texto estruturado e quatro princípios;
- arco parcial e linha de progressão como continuidade espacial da linguagem orbital;
- uma timeline desktop restrita a reveal e progressão visual, sem pin;
- fluxo estático em tablet/mobile e reduced motion;
- documentação e matriz de validação existente.

Não entra:

- cards de ícones, nova órbita completa ou repetição dos nove pilares;
- história do fundador;
- métricas, garantias, parceiros ou números não documentados;
- Empresas, Tutores, alteração da Hero ou item novo em sua navegação;
- assets ou dependências novas.

## Arquivos relacionados

- criar `src/components/about/AboutSection.tsx`;
- alterar `src/App.tsx` e `src/index.css`;
- atualizar `TASKS.md`, `docs/CURRENT_STATE.md`, `docs/DECISIONS.md`, `docs/ARCHITECTURE.md`, `docs/ANIMATIONS.md`, `docs/CONTENT-SOURCES.md` e este plano.

## Decisões

- Usar quatro princípios como uma sequência numerada editorial, não cards.
- O visual institucional será um arco incompleto com quatro pontos conectados por uma linha vertical, representando ambiente e evolução contínua sem duplicar as órbitas de Formações.
- A IA aparece como ferramenta de trabalho dentro de “Aprender construindo”, não como promessa ou protagonista.
- Uma timeline GSAP desktop revela statement, texto e princípios e progride a linha entre os pontos. Não haverá pin, loop ou state por frame.
- Não adicionar “Quem Somos” à navegação da Hero para preservar os quatro destinos já estabelecidos e evitar sobrecarga.

## Etapas

1. Implementar conteúdo e composição semântica.
2. Integrar entre Mentalidade e Alunos.
3. Implementar reveal/progressão desktop com cleanup e fallback estável.
4. Refinar desktop, tablet, mobile, baixa altura e reduced motion.
5. Atualizar documentação e executar validações.

## Validação

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`;
- 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- regressão visual de Hero, Story Scroll, Formações, Mentalidade e Alunos;
- scroll, retorno, resize, orientação, overflow, console e reduced motion quando disponível.

## Progresso

- [x] estado e responsabilidades adjacentes inspecionados;
- [x] direção e arquitetura definidas;
- [x] seção implementada;
- [x] animação e fallbacks implementados;
- [x] documentação atualizada;
- [x] validações técnicas executadas;
- [x] matriz visual executada.

## Descobertas

- O header da Hero já possui quatro destinos e não deve receber um quinto item para esta seção intermediária.
- A linguagem orbital pode continuar por um fragmento de arco e pontos de progressão sem repetir a interação ou a geometria de Formações.
- Reload individual por viewport evita que a geometria transitória do pin da Hero contamine a medição de overflow durante a matriz.
- Os dez viewports mantiveram `scrollWidth === clientWidth`; todas as seis seções possuem altura e assets válidos.
- O navegador não expõe emulação de `prefers-reduced-motion`; o fallback foi verificado no código, mas o teste visual com a preferência ativa permanece pendente.

## Resultado

Quem Somos foi integrada entre Mentalidade e Alunos com statement, contexto, quatro princípios e progressão visual própria. A seção não repete cards, órbitas ou fundador; mantém todo o conteúdo no DOM e não cria pin. Desktop, tablet, mobile, baixa altura e paisagem foram revisados na matriz completa, sem overflow ou regressão detectada. `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` passaram.
