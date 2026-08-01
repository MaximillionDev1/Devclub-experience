import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import { heroPlates } from './hero-plates';
import { heroResponseLines, heroTranscript } from './hero-transcript';

const navigationItems = [
  { label: 'Formações', href: '#formacoes' },
  { label: 'Alunos', href: '#alunos' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Tutores', href: '#tutores' },
] as const;

export function HeroScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const [loadProgressivePlates, setLoadProgressivePlates] = useState(false);

  useEffect(() => {
    const loadTimer = window.setTimeout(() => setLoadProgressivePlates(true), 320);
    let refreshFrame = 0;

    const refreshHero = () => {
      window.cancelAnimationFrame(refreshFrame);
      refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    window.addEventListener('resize', refreshHero);

    return () => {
      window.clearTimeout(loadTimer);
      window.removeEventListener('resize', refreshHero);
      window.cancelAnimationFrame(refreshFrame);
    };
  }, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      let entrance: gsap.core.Timeline | null = null;

      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set('[data-hero-interface]', { autoAlpha: 0, y: -8 });
        gsap.set('[data-hero-copy]', { autoAlpha: 0, y: 12 });
        gsap.set('[data-start-guide]', { autoAlpha: 0, x: -8 });
        gsap.set('[data-scroll-hint]', { autoAlpha: 0, y: 8 });
        gsap.set('[data-terminal], [data-terminal-fallback]', { autoAlpha: 0 });

        entrance = gsap.timeline({ defaults: { ease: 'power2.out' } });
        entrance
          .to('[data-hero-interface]', { autoAlpha: 1, y: 0, duration: 0.9 })
          .to('[data-hero-copy]', { autoAlpha: 1, y: 0, duration: 1 }, 0.25)
          .to('[data-start-guide]', { autoAlpha: 1, x: 0, duration: 0.8 }, 0.45)
          .to('[data-terminal], [data-terminal-fallback]', { autoAlpha: 1, duration: 0.65 }, 0.55)
          .to('[data-scroll-hint]', { autoAlpha: 1, y: 0, duration: 0.7 }, 0.65);
      });

      media.add(
        {
          plates: '(min-width: 900px) and (min-height: 501px)',
          desktop: '(min-width: 1024px)',
          tablet: '(min-width: 768px) and (max-width: 1023px)',
          compact: '(max-width: 767px), (max-height: 500px)',
          motionAllowed: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          if (!context.conditions?.motionAllowed) return;

          const hasPlates = context.conditions.plates === true;
          const isTablet = context.conditions.tablet === true;
          const isCompact = context.conditions.compact === true;
          const distanceFactor = isCompact ? 0.7 : isTablet ? 1 : 1.35;
          const cameraScale = isCompact ? 1.04 : isTablet ? 1.06 : 1.1;
          const messagePositions = isCompact
            ? [0.08, 0.18, 0.28, 0.39, 0.52]
            : [0.1, 0.2, 0.3, 0.41, 0.53];
          const responseLines = gsap.utils.toArray<HTMLElement>(
            hasPlates
              ? '[data-terminal] [data-terminal-response]'
              : '[data-terminal-fallback] [data-terminal-response]',
          );

          gsap.set(responseLines, { autoAlpha: 0, y: isCompact ? 3 : 5 });
          gsap.set('[data-plate="awakening"], [data-plate="signal"]', {
            autoAlpha: 0,
          });
          gsap.set('[data-response-light], [data-wall-light]', { autoAlpha: 0 });

          const claimCinematicOwnership = () => {
            if (!entrance) return;

            entrance.progress(1).kill();
            entrance = null;
          };

          const cinematic = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: sceneRef.current,
              start: 'top top',
              end: () => `+=${Math.round(window.innerHeight * distanceFactor)}`,
              pin: true,
              scrub: isCompact ? 0.35 : isTablet ? 0.55 : 0.7,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (self.progress > 0) claimCinematicOwnership();
              },
            },
          });

          cinematic.to({}, { duration: 1 });

          if (hasPlates) {
            cinematic
              .to('[data-plate="awakening"]', { autoAlpha: 1, duration: 0.12 }, 0.08)
              .to('[data-plate="silence"]', { autoAlpha: 0, duration: 0.12 }, 0.08)
              .to('[data-plate="signal"]', { autoAlpha: 1, duration: 0.16 }, 0.38)
              .to('[data-plate="awakening"]', { autoAlpha: 0, duration: 0.16 }, 0.38);
          }

          heroResponseLines.forEach((line, index) => {
            const position = messagePositions[index];
            cinematic
              .to(
                responseLines[index],
                { autoAlpha: 1, y: 0, duration: isCompact ? 0.045 : 0.055 },
                position,
              )
              .to(
                '[data-response-light]',
                {
                  autoAlpha: line.light * (isCompact ? 0.45 : 0.7),
                  duration: 0.07,
                },
                position,
              )
              .to(
                '[data-wall-light]',
                {
                  autoAlpha: line.light * (isCompact ? 0.35 : 0.58),
                  duration: 0.07,
                },
                position,
              );
          });

          cinematic
            .to('[data-start-guide]', { autoAlpha: 0, x: -6, duration: 0.08 }, 0.08)
            .to(
              '[data-shared-camera]',
              { scale: cameraScale, yPercent: isCompact ? 1 : 2, duration: 0.2, ease: 'power1.inOut' },
              0.68,
            )
            .to('[data-hero-copy]', { autoAlpha: 0.35, duration: 0.16 }, 0.72)
            .to('[data-atmosphere-vignette]', { autoAlpha: 0.28, duration: 0.18 }, 0.72)
            .to('[data-scroll-hint]', { autoAlpha: 0, y: 6, duration: 0.1 }, 0.72)
            .to('[data-portal]', { autoAlpha: 1, duration: 0.12, ease: 'power1.in' }, 0.88);
        },
      );

      return () => media.revert();
    },
    { scope: sceneRef },
  );

  return (
    <section
      ref={sceneRef}
      className="hero-scene relative isolate min-h-screen overflow-hidden bg-[#050607]"
      aria-labelledby="hero-title"
    >
      <div data-shared-camera className="hero-shared-camera absolute inset-0">
        <div className="hero-plate-canvas" aria-hidden="true">
          {heroPlates.map((plate, index) => {
            const shouldLoad = index === 0 || loadProgressivePlates;
            return (
              <picture
                key={plate.id}
                data-plate={plate.id}
                className={`hero-plate ${index === 0 ? 'is-visible' : ''}`}
              >
                {shouldLoad && (
                  <>
                    <source type="image/avif" srcSet={plate.avifSrcSet} sizes="100vw" />
                    <source type="image/webp" srcSet={plate.webpSrcSet} sizes="100vw" />
                  </>
                )}
                <img
                  src={shouldLoad ? plate.fallback : undefined}
                  alt=""
                  width="2688"
                  height="1520"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding={index === 0 ? 'sync' : 'async'}
                />
              </picture>
            );
          })}

          <div className="hero-plate-terminal" data-terminal>
            <TerminalVisual />
          </div>
        </div>

        <FallbackWorkspace />
      </div>

      <header data-hero-interface className="hero-header">
        <a className="hero-brand" href="#top" aria-label="DevClub, voltar ao início">
          DEVCLUB <span aria-hidden="true">//</span>
        </a>
        <nav aria-label="Navegação principal">
          <ul className="hero-navigation">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  {item.label}<span aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div data-start-guide className="hero-start-guide" aria-hidden="true">
        <p>Role para<br />começar</p>
        <span className="hero-start-line" />
        <span className="hero-start-dot" />
      </div>

      <div data-hero-copy className="hero-copy">
        <h1 id="hero-title">
          Uma decisão
          <span>Muda <em>tudo.</em></span>
        </h1>
        <p>Sua jornada começa com um único passo.</p>
      </div>

      <div className="sr-only" aria-label="Transcrição completa do terminal">
        <p>{heroTranscript[0].text}</p>
        <p>$ {heroTranscript[1].text}</p>
        <ol>
          {heroResponseLines.map((line) => <li key={line.id}>{line.text}</li>)}
        </ol>
      </div>

      <div data-scroll-hint className="hero-scroll-hint" aria-hidden="true">
        <span />
        <p>Scroll</p>
      </div>

      <div data-wall-light className="hero-wall-light" aria-hidden="true" />
      <div data-response-light className="hero-response-light" aria-hidden="true" />
      <div data-atmosphere-vignette className="hero-vignette" aria-hidden="true" />
      <div data-portal className="hero-portal" aria-hidden="true" />
    </section>
  );
}

function TerminalVisual() {
  return (
    <div aria-hidden="true" className="hero-terminal-visual">
      <span className="hero-terminal-prompt">{heroTranscript[0].text}</span>
      <p className="hero-terminal-command">
        <span>$</span> {heroTranscript[1].text}
        <i data-cursor aria-hidden="true" />
      </p>
      <div className="hero-terminal-responses">
        {heroResponseLines.map((line) => (
          <p key={line.id} data-terminal-response={line.id}>{line.text}</p>
        ))}
      </div>
    </div>
  );
}

function FallbackWorkspace() {
  return (
    <div className="hero-fallback" aria-hidden="true">
      <div className="hero-fallback-light" />
      <div className="hero-fallback-notebook" data-terminal-fallback>
        <div className="hero-fallback-screen">
          <TerminalVisual />
        </div>
        <div className="hero-fallback-base" />
      </div>
      <div className="hero-fallback-desk" />
    </div>
  );
}
