export type TutorProfile = {
  id: string;
  name: string;
  initials: string;
  specialty: string;
  statement: string;
  support: string;
  accent: 'blue' | 'green' | 'violet' | 'neutral';
};

export const tutorProfiles = [
  {
    id: 'marina-costa',
    name: 'Marina Costa',
    initials: 'MC',
    specialty: 'Front-end e arquitetura de interfaces',
    statement: 'Uma boa interface começa quando decisões visuais e técnicas contam a mesma história.',
    support: 'Revisão de componentes, acessibilidade e organização de aplicações front-end.',
    accent: 'blue',
  },
  {
    id: 'caio-mendes',
    name: 'Caio Mendes',
    initials: 'CM',
    specialty: 'Back-end e desenho de APIs',
    statement: 'Entender os limites de um sistema ajuda a escolher soluções que continuam claras quando ele cresce.',
    support: 'Contexto sobre APIs, regras de negócio, testes e decisões de implementação.',
    accent: 'green',
  },
  {
    id: 'helena-ramos',
    name: 'Helena Ramos',
    initials: 'HR',
    specialty: 'Bancos de dados e arquitetura de aplicações',
    statement: 'Modelar bem é transformar necessidades reais em relações que o código consegue sustentar.',
    support: 'Feedback sobre dados, integrações, responsabilidades e estrutura de projetos.',
    accent: 'violet',
  },
  {
    id: 'lucas-freire',
    name: 'Lucas Freire',
    initials: 'LF',
    specialty: 'Carreira e entrevistas técnicas',
    statement: 'Comunicar o próprio raciocínio é parte do trabalho, não apenas uma etapa do processo seletivo.',
    support: 'Preparação de portfólio, leitura de desafios e prática de conversas técnicas.',
    accent: 'neutral',
  },
  {
    id: 'bianca-luz',
    name: 'Bianca Luz',
    initials: 'BL',
    specialty: 'Inteligência artificial e produtividade',
    statement: 'Ferramentas de IA ganham valor quando ampliam o pensamento sem substituir a responsabilidade técnica.',
    support: 'Orientação para pesquisar, prototipar, revisar e validar trabalho assistido por IA.',
    accent: 'blue',
  },
] as const satisfies readonly TutorProfile[];
