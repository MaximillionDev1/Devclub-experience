<div align="center">

# DevClub Experience

Uma experiência institucional interativa criada para apresentar o ecossistema DevClub por meio de narrativa, direção cinematográfica e desenvolvimento front-end.

Projeto independente desenvolvido por **Matheus Vinicius Rodrigues da Silva** para o desafio de página institucional do DevClub. Não representa o site oficial da empresa nem um repositório mantido pelo DevClub.

![React 19](https://img.shields.io/badge/React-19-0b1118?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript 6](https://img.shields.io/badge/TypeScript-6-0b1118?style=flat-square&logo=typescript&logoColor=3178C6)
![Vite 8](https://img.shields.io/badge/Vite-8-0b1118?style=flat-square&logo=vite&logoColor=646CFF)
![GSAP 3](https://img.shields.io/badge/GSAP-3-0b1118?style=flat-square&logo=greensock&logoColor=88CE02)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-0b1118?style=flat-square&logo=tailwindcss&logoColor=06B6D4)

</div>

> [!IMPORTANT]
> **Configuração pública antes da publicação**<br>
> Deploy público: pendente da etapa final de publicação.<br>
> Repositório público: pendente; o único token de configuração está no comando de clone e deve ser substituído antes de publicar o README.

## Preview

![Demonstração da experiência completa do DevClub Experience](docs/images/devclub-experience-demo.gif)

> Demonstração resumida da experiência narrativa da landing.

## Projeto online

- **Deploy público:** pendente da etapa final de publicação.
- **Código-fonte:** o remote Git ainda não está configurado neste workspace; a URL deve ser adicionada antes da publicação.

## Sobre o desafio

O desafio propõe uma página institucional capaz de apresentar formações, quem é o DevClub, alunos, empresas e tutores. Quando dados reais não estavam disponíveis, conteúdo fictício era permitido para a representação do conceito.

Em vez de tratar os requisitos como blocos independentes, este projeto os organiza em uma jornada conectada: decisão, aprendizado, prática, comunidade, mercado, mentoria e próximo passo. A representação está alinhada ao posicionamento institucional verificado de educação orientada ao mercado, desenvolvimento prático, trilhas de Front-end, Back-end, Full Stack e Mobile, ClubJobs e aproximação entre talentos de programação/IA e empresas. Isso não significa que cada trilha seja apresentada como um curso independente dentro desta interface.

## Conceito

Um notebook comum funciona como porta de entrada para algo maior. O visitante ocupa o papel de protagonista; a mesa representa sua realidade, o cursor representa decisão e a luz acompanha crescimento. A frase **“Uma decisão muda tudo”** abre uma narrativa em que o scroll deixa de ser apenas navegação e passa a representar participação, conduzindo o visitante de observador a construtor.

![Hero cinematográfica do DevClub Experience em desktop](docs/images/hero-desktop-1440.png)

> Hero cinematográfica construída como porta de entrada da experiência.

As referências foram usadas como filosofias de design, não como layouts a copiar: contenção e clareza da Apple, precisão de produto associada a Vercel e Linear, sensação de travessia de *Interstellar* e refinamento de transições do Framer. Não existe vínculo, endosso ou reprodução direta dessas marcas e obras.

## Experiência

1. **Hero cinematográfica:** apresenta a mesa, o notebook e a decisão que inicia a jornada.
2. **Story Scroll:** transforma o avanço do visitante em seis etapas de direção, fundamentos, prática, projetos, comunidade e construção.
3. **Formação Full Stack:** organiza nove pilares conectados em um ecossistema de aprendizado.
4. **Mentalidade:** cria uma pausa editorial sobre decidir o próximo passo antes de enxergar todo o caminho.
5. **Quem Somos:** posiciona o DevClub como ambiente de formação, prática, acompanhamento e evolução.
6. **Histórias de alunos:** representa diferentes pontos de partida e mudanças de percepção durante o aprendizado.
7. **Empresas:** apresenta empresas presentes no ecossistema institucional público do DevClub, sem sugerir contratação ou parceria com este projeto.
8. **Tutores:** apresenta mentoria como conversa, revisão e direção, não como entrega de respostas prontas.
9. **CTA final:** devolve a decisão ao visitante e encerra a experiência com uma passagem luminosa.

![Visão geral da experiência editorial do DevClub Experience](docs/images/experience-overview.png)

> Visão geral da experiência editorial após a Hero.

## Principais diferenciais

- três plates cinematográficos responsivos na Hero, integrados como ambiente decorativo;
- narrativa GSAP orientada por scroll, reversível e sem autoplay narrativo;
- conteúdo essencial, terminal e interface preservados no DOM semântico;
- composição mobile/fallback independente quando o recorte cinematográfico seria frágil;
- estratégia de reduced motion com estados finais independentes de scrub; implementação estrutural disponível, com validação visual ativa ainda no checklist final de QA;
- entrega responsiva de imagens em AVIF e WebP, com quatro larguras por plate;
- scroll nativo e um único pin, restrito à Hero;
- dados institucionais tipados e separados dos componentes;
- ecossistema, carrossel, empresas e tutores operáveis por teclado;
- motion apoiado em `transform` e `opacity`, sem vídeo, Three.js ou dependência 3D.

## Tecnologias

Versões instaladas no lockfile e confirmadas localmente:

| Tecnologia | Versão | Papel |
|---|---:|---|
| React | 19.2.8 | composição e estado das interações |
| TypeScript | 6.0.3 | contratos e dados tipados |
| Vite | 8.1.5 | ambiente de desenvolvimento e build |
| Tailwind CSS | 4.3.3 | utilitários do fluxo editorial |
| GSAP / ScrollTrigger | 3.15.0 | timelines e progressão por scroll |
| `@gsap/react` | 2.1.2 | escopo e ciclo de vida das animações |
| Lucide React | 1.28.0 | ícones locais de interface |
| HTML semântico / CSS responsivo | nativo | estrutura, acessibilidade e direção visual |

## Arquitetura

Os componentes são agrupados por capítulo narrativo. Dados repetíveis ficam em módulos tipados, o registro de GSAP é centralizado e cada timeline usa `useGSAP`, escopo local e cleanup. No recorte atual desta landing, o sistema visual e as respostas por breakpoint permanecem deliberadamente centralizados no stylesheet principal; é uma organização pragmática para o escopo presente, não uma arquitetura ideal para uma aplicação maior. Imagens geradas são estritamente decorativas: títulos, terminal, controles e conteúdo continuam no DOM. A mídia cinematográfica entra como progressive enhancement sobre um fallback funcional.

```text
src/
├── components/
│   ├── hero/
│   ├── journey/
│   ├── formations/
│   ├── mindset/
│   ├── about/
│   ├── students/
│   ├── companies/
│   ├── tutors/
│   ├── final-cta/
│   └── ui/
├── lib/
│   └── gsap.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Decisões técnicas

1. **Scroll nativo:** uma biblioteca de smooth scroll foi avaliada e removida porque a travessia curta não justificava outro ciclo de sincronização, listeners e regras de acessibilidade.
2. **Um único pin:** somente a Hero fixa a viewport. Story Scroll usa `sticky` no desktop e as demais seções permanecem no fluxo natural.
3. **Plates decorativos:** os ambientes gerados não carregam texto essencial. Terminal, copy e controles são camadas DOM controladas pela aplicação.
4. **Variantes responsivas:** os masters PNG permanecem no processo criativo; produção recebe AVIF/WebP em 1024, 1440, 1920 e 2560 px.
5. **Fallback mobile dedicado:** abaixo do gate cinematográfico, uma composição CSS/DOM evita crops instáveis e mantém a narrativa compreensível.
6. **Reduced motion estático:** quando `prefers-reduced-motion: reduce` está ativo, scrub, pin e loops são removidos; os estados finais permanecem disponíveis sem depender da animação para revelar conteúdo.
7. **Experimentos reversíveis:** integrações e gerações que introduziram peso, warnings ou perda de continuidade foram rejeitadas e documentadas, em vez de promovidas apenas porque já haviam consumido esforço.

## Performance

Evidências confirmadas no build local de produção:

- 24 derivados AVIF/WebP para os três estados cinematográficos;
- HERO-01 priorizado; HERO-02 e HERO-03 habilitados progressivamente após o primeiro render;
- `srcset`, `sizes` e dimensões intrínsecas declaradas para os plates;
- sem vídeo, Three.js, retratos remotos ou requests de logos de empresas;
- sem atualização de React state por frame de animação;
- bundle principal do último build: **351,59 kB de JavaScript (118,16 kB gzip)** e **71,19 kB de CSS (14,93 kB gzip)**;
- os três AVIF selecionados em 1440 px somam aproximadamente **61,15 kB** no output de build.

Esses números representam tamanhos emitidos pelo Vite, não métricas Lighthouse. LCP, CLS, INP e perfil em dispositivo real permanecem como validação final de produção.

## Acessibilidade

- hierarquia semântica de headings e seções identificadas por `aria-labelledby`;
- navegação, seletores, carrossel e ações acessíveis por teclado;
- foco visível nos elementos interativos;
- plates e ornamentos marcados como decorativos, com `alt=""` ou `aria-hidden`;
- transcrição completa do terminal e conteúdo essencial disponíveis no DOM;
- branch de `prefers-reduced-motion` sem dependência de scrub para compreensão;
- CTAs e controles principais dimensionados para interação por toque;
- estados ativos comunicados por texto, estrutura e atributos como `aria-pressed`, não apenas por cor;
- conteúdo final legível mesmo sem a execução das timelines.

A estrutura foi revisada em código e a navegação por teclado foi validada no navegador. A inspeção visual com reduced motion efetivamente ativo e zoom de 200%/400% ainda integra o QA final.

## Conteúdo e transparência

Parte do conteúdo foi criada especificamente para representar o desafio quando dados reais não estavam disponíveis:

- histórias e nomes de alunos são conceituais e não constituem depoimentos verificados;
- empresas exibidas foram selecionadas entre os nomes apresentados publicamente pelo DevClub como locais onde alunos atuam; isso não declara parceria com este projeto, vaga ou contratação futura;
- perfis de tutores são fictícios e não representam integrantes ou colaboradores documentados do DevClub.

Esses dados dão forma aos requisitos institucionais sem alegar contratação, parceria, resultado financeiro ou disponibilidade individual. As fontes e classificações estão registradas em [`docs/CONTENT-SOURCES.md`](docs/CONTENT-SOURCES.md).

O CTA de matrícula usa o destino oficial de WhatsApp fornecido e verificado a partir do fluxo DevClub para esta etapa. O vídeo complementar de Mentalidade é vinculado à fonte oficial no YouTube, sem download, reupload ou incorporação automática. O projeto continua sendo uma interpretação independente e não oficial.

## Como executar

O repositório possui `package-lock.json`; para uma instalação reproduzível, use `npm ci`.

```bash
git clone <URL_DO_REPOSITORIO>
cd devclub-experience
npm ci
npm run dev
```

Antes de publicar este README, substitua o token do comando de clone pela URL real configurada no remote Git.

Para executar os gates técnicos:

```bash
npm run lint
npm run typecheck
npm run build
```

## Scripts

| Comando | Função |
|---|---|
| `npm run dev` | inicia o servidor Vite de desenvolvimento |
| `npm run build` | executa o build TypeScript e gera o bundle de produção |
| `npm run lint` | analisa o repositório com ESLint |
| `npm run typecheck` | verifica tipos sem emitir arquivos |
| `npm run preview` | serve localmente o último build de produção |

## Validações realizadas

### Concluídas

- lint, typecheck e build de produção;
- revisão de diff;
- matriz responsiva em 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 360×640, 844×390 e 1280×600;
- scroll inicial e reverso da Hero;
- anchors da navegação e retorno ao topo;
- interação por teclado nos sistemas institucionais;
- resize, mudança de orientação e refresh intermediário;
- ausência de overflow horizontal da página;
- console da aplicação sem erro conhecido nos cenários auditados.

### QA final pendente

- validação visual com `prefers-reduced-motion: reduce` efetivamente ativo;
- reflow e legibilidade com zoom de 200% e 400%;
- perfil de performance em dispositivo real;
- Lighthouse final no ambiente publicado.

## Processo criativo e uso de IA

Ferramentas de IA participaram de um fluxo assistido de ideação, produção visual, implementação, revisão, auditoria e documentação. Codex apoiou a implementação e as revisões; os três plates finais da Hero foram gerados com GPT Image 2 por meio do Higgsfield. Outros experimentos de imagem e vídeo foram avaliados e rejeitados, sem integração no produto final.

As decisões não foram aceitas automaticamente. Variações e integrações foram comparadas com o briefing, e experimentos que reduziram continuidade, performance ou estabilidade foram descartados. A integração final foi submetida a lint, typecheck, build e testes de navegador. O histórico em `creative/` registra prompts, gates e rejeições sem apresentar a saída de IA como fonte incontestável.

## Limitações conhecidas

- QA visual com reduced motion ativo e zoom ampliado ainda pendente;
- Core Web Vitals em produção e perfil em dispositivo real ainda não medidos;
- histórias de alunos e perfis de tutores ainda usam conteúdo conceitual que deve ser substituído por dados verificados em uma aplicação oficial;
- embora o CTA use um destino verificado, este projeto permanece independente e não oficial.

## Próximos passos

- substituir histórias de alunos e perfis de tutores conceituais por dados institucionais verificados;
- adicionar testes automatizados para interações e regressões críticas;
- modularizar o stylesheet global se o projeto crescer além desta landing;
- capturar e documentar métricas de performance no deploy final.

## Autor

**Matheus Vinicius Rodrigues da Silva**

- [LinkedIn](https://www.linkedin.com/in/matheus-vinicius-dev/)
- [GitHub](https://github.com/MaximillionDev1)

## Licença e uso da marca

Projeto criado para o concurso DevClub e para apresentação em portfólio. O nome DevClub e sua identidade visual pertencem ao respectivo titular. Materiais gerados e conteúdos conceituais são usados apenas para demonstração, sem sugerir propriedade, parceria ou endosso oficial.

Este repositório não declara uma licença de software. Nenhuma licença adicional foi criada nesta etapa.
