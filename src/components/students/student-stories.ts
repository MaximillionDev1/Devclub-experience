export type StudentStory = {
  id: string;
  quote: string;
  name: string;
  context: string;
  track: string;
};

export const studentStories = [
  {
    id: 'lia-fundamentos',
    quote: 'Eu comecei sem saber por onde abrir o editor. Quando entendi os fundamentos, a tecnologia deixou de parecer um idioma reservado para outras pessoas.',
    name: 'Lia Monteiro',
    context: 'Começou do zero e hoje constrói suas primeiras interfaces.',
    track: 'Fundamentos Web',
  },
  {
    id: 'caio-projeto',
    quote: 'Meu primeiro projeto completo não ficou perfeito — e foi exatamente por isso que aprendi tanto. Pela primeira vez eu tinha algo meu para explicar.',
    name: 'Caio Nunes',
    context: 'Transformou exercícios soltos em um projeto de portfólio.',
    track: 'Projetos',
  },
  {
    id: 'maya-react',
    quote: 'Eu repetia tutoriais de React sem entender as decisões. Com uma sequência clara, comecei a enxergar componentes como partes de um sistema.',
    name: 'Maya Ribeiro',
    context: 'Encontrou clareza depois de estudar sozinha.',
    track: 'Front-end',
  },
  {
    id: 'davi-mentoria',
    quote: 'Uma conversa com a mentoria destravou uma dúvida que eu carregava havia semanas. Mais importante: aprendi como investigar a próxima.',
    name: 'Davi Torres',
    context: 'Usou suporte humano para recuperar o ritmo de estudo.',
    track: 'Mentoria',
  },
  {
    id: 'nina-carreira',
    quote: 'Treinar como apresentar meus projetos mudou a entrevista. Eu parei de tentar decorar respostas e passei a contar as decisões que tomei.',
    name: 'Nina Alves',
    context: 'Ganhou confiança para conversar sobre seu trabalho.',
    track: 'Carreira',
  },
  {
    id: 'rui-comunidade',
    quote: 'Ter outras pessoas estudando comigo trouxe consistência. Nem todo dia é fácil, mas agora nenhum bloqueio parece definitivo.',
    name: 'Rui Cardoso',
    context: 'Encontrou companhia e constância na comunidade.',
    track: 'Comunidade',
  },
  {
    id: 'iris-construcao',
    quote: 'Eu consumia conteúdo sem parar e ainda sentia que não sabia fazer. Construir, errar e revisar foi o que finalmente virou a chave.',
    name: 'Íris Campos',
    context: 'Saiu do ciclo de tutoriais para uma prática ativa.',
    track: 'Full Stack',
  },
] as const satisfies readonly StudentStory[];

