import { useRef, useState } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { tutorProfiles } from './tutor-data';

export function TutorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>(tutorProfiles[0].id);
  const activeTutor = tutorProfiles.find((tutor) => tutor.id === activeId) ?? tutorProfiles[0];

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          const voices = gsap.utils.toArray<HTMLElement>('[data-tutor-voice]');

          gsap.set('[data-tutors-reveal]', { autoAlpha: 0, y: 20 });
          gsap.set('[data-tutors-line]', { scaleY: 0 });
          gsap.set(voices, { autoAlpha: 0, x: 14 });

          gsap
            .timeline({
              defaults: { ease: 'power1.out' },
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 76%',
                end: 'bottom 64%',
                scrub: 0.45,
                invalidateOnRefresh: true,
              },
            })
            .to('[data-tutors-reveal]', { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 })
            .to('[data-tutors-line]', { scaleY: 1, duration: 1.5, ease: 'none' }, 0.38)
            .to(voices, { autoAlpha: 1, x: 0, duration: 0.44, stagger: 0.14 }, 0.58);
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section id="tutores" ref={sectionRef} className="tutors-section" aria-labelledby="tutors-title">
      <div className="tutors-layout">
        <div className="tutors-editorial">
          <header data-tutors-reveal>
            <p>Quem caminha com você</p>
            <h2 id="tutors-title">Aprender sozinho é possível. Evoluir acompanhado muda o ritmo.</h2>
            <p>
              Tutores ajudam a transformar dúvidas em decisões técnicas, oferecendo
              contexto, revisão e direção ao longo da jornada.
            </p>
          </header>

          <article
            id="tutor-profile"
            className="tutor-profile"
            data-accent={activeTutor.accent}
            data-tutors-reveal
          >
            <div className="tutor-profile-heading">
              <span aria-hidden="true">{activeTutor.initials}</span>
              <div>
                <p>Perfil em conversa</p>
                <h3>{activeTutor.name}</h3>
                <strong>{activeTutor.specialty}</strong>
              </div>
            </div>
            <blockquote>“{activeTutor.statement}”</blockquote>
            <div className="tutor-support">
              <span>Tipo de apoio</span>
              <p>{activeTutor.support}</p>
            </div>
            <div className="tutor-annotations" aria-hidden="true">
              <span>review.context</span>
              <i />
              <span>direction.ready</span>
            </div>
          </article>
        </div>

        <div className="tutors-conversation" aria-label="Selecionar perfil de tutor">
          <div className="tutors-conversation-line" data-tutors-line aria-hidden="true" />
          <p data-tutors-reveal>
            <span>05 vozes</span>
            Experiência compartilhada
          </p>
          <div className="tutor-selector">
            {tutorProfiles.map((tutor, index) => (
              <button
                key={tutor.id}
                type="button"
                data-tutor-voice={tutor.id}
                data-accent={tutor.accent}
                data-active={tutor.id === activeId}
                aria-pressed={tutor.id === activeId}
                aria-controls="tutor-profile"
                onClick={() => setActiveId(tutor.id)}
                onFocus={() => setActiveId(tutor.id)}
                onMouseEnter={() => setActiveId(tutor.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{tutor.name}</strong>
                <small>{tutor.specialty}</small>
                <i aria-hidden="true">{tutor.initials}</i>
              </button>
            ))}
          </div>
          <p className="tutors-context" data-tutors-reveal>
            Não se trata de entregar respostas prontas. Trata-se de acrescentar experiência
            ao momento de escolher o próximo caminho.
          </p>
        </div>
      </div>
    </section>
  );
}
