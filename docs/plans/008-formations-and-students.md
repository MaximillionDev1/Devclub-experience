# Formações e histórias de alunos

## Objetivo

Adicionar, após o Story Scroll, um ecossistema acessível que comunique uma única formação Full Stack e um carrossel editorial de histórias de alunos, preservando a linguagem cinematográfica, o desempenho da Hero e composições próprias para desktop e mobile.

## Estado atual

- `App.tsx` renderiza somente `HeroScene` e `JourneySection`.
- A Hero está aprovada, congelada e possui quatro links que atualmente apontam todos para `#jornada`.
- Tailwind CSS 4.3.3 é carregado pelo plugin do Vite e por `@import 'tailwindcss'`; não existe arquivo de configuração Tailwind.
- O projeto usa React 19.2.7, TypeScript 6.0.2, GSAP 3.15.0 e imports relativos; não há alias `@/`.
- GSAP, ScrollTrigger e `useGSAP` são registrados uma vez em `src/lib/gsap.ts`.
- `src/components/ui/`, `docs/CONTENT-SOURCES.md` e `lucide-react` ainda não existem.
- Reduced motion já remove smooth scroll global, desativa animações CSS e impede as timelines existentes.

## Escopo

Entra:

- nove pilares tipados distribuídos em três órbitas;
- painel editorial compartilhado e seleção por mouse, toque e teclado;
- composição orbital desktop/tablet e sequência deliberada para mobile;
- sete histórias fictícias e realistas com avatares monograma;
- carrossel por índice ativo, controles anterior/próximo e setas do teclado;
- IDs `formacoes` e `alunos`, links futuros sem seções falsas e continuação neutra;
- documentação técnica, editorial e de animação.

Não entra:

- redesign da Hero;
- seções de Empresas ou Tutores;
- footer ou CTA final;
- imagens, logos remotos, retratos gerados, Three.js ou nova biblioteca de animação;
- promessas de contratação, salários, métricas ou duração não documentadas.

## Arquivos relacionados

Existentes a alterar:

- `src/App.tsx`;
- `src/components/hero/HeroScene.tsx`;
- `src/index.css`;
- `TASKS.md`;
- `docs/CURRENT_STATE.md`;
- `docs/DECISIONS.md`;
- `docs/ARCHITECTURE.md`;
- `docs/ANIMATIONS.md`;
- `package.json` e lockfile, apenas para `lucide-react`.

Novos:

- `src/components/ui/devclub-orbit-ecosystem.tsx`;
- `src/components/ui/stagger-testimonials.tsx`;
- `src/components/formations/FormationsSection.tsx`;
- `src/components/formations/formation-data.ts`;
- `src/components/students/StudentsSection.tsx`;
- `src/components/students/student-stories.ts`;
- `docs/CONTENT-SOURCES.md`.

## Decisões

- Usar CSS e DOM para o núcleo e as órbitas; SVG apenas para círculos decorativos, sem canvas ou loop JavaScript.
- Instalar `lucide-react`, ausente no manifesto, para ícones locais tipados e tree-shakeable.
- O item orbita dentro de um wrapper rotativo e seu conteúdo recebe contra-rotação CSS; foco/hover pausam o sistema inteiro.
- No mobile, trocar órbitas animadas por uma trilha horizontal selecionável, preservando o centro e o mesmo painel de detalhe.
- Manter o carrossel por `activeIndex`; posições visuais são índices modulares estáveis, sem mutação do array e sem duplicação.
- Usar monogramas abstratos locais, pois não existe ordem de produção aprovada para retratos.
- Links de Empresas e Tutores apontarão para a continuação neutra com IDs de destino futuros, sem implementar conteúdo dessas seções.

## Etapas

1. Criar modelos e componentes de formações e integrar a navegação.
2. Criar dados e carrossel de histórias com interação acessível.
3. Refinar estilos responsivos, estados de foco e reduced motion.
4. Atualizar documentação e revisar o diff.
5. Executar validações estáticas, build e matriz visual/interativa quando o navegador local estiver disponível.

## Validação

Comandos:

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- `git diff --check`.

Verificações:

- 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- teclado, foco, anterior/próximo, navegação reversa e cliques rápidos;
- resize, orientação, reduced motion e ausência de overflow horizontal;
- console, assets ausentes e requests remotos inesperados.

## Progresso

- [x] fontes de verdade e arquitetura inspecionadas;
- [x] decisões iniciais registradas;
- [x] ecossistema de formações implementado;
- [x] histórias de alunos implementadas;
- [x] navegação e continuação integradas;
- [x] responsividade e reduced motion revisados no código;
- [x] documentação atualizada;
- [x] validações técnicas executadas;
- [x] matriz visual e interativa executada em movimento normal.

## Descobertas

- Não existe alias de paths, portanto criar `@/` apenas para esta etapa aumentaria escopo sem benefício.
- A navegação compacta da Hero já comporta quatro itens, mas precisa de destinos semânticos distintos.
- O stylesheet global já contém a política reduzida; os novos componentes devem oferecer também layouts estáticos explícitos.
- A primeira passagem apresentou overflow em 390 e 360 px devido à largura baseada em viewport do card e ao espaçamento da navegação. A largura passou a respeitar o contêiner e a navegação ganhou regra compacta; a repetição confirmou `scrollWidth === clientWidth`.
- O navegador de validação não expõe emulação de `prefers-reduced-motion`; a implementação foi verificada no código, mas o gate visual com a preferência ativa continua pendente.

## Resultado

Formações e Alunos foram integrados entre o Story Scroll e uma continuação neutra. Os nove pilares comunicam uma jornada única e os sete relatos fictícios usam arquitetura estável, sem assets remotos. A matriz visual, navegação, foco, seleção, teclado, reversão e cliques rápidos foram testados em movimento normal. `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check` passaram. Reduced motion permanece pendente somente como validação visual efetivamente emulada.
