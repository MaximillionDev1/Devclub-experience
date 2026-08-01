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
          const marks = gsap.utils.toArray<HTMLElement>('[data-company-mark]');
          const lines = gsap.utils.toArray<HTMLElement>('[data-company-line]');

          gsap.set('[data-companies-reveal]', { autoAlpha: 0, y: 18 });
          gsap.set(marks, { autoAlpha: 0, y: 12, scale: 0.94 });
          gsap.set(lines, { scaleX: 0 });

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

          entrance
            .to('[data-companies-reveal]', { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.12 })
            .to(lines, { scaleX: 1, duration: 1.9, stagger: 0.16, ease: 'none' }, 0.45)
            .to(marks, { autoAlpha: 1, y: 0, scale: 1, duration: 0.48, stagger: 0.16 }, 0.65);
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
          <h2 id="companies-title">Conhecimento ganha valor quando começa a contribuir.</h2>
          <p>
            Projetos, prática e preparação profissional aproximam novos desenvolvedores
            dos ambientes em que produtos reais são construídos.
          </p>
          <blockquote>
            O próximo passo não é apenas aprender mais. É estar preparado para colaborar.
          </blockquote>
          <p className="companies-clubjobs">
            O ecossistema de oportunidades e o ClubJobs ajudam a dar contexto ao encontro
            entre preparo e mercado, sem substituir a trajetória de cada pessoa.
          </p>
        </header>

        <div className="companies-field" aria-label="Destinos profissionais conceituais">
          <div className="companies-field-glow" aria-hidden="true" />
          <div className="companies-field-line companies-field-line--a" data-company-line aria-hidden="true" />
          <div className="companies-field-line companies-field-line--b" data-company-line aria-hidden="true" />
          <div className="companies-field-line companies-field-line--c" data-company-line aria-hidden="true" />

          <div className="companies-field-center" aria-hidden="true" data-companies-reveal>
            <span>Talento</span>
            <strong>em movimento</strong>
            <i />
          </div>

          <div className="companies-marks">
            {companyMarks.map((company) => (
              <button
                key={company.id}
                type="button"
                className="company-mark"
                data-company-mark={company.id}
                data-company-id={company.id}
                data-accent={company.accent}
                data-active={company.id === activeId}
                aria-pressed={company.id === activeId}
                aria-controls="company-detail"
                onClick={() => setActiveId(company.id)}
                onFocus={() => setActiveId(company.id)}
                onMouseEnter={() => setActiveId(company.id)}
              >
                <span className="company-mark-symbol" aria-hidden="true">
                  <i />
                  <strong>{company.initials}</strong>
                </span>
                <span className="company-mark-name">{company.name}</span>
                <span className="company-mark-sector">{company.sector}</span>
              </button>
            ))}
          </div>

          <div id="company-detail" className="company-detail" data-companies-reveal>
            <span>Destino conceitual</span>
            <strong>{activeCompany.name}</strong>
            <p>{activeCompany.sector}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
