import { StaggerTestimonials } from '../ui/stagger-testimonials';
import { studentStories } from './student-stories';

export function StudentsSection() {
  return (
    <section id="alunos" className="students-section" aria-labelledby="students-title">
      <header className="institutional-heading">
        <p>Quem já começou</p>
        <h2 id="students-title">Toda transformação começa antes da primeira vaga.</h2>
        <p>Histórias de quem saiu da dúvida, encontrou direção e começou a construir com confiança.</p>
      </header>
      <StaggerTestimonials stories={studentStories} />
    </section>
  );
}

