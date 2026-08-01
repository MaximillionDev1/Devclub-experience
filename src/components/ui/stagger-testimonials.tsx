import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useState, type KeyboardEvent } from 'react';
import type { StudentStory } from '../students/student-stories';

type StaggerTestimonialsProps = {
  stories: readonly StudentStory[];
};

function modularIndex(value: number, length: number) {
  return ((value % length) + length) % length;
}

export function StaggerTestimonials({ stories }: StaggerTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => modularIndex(current + direction, stories.length));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
  };

  const visibleStories = [-2, -1, 0, 1, 2].map((offset) => ({
    offset,
    story: stories[modularIndex(activeIndex + offset, stories.length)],
  }));

  return (
    <div
      className="testimonials-carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Histórias de alunos"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="testimonials-stage" aria-hidden="true">
        {visibleStories.map(({ story, offset }) => (
          <article key={story.id} className="testimonial-card" data-offset={offset}>
            <Quote aria-hidden="true" />
            <p>“{story.quote}”</p>
            <footer>
              <span className="testimonial-avatar">{story.name.split(' ').map((part) => part[0]).join('')}</span>
              <span><strong>{story.name}</strong><small>{story.track}</small></span>
            </footer>
          </article>
        ))}
      </div>

      <article className="sr-only" aria-live="polite" aria-atomic="true">
        <h3>{activeStory.name}</h3>
        <p>{activeStory.quote}</p>
        <p>{activeStory.context} Trilha: {activeStory.track}.</p>
      </article>

      <div className="testimonials-controls">
        <button type="button" onClick={() => move(-1)} aria-label="História anterior">
          <ArrowLeft aria-hidden="true" />
        </button>
        <p aria-label={`História ${activeIndex + 1} de ${stories.length}`}>
          <strong>{String(activeIndex + 1).padStart(2, '0')}</strong>
          <span aria-hidden="true">/</span>
          {String(stories.length).padStart(2, '0')}
        </p>
        <button type="button" onClick={() => move(1)} aria-label="Próxima história">
          <ArrowRight aria-hidden="true" />
        </button>
      </div>

      <ol className="sr-only">
        {stories.map((story) => <li key={story.id}>{story.name}: {story.quote}</li>)}
      </ol>
    </div>
  );
}

