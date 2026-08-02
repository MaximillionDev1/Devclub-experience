import type { LucideIcon } from 'lucide-react';
import {
  Braces,
  BriefcaseBusiness,
  FolderKanban,
  Layers3,
  MessagesSquare,
  PanelsTopLeft,
  Server,
  Sparkles,
  Users,
} from 'lucide-react';

export type FormationPillar = {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  outcome: string;
  orbit: 'inner' | 'middle' | 'outer';
  icon: LucideIcon;
  accent: 'blue' | 'green' | 'violet' | 'neutral';
};

export const formationPillars = [
  {
    id: 'fundamentos-web',
    title: 'Fundamentos Web',
    shortLabel: 'Fundamentos',
    description: 'HTML, CSS, lógica e JavaScript formam a base para compreender o que acontece por trás de cada interface.',
    outcome: 'Criar páginas estruturadas e resolver problemas com lógica.',
    orbit: 'inner',
    icon: Braces,
    accent: 'blue',
  },
  {
    id: 'front-end',
    title: 'Front-end',
    shortLabel: 'Front-end',
    description: 'Interfaces responsivas ganham comportamento com React, TypeScript e atenção à experiência de uso.',
    outcome: 'Transformar ideias em interfaces funcionais e adaptáveis.',
    orbit: 'inner',
    icon: PanelsTopLeft,
    accent: 'violet',
  },
  {
    id: 'back-end',
    title: 'Back-end',
    shortLabel: 'Back-end',
    description: 'APIs, Node.js, bancos de dados e autenticação conectam regras, informações e pessoas.',
    outcome: 'Construir serviços que sustentam produtos digitais.',
    orbit: 'inner',
    icon: Server,
    accent: 'green',
  },
  {
    id: 'full-stack',
    title: 'Full Stack',
    shortLabel: 'Full Stack',
    description: 'Front-end, back-end e deploy deixam de ser partes isoladas e passam a funcionar como um produto completo.',
    outcome: 'Integrar aplicações de ponta a ponta e colocá-las no ar.',
    orbit: 'middle',
    icon: Layers3,
    accent: 'blue',
  },
  {
    id: 'projetos',
    title: 'Projetos e Portfólio',
    shortLabel: 'Projetos',
    description: 'A prática transforma estudo em evidência por meio de projetos que registram decisões e evolução.',
    outcome: 'Apresentar o que você sabe construir em um portfólio real.',
    orbit: 'middle',
    icon: FolderKanban,
    accent: 'neutral',
  },
  {
    id: 'ia-para-devs',
    title: 'Inteligência Artificial',
    shortLabel: 'IA para Devs',
    description: 'IA aplicada ao aprendizado e à produtividade ajuda a investigar, prototipar e revisar com mais contexto.',
    outcome: 'Usar IA como ferramenta de apoio, sem abrir mão dos fundamentos.',
    orbit: 'middle',
    icon: Sparkles,
    accent: 'violet',
  },
  {
    id: 'mentoria',
    title: 'Mentoria e Suporte',
    shortLabel: 'Mentoria',
    description: 'Orientação, encontros ao vivo e suporte humano ajudam a destravar dúvidas e organizar o próximo passo.',
    outcome: 'Avançar com direção e contexto quando surgirem bloqueios.',
    orbit: 'outer',
    icon: MessagesSquare,
    accent: 'green',
  },
  {
    id: 'carreira',
    title: 'Preparação para Carreira',
    shortLabel: 'Carreira',
    description: 'Portfólio, LinkedIn, entrevistas e o ClubJobs, como parte do ecossistema de oportunidades do DevClub, aproximam aprendizado e mercado.',
    outcome: 'Comunicar suas habilidades e se preparar para processos seletivos.',
    orbit: 'outer',
    icon: BriefcaseBusiness,
    accent: 'blue',
  },
  {
    id: 'comunidade',
    title: 'Comunidade',
    shortLabel: 'Comunidade',
    description: 'Trocas, apoio ao estudo e evolução compartilhada tornam a jornada menos solitária.',
    outcome: 'Construir consistência ao lado de pessoas que também estão aprendendo.',
    orbit: 'outer',
    icon: Users,
    accent: 'neutral',
  },
] as const satisfies readonly FormationPillar[];
