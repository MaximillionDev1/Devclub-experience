export type CompanyMark = {
  id: string;
  name: string;
  sector: string;
  initials: string;
  accent: 'blue' | 'green' | 'violet' | 'neutral';
};

export const companyMarks = [
  { id: 'nexo-labs', name: 'Nexo Labs', sector: 'Produtos digitais', initials: 'NX', accent: 'blue' },
  { id: 'atlas-cloud', name: 'Atlas Cloud', sector: 'Infraestrutura em nuvem', initials: 'AC', accent: 'neutral' },
  { id: 'mira-finance', name: 'Mira Finance', sector: 'Tecnologia financeira', initials: 'MF', accent: 'green' },
  { id: 'orbe-systems', name: 'Orbe Systems', sector: 'Sistemas empresariais', initials: 'OS', accent: 'violet' },
  { id: 'vertice-digital', name: 'Vértice Digital', sector: 'Experiências digitais', initials: 'VD', accent: 'blue' },
  { id: 'lumina-health', name: 'Lumina Health', sector: 'Tecnologia para saúde', initials: 'LH', accent: 'green' },
  { id: 'norte-commerce', name: 'Norte Commerce', sector: 'Comércio e plataformas', initials: 'NC', accent: 'neutral' },
  { id: 'prisma-data', name: 'Prisma Data', sector: 'Dados e inteligência', initials: 'PD', accent: 'violet' },
] as const satisfies readonly CompanyMark[];

