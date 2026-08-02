export type CompanyMark = {
  id: string;
  name: string;
  sector: string;
};

export const companyMarks = [
  { id: 'nexo-labs', name: 'Accenture', sector: 'Tecnologia e consultoria' },
  { id: 'atlas-cloud', name: 'Avanade', sector: 'Tecnologia e consultoria' },
  { id: 'mira-finance', name: 'Bradesco', sector: 'Serviços financeiros' },
  { id: 'orbe-systems', name: 'BTG Pactual', sector: 'Serviços financeiros' },
  { id: 'vertice-digital', name: 'Capgemini', sector: 'Tecnologia e consultoria' },
  { id: 'lumina-health', name: 'Compass UOL', sector: 'Tecnologia e serviços digitais' },
  { id: 'norte-commerce', name: 'IBM', sector: 'Tecnologia' },
  { id: 'prisma-data', name: 'iFood', sector: 'Tecnologia e serviços' },
] as const satisfies readonly CompanyMark[];
