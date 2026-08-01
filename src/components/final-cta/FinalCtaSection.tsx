import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';

// Placeholder interno até que uma URL institucional oficial seja validada.
const DEVCLUB_DESTINATION_PLACEHOLDER = '#quem-somos';

export function FinalCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.set('[data-final-reveal]', { autoAlpha: 0, y: 18 });
          gsap.set('[data-final-doorway]', { autoAlpha: 0, scaleY: 0.84 });
          gsap.set('[data-final-threshold]', { scaleX: 0 });

          gsap
            .timeline({
              defaults: { ease: 'power1.out' },
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 78%',
                end: 'bottom 68%',
                scrub: 0.45,
                invalidateOnRefresh: true,
              },
            })
            .to('[data-final-reveal]', {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.12,
            })
            .to('[data-final-doorway]', { autoAlpha: 1, scaleY: 1, duration: 1.15 }, 0.35)
            .to('[data-final-threshold]', { scaleX: 1, duration: 0.8, ease: 'none' }, 0.72);
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section
        id="comece"
        ref={sectionRef}
        className="final-cta-section"
        aria-labelledby="final-cta-title"
      >
        <div className="final-cta-layout">
          <div className="final-cta-editorial">
            <p data-final-reveal>Seu próximo passo</p>
            <h2 id="final-cta-title" data-final-reveal>
              A decisão continua sendo sua.
            </h2>
            <p data-final-reveal>
              Você não precisa ter todas as respostas agora. Precisa apenas escolher qual
              será o próximo passo da sua jornada.
            </p>
            <div className="final-cta-actions" data-final-reveal>
              <a
                href={DEVCLUB_DESTINATION_PLACEHOLDER}
                className="final-cta-primary"
                data-destination-status="placeholder"
              >
                Conhecer o DevClub
                <span aria-hidden="true">→</span>
              </a>
              <a href="#top" className="final-cta-secondary">
                Rever a jornada
              </a>
            </div>
            <p className="final-cta-note" data-final-reveal>
              Começar não exige enxergar tudo. Exige tornar visível a próxima escolha.
            </p>
          </div>

          <div className="final-doorway" data-final-doorway aria-hidden="true">
            <div className="final-doorway-light" />
            <div className="final-doorway-frame">
              <span />
              <span />
              <span />
            </div>
            <div className="final-doorway-threshold" data-final-threshold />
            <p>
              <span>path / open</span>
              <strong>next.step</strong>
            </p>
          </div>
        </div>
      </section>

      <footer className="experience-footer">
        <p>DevClub Experience</p>
        <p>Projeto criado para o concurso · {currentYear}</p>
      </footer>
    </>
  );
}
