export type JourneyStepData = {
  id: string;
  number: string;
  title: string;
  text: string;
  keyword: string;
};

export const journeySteps = [
  {
    id: 'direcao',
    number: '01',
    title: 'Um caminho começa pelo próximo passo.',
    text: 'Você não precisa enxergar tudo de uma vez. Precisa de direção para seguir.',
    keyword: 'Direção',
  },
  {
    id: 'fundamentos',
    number: '02',
    title: 'Base antes da velocidade.',
    text: 'Lógica, ferramentas e contexto transformam tentativa em compreensão.',
    keyword: 'Fundamentos',
  },
  {
    id: 'pratica',
    number: '03',
    title: 'Aprender pede movimento.',
    text: 'Cada exercício aproxima conhecimento e decisão.',
    keyword: 'Prática',
  },
  {
    id: 'projetos',
    number: '04',
    title: 'O estudo ganha forma.',
    text: 'Projetos tornam visível o que você já consegue construir.',
    keyword: 'Projetos',
  },
  {
    id: 'comunidade',
    number: '05',
    title: 'Evoluir pode ser um caminho compartilhado.',
    text: 'Perguntas encontram contexto quando há gente construindo junto.',
    keyword: 'Comunidade',
  },
  {
    id: 'transformacao',
    number: '06',
    title: 'De espectador a construtor.',
    text: 'A tecnologia deixa de parecer distante e começa a responder às suas ideias.',
    keyword: 'Transformação',
  },
] as const satisfies readonly JourneyStepData[];
