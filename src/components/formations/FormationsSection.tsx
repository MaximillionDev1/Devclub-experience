import { DevclubOrbitEcosystem } from '../ui/devclub-orbit-ecosystem';
import { formationPillars } from './formation-data';

export function FormationsSection() {
  return (
    <section id="formacoes" className="formations-section" aria-labelledby="formations-title">
      <header className="institutional-heading">
        <p>Formação Full Stack</p>
        <h2 id="formations-title">Tudo o que você precisa para deixar de apenas estudar e começar a construir.</h2>
        <p>Uma jornada completa, dos fundamentos aos projetos reais, conectando código, mentoria, comunidade e preparação para o mercado.</p>
      </header>
      <DevclubOrbitEcosystem pillars={formationPillars} />
    </section>
  );
}

