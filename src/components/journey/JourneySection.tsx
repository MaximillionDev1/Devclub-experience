import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { JourneyStep } from './JourneyStep';
import { journeySteps } from './journey-data';

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          const visuals = gsap.utils.toArray<HTMLElement>('[data-story-visual]');
          const markers = gsap.utils.toArray<HTMLElement>('[data-story-marker]');

          gsap.set(visuals, { autoAlpha: 0, y: 18 });
          gsap.set(visuals[0], { autoAlpha: 1, y: 0 });
          gsap.set(markers, { opacity: 0.28 });
          gsap.set(markers[0], { opacity: 1 });

          const progress = gsap.timeline({
            defaults: { duration: 0.38, ease: 'power1.inOut' },
            scrollTrigger: {
              trigger: '[data-story-steps]',
              start: 'top 65%',
              end: 'bottom 55%',
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          });

          progress.to(
            '[data-story-progress]',
            { scaleY: 1, duration: journeySteps.length, ease: 'none' },
            0,
          );

          for (let index = 1; index < journeySteps.length; index += 1) {
            const position = index;

            progress
              .to(visuals[index - 1], { autoAlpha: 0, y: -18 }, position)
              .to(markers[index - 1], { opacity: 0.28 }, position)
              .fromTo(
                visuals[index],
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0 },
                position,
              )
              .to(markers[index], { opacity: 1 }, position);
          }
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="jornada"
      ref={sectionRef}
      className="journey-story relative isolate overflow-hidden bg-[#090d16]"
      aria-labelledby="journey-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70svh] bg-[radial-gradient(circle_at_50%_0%,rgba(104,134,218,0.14),transparent_58%)]"
      />

      <header className="relative mx-auto flex min-h-[62svh] w-full max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-[0.6875rem] uppercase tracking-[0.3em] text-white/55">
          A jornada
        </p>
        <h2
          id="journey-title"
          className="mt-5 max-w-4xl text-balance text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.98] font-medium tracking-[-0.045em] text-white/90"
        >
          Construir muda a forma de enxergar possibilidades.
        </h2>
        <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
          A transformação acontece em etapas. Cada uma prepara a próxima.
        </p>
      </header>

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 pb-12 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.28fr)] lg:gap-24 lg:px-10">
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="sticky top-[18vh] h-[64vh] overflow-hidden">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-white/35">
              Progressão
            </p>

            <div className="absolute inset-x-0 top-14 bottom-10 border-y border-white/10">
              <div className="absolute top-0 bottom-0 left-0 w-px bg-white/10">
                <div
                  data-story-progress
                  className="h-full w-px origin-top scale-y-[0.1667] bg-white/70"
                />
              </div>

              <div className="absolute inset-0 flex items-center pl-10">
                {journeySteps.map((step, index) => (
                  <div
                    key={step.id}
                    data-story-visual
                    className={`absolute inset-x-10 ${index === 0 ? '' : 'invisible'}`}
                  >
                    <p className="font-mono text-xs tracking-[0.25em] text-white/40">
                      ETAPA {step.number}
                    </p>
                    <p className="mt-4 text-[clamp(2.25rem,3.6vw,3.25rem)] leading-none font-medium tracking-[-0.05em] text-white/90">
                      {step.keyword}
                    </p>
                    <div className="mt-10 h-px w-full bg-linear-to-r from-white/35 to-transparent" />
                  </div>
                ))}
              </div>

              <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-between py-1">
                {journeySteps.map((step, index) => (
                  <span
                    key={step.id}
                    data-story-marker
                    className={index === 0 ? 'text-white' : 'text-white/30'}
                  >
                    {step.number}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div data-story-steps>
          {journeySteps.map((step) => (
            <JourneyStep key={step.id} step={step} />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="h-[24svh] min-h-32 bg-linear-to-b from-transparent to-[#07090d]"
      />
    </section>
  );
}
