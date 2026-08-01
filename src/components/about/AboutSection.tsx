import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';

type AboutPrinciple = {
  number: string;
  title: string;
  description: string;
};

const aboutPrinciples = [
  {
    number: '01',
    title: 'Aprender construindo',
    description: 'A formação organiza fundamentos e prática em uma sequência clara. Projetos e inteligência artificial entram como ferramentas para investigar, criar e revisar melhor.',
  },
  {
    number: '02',
    title: 'Evoluir acompanhado',
    description: 'Mentoria, suporte humano e comunidade ajudam a transformar dúvidas em próximos passos e estudo isolado em troca constante.',
  },
  {
    number: '03',
    title: 'Transformar prática em portfólio',
    description: 'Cada projeto torna o aprendizado visível, registra decisões e constrói evidências do que o aluno já consegue realizar.',
  },
  {
    number: '04',
    title: 'Preparar para o mercado',
    description: 'Orientação de carreira aproxima portfólio, comunicação profissional, entrevistas e oportunidades sem encerrar a evolução no primeiro resultado.',
  },
] as const satisfies readonly AboutPrinciple[];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        '(min-width: 901px) and (prefers-reduced-motion: no-preference)',
        () => {
          const reveals = gsap.utils.toArray<HTMLElement>('[data-about-reveal]');
          const principles = gsap.utils.toArray<HTMLElement>('[data-about-principle]');
          const nodes = gsap.utils.toArray<HTMLElement>('[data-about-node]');

          gsap.set(reveals, { autoAlpha: 0, y: 18 });
          gsap.set(principles, { autoAlpha: 0, y: 14 });
          gsap.set('[data-about-progress]', { scaleY: 0 });
          gsap.set(nodes, { opacity: 0.22, scale: 0.78 });

          const progression = gsap.timeline({
            defaults: { ease: 'power1.out' },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 74%',
              end: 'bottom 62%',
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          });

          progression
            .to(reveals, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 })
            .to('[data-about-progress]', { scaleY: 1, duration: 3.4, ease: 'none' }, 0.5);

          principles.forEach((principle, index) => {
            const position = 0.75 + index * 0.72;
            progression
              .to(principle, { autoAlpha: 1, y: 0, duration: 0.5 }, position)
              .to(nodes[index], { opacity: 1, scale: 1, duration: 0.42 }, position);
          });
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="quem-somos"
      ref={sectionRef}
      className="about-section"
      aria-labelledby="about-title"
    >
      <div className="about-layout">
        <div className="about-statement">
          <header data-about-reveal>
            <p>Quem somos</p>
            <h2 id="about-title">Um lugar para transformar intenção em construção.</h2>
          </header>

          <div className="about-system" aria-hidden="true" data-about-reveal>
            <div className="about-system-arc" />
            <div className="about-system-core">
              <span>DevClub</span>
              <strong>Ambiente de evolução</strong>
            </div>
            <div className="about-system-axis">
              <i data-about-progress />
              {aboutPrinciples.map((principle) => (
                <span key={principle.number} data-about-node>{principle.number}</span>
              ))}
            </div>
            <p>Formação <span>→</span> prática <span>→</span> direção</p>
          </div>
        </div>

        <div className="about-content">
          <p data-about-reveal>
            O DevClub conecta aprendizado Full Stack estruturado, projetos práticos,
            mentoria, comunidade e preparação profissional para que cada aluno avance
            com direção — usando tecnologia e inteligência artificial como ferramentas
            de trabalho, não como atalhos.
          </p>

          <ol className="about-principles">
            {aboutPrinciples.map((principle) => (
              <li key={principle.number} data-about-principle>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

