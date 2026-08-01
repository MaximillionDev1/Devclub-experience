import hero01Avif1024 from '../../../creative/outputs/optimized/hero/hero-01-silence-1024.avif';
import hero01Avif1440 from '../../../creative/outputs/optimized/hero/hero-01-silence-1440.avif';
import hero01Avif1920 from '../../../creative/outputs/optimized/hero/hero-01-silence-1920.avif';
import hero01Avif2560 from '../../../creative/outputs/optimized/hero/hero-01-silence-2560.avif';
import hero01Webp1024 from '../../../creative/outputs/optimized/hero/hero-01-silence-1024.webp';
import hero01Webp1440 from '../../../creative/outputs/optimized/hero/hero-01-silence-1440.webp';
import hero01Webp1920 from '../../../creative/outputs/optimized/hero/hero-01-silence-1920.webp';
import hero01Webp2560 from '../../../creative/outputs/optimized/hero/hero-01-silence-2560.webp';
import hero02Avif1024 from '../../../creative/outputs/optimized/hero/hero-02-awakening-1024.avif';
import hero02Avif1440 from '../../../creative/outputs/optimized/hero/hero-02-awakening-1440.avif';
import hero02Avif1920 from '../../../creative/outputs/optimized/hero/hero-02-awakening-1920.avif';
import hero02Avif2560 from '../../../creative/outputs/optimized/hero/hero-02-awakening-2560.avif';
import hero02Webp1024 from '../../../creative/outputs/optimized/hero/hero-02-awakening-1024.webp';
import hero02Webp1440 from '../../../creative/outputs/optimized/hero/hero-02-awakening-1440.webp';
import hero02Webp1920 from '../../../creative/outputs/optimized/hero/hero-02-awakening-1920.webp';
import hero02Webp2560 from '../../../creative/outputs/optimized/hero/hero-02-awakening-2560.webp';
import hero03Avif1024 from '../../../creative/outputs/optimized/hero/hero-03-signal-1024.avif';
import hero03Avif1440 from '../../../creative/outputs/optimized/hero/hero-03-signal-1440.avif';
import hero03Avif1920 from '../../../creative/outputs/optimized/hero/hero-03-signal-1920.avif';
import hero03Avif2560 from '../../../creative/outputs/optimized/hero/hero-03-signal-2560.avif';
import hero03Webp1024 from '../../../creative/outputs/optimized/hero/hero-03-signal-1024.webp';
import hero03Webp1440 from '../../../creative/outputs/optimized/hero/hero-03-signal-1440.webp';
import hero03Webp1920 from '../../../creative/outputs/optimized/hero/hero-03-signal-1920.webp';
import hero03Webp2560 from '../../../creative/outputs/optimized/hero/hero-03-signal-2560.webp';

export type HeroPlate = {
  id: 'silence' | 'awakening' | 'signal';
  avifSrcSet: string;
  webpSrcSet: string;
  fallback: string;
};

const srcSet = (...sources: Array<[string, number]>) =>
  sources.map(([source, width]) => `${source} ${width}w`).join(', ');

export const heroPlates: readonly HeroPlate[] = [
  {
    id: 'silence',
    avifSrcSet: srcSet(
      [hero01Avif1024, 1024],
      [hero01Avif1440, 1440],
      [hero01Avif1920, 1920],
      [hero01Avif2560, 2560],
    ),
    webpSrcSet: srcSet(
      [hero01Webp1024, 1024],
      [hero01Webp1440, 1440],
      [hero01Webp1920, 1920],
      [hero01Webp2560, 2560],
    ),
    fallback: hero01Webp1920,
  },
  {
    id: 'awakening',
    avifSrcSet: srcSet(
      [hero02Avif1024, 1024],
      [hero02Avif1440, 1440],
      [hero02Avif1920, 1920],
      [hero02Avif2560, 2560],
    ),
    webpSrcSet: srcSet(
      [hero02Webp1024, 1024],
      [hero02Webp1440, 1440],
      [hero02Webp1920, 1920],
      [hero02Webp2560, 2560],
    ),
    fallback: hero02Webp1920,
  },
  {
    id: 'signal',
    avifSrcSet: srcSet(
      [hero03Avif1024, 1024],
      [hero03Avif1440, 1440],
      [hero03Avif1920, 1920],
      [hero03Avif2560, 2560],
    ),
    webpSrcSet: srcSet(
      [hero03Webp1024, 1024],
      [hero03Webp1440, 1440],
      [hero03Webp1920, 1920],
      [hero03Webp2560, 2560],
    ),
    fallback: hero03Webp1920,
  },
] as const;
