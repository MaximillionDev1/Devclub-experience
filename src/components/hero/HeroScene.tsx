import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function HeroScene() {
  const sceneRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set('[data-scene]', { autoAlpha: 0 });
        gsap.set('[data-desk]', { autoAlpha: 0, y: 50 });
        gsap.set('[data-notebook]', { autoAlpha: 0, scale: 0.96, y: 24 });
        gsap.set('[data-screen]', { backgroundColor: '#020203', boxShadow: 'none' });
        gsap.set('[data-light]', { autoAlpha: 0, scale: 0.75 });
        gsap.set('[data-terminal], [data-cursor]', { autoAlpha: 0 });
        gsap.set('[data-scroll-hint]', { autoAlpha: 0, y: 12 });

        const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

        timeline
          .to('[data-scene]', { autoAlpha: 1, duration: 1.4 })
          .to('[data-desk]', { autoAlpha: 1, y: 0, duration: 1.5 }, 0.3)
          .to(
            '[data-notebook]',
            { autoAlpha: 1, scale: 1, y: 0, duration: 1.3 },
            0.65,
          )
          .to(
            '[data-screen]',
            {
              backgroundColor: '#090d16',
              boxShadow:
                '0 0 35px rgba(118, 155, 255, 0.16), inset 0 0 35px rgba(80, 110, 190, 0.07)',
              duration: 1,
            },
            2.1,
          )
          .to('[data-light]', { autoAlpha: 1, scale: 1, duration: 1.5 }, 2.1)
          .to('[data-terminal]', { autoAlpha: 1, duration: 0.7 }, 2.6)
          .to('[data-cursor]', { autoAlpha: 1, duration: 0.2 }, 3)
          .to('[data-scroll-hint]', { autoAlpha: 1, y: 0, duration: 0.8 });

        gsap.to('[data-cursor]', {
          autoAlpha: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.55,
          ease: 'none',
          delay: 3.2,
        });
      });

      return () => media.revert();
    },
    { scope: sceneRef },
  );

  return (
    <section
      ref={sceneRef}
      data-scene
      className="hero-scene relative isolate flex min-h-screen items-end justify-center overflow-hidden bg-[#050505]"
      aria-labelledby="hero-title"
    >
      <h1 id="hero-title" className="sr-only">
        Toda transformação começa com uma decisão
      </h1>

      {/* Luz ambiente superior */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[55vh] bg-[radial-gradient(ellipse_at_top,rgba(30,38,62,0.16),transparent_68%)]"
      />

      {/* Luz emitida pelo notebook */}
      <div
        data-light
        aria-hidden="true"
        className="hero-light pointer-events-none absolute bottom-[16vh] left-1/2 h-[55vh] w-[80vw] max-w-5xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(104,134,218,0.13),transparent_68%)] blur-2xl"
      />

      <div className="hero-composition relative z-10 flex w-full max-w-6xl flex-col items-center px-5 pb-[12vh]">
        {/* Notebook */}
        <div
          data-notebook
          className="hero-notebook relative z-20 w-[min(78vw,680px)]"
        >
          <div className="rounded-[18px] border border-white/10 bg-[#101114] p-2 shadow-2xl shadow-black">
            <div
              data-screen
              className="relative aspect-16/10 overflow-hidden rounded-[11px] border border-white/5 bg-[#090d16] shadow-[0_0_35px_rgba(118,155,255,0.16),inset_0_0_35px_rgba(80,110,190,0.07)]"
            >
              <div
                data-terminal
                className="hero-terminal absolute inset-0 flex flex-col justify-center px-[9%] font-mono text-[clamp(10px,1.4vw,15px)] leading-7 text-white/55"
              >
                <span className="text-white/25">devclub@future:~</span>

                <p className="mt-3">
                  <span className="text-white/35">$</span>{' '}
                  <span>iniciar-jornada</span>
                  <span
                    data-cursor
                    className="ml-1 inline-block h-[1em] w-[0.5em] translate-y-[0.12em] bg-white/70"
                    aria-hidden="true"
                  />
                </p>
              </div>

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black"
              />
            </div>
          </div>

          {/* Base do notebook */}
          <div className="relative mx-auto h-3 w-[108%] translate-x-[-4%] rounded-b-[45%] bg-linear-to-b from-[#36383d] to-[#151619] shadow-xl">
            <div className="absolute left-1/2 top-0 h-1 w-[16%] -translate-x-1/2 rounded-b-md bg-black/45" />
          </div>
        </div>

        {/* Mesa */}
        <div
          data-desk
          className="hero-desk relative z-10 -mt-1 h-14 w-[min(96vw,1050px)] rounded-[50%] border-t border-white/10 bg-linear-to-b from-[#1a1715] to-[#0b0a09] shadow-[0_-12px_40px_rgba(0,0,0,0.8)]"
        >
          {/* Caneca */}
          <div
            aria-hidden="true"
            className="absolute bottom-7 right-[9%] hidden h-14 w-12 rounded-b-xl rounded-t-md border border-white/10 bg-[#111214] shadow-xl sm:block"
          >
            <div className="absolute left-full top-3 h-7 w-5 rounded-r-full border-[5px] border-l-0 border-[#17181b]" />
          </div>

          {/* Caderno */}
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[7%] hidden h-18 w-28 -rotate-6 rounded-sm border border-white/10 bg-[#151515] shadow-xl sm:block"
          >
            <div className="absolute inset-y-0 left-3 w-px bg-white/10" />
          </div>
        </div>
      </div>

      <div
        data-scroll-hint
        className="hero-message absolute bottom-6 left-1/2 z-20 w-[calc(100%-2rem)] -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.32em] text-white/45"
      >
        Uma decisão muda tudo
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.72)_100%)]"
      />
    </section>
  );
}
