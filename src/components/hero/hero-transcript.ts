export type HeroTranscriptLine = {
  id: string;
  text: string;
  role: 'prompt' | 'command' | 'response';
  light: number;
};

export const heroTranscript = [
  {
    id: 'prompt',
    text: 'devclub@future:~',
    role: 'prompt',
    light: 0,
  },
  {
    id: 'command',
    text: 'iniciar_jornada',
    role: 'command',
    light: 0,
  },
  {
    id: 'loading',
    text: 'loading...',
    role: 'response',
    light: 0.2,
  },
  {
    id: 'mentors',
    text: 'connecting mentors...',
    role: 'response',
    light: 0.38,
  },
  {
    id: 'projects',
    text: 'building projects...',
    role: 'response',
    light: 0.56,
  },
  {
    id: 'possibilities',
    text: 'opening possibilities...',
    role: 'response',
    light: 0.76,
  },
  {
    id: 'ready',
    text: 'ready.',
    role: 'response',
    light: 0.92,
  },
] as const satisfies readonly HeroTranscriptLine[];

export const heroResponseLines = heroTranscript.filter(
  (line) => line.role === 'response',
);
