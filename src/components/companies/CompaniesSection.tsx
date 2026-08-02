import { useRef, useState } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { companyMarks } from './company-data';

export function CompaniesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>(companyMarks[0].id);
  const activeCompany = companyMarks.find((company) => company.id === activeId) ?? companyMarks[0];

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.set('[data-companies-reveal]', { autoAlpha: 0, y: 18 });

          const entrance = gsap.timeline({
            defaults: { ease: 'power1.out' },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 76%',
              end: 'bottom 64%',
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          });

          entrance.to('[data-companies-reveal]', {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
          });
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="empresas"
      ref={sectionRef}
      className="companies-section"
      aria-labelledby="companies-title"
    >
      <div className="companies-layout">
        <header className="companies-editorial" data-companies-reveal>
          <p>Onde o talento chega</p>
          <h2 id="companies-title">
            Conhecimento ganha valor quando começa <span className="text-nowrap">a contribuir.</span>
          </h2>
          <p>
            Projetos, prática e preparação profissional aproximam novos desenvolvedores
            dos ambientes em que produtos reais são construídos.
          </p>
          <blockquote>
            O próximo passo não é apenas aprender mais. É estar preparado para colaborar.
          </blockquote>
          <p className="companies-clubjobs">
            O ClubJobs é apresentado como parte do ecossistema de oportunidades do DevClub,
            aproximando preparo e mercado sem prometer contratação.
          </p>
        </header>

        <div
          className="companies-stage"
          role="group"
          aria-label="Empresas presentes no ecossistema institucional do DevClub"
        >
          <div className="companies-horizon-label" aria-hidden="true" data-companies-reveal>
            <span>Preparação</span>
            <i />
            <span>Contribuição</span>
          </div>

          <div className="companies-ticker-viewport" data-companies-reveal>
            <div className="companies-ticker-track">
              <div className="companies-ticker-sequence">
                {companyMarks.map((company) => (
                  <button
                    key={company.id}
                    type="button"
                    className="company-ticker-item"
                    data-active={company.id === activeId}
                    aria-pressed={company.id === activeId}
                    aria-controls="company-detail"
                    onClick={() => setActiveId(company.id)}
                    onFocus={() => setActiveId(company.id)}
                    onMouseEnter={() => setActiveId(company.id)}
                  >
                    <span>{company.name}</span>
                    <i aria-hidden="true">→</i>
                  </button>
                ))}
              </div>

              <div className="companies-ticker-sequence" aria-hidden="true">
                {companyMarks.map((company) => (
                  <span
                    key={`ticker-copy-${company.id}`}
                    className="company-ticker-item company-ticker-item--copy"
                    data-active={company.id === activeId}
                  >
                    <span>{company.name}</span>
                    <i>→</i>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div id="company-detail" className="company-detail" aria-live="off" data-companies-reveal>
            <span>Presença institucional</span>
            <strong>{activeCompany.name}</strong>
            <p>{activeCompany.sector}</p>
            <small>Organização apresentada no ecossistema institucional do DevClub.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
