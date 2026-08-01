import { useState, type CSSProperties } from 'react';
import type { FormationPillar } from '../formations/formation-data';

type DevclubOrbitEcosystemProps = {
  pillars: readonly FormationPillar[];
};

type OrbitStyle = CSSProperties & {
  '--orbit-index': number;
  '--orbit-count': number;
};

const orbitLabels = {
  inner: 'Base',
  middle: 'Construção',
  outer: 'Evolução',
} as const;

export function DevclubOrbitEcosystem({ pillars }: DevclubOrbitEcosystemProps) {
  const [activeId, setActiveId] = useState(pillars[0].id);
  const activeIndex = Math.max(0, pillars.findIndex((pillar) => pillar.id === activeId));
  const activePillar = pillars[activeIndex];

  return (
    <div className="formation-ecosystem">
      <div className="formation-orbit-stage" aria-label="Pilares conectados da formação Full Stack">
        <div className="formation-orbit-center">
          <span>DevClub</span>
          <strong>Full Stack</strong>
          <i aria-hidden="true" />
        </div>

        {(['inner', 'middle', 'outer'] as const).map((orbit) => {
          const orbitPillars = pillars.filter((pillar) => pillar.orbit === orbit);
          return (
            <div key={orbit} className={`formation-orbit formation-orbit--${orbit}`}>
              <span className="formation-orbit-ring" aria-hidden="true" />
              <span className="formation-orbit-name" aria-hidden="true">{orbitLabels[orbit]}</span>
              <div className="formation-orbit-rotor">
                {orbitPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  const style: OrbitStyle = {
                    '--orbit-index': index,
                    '--orbit-count': orbitPillars.length,
                  };
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      className="formation-orbit-position"
                      style={style}
                      data-active={pillar.id === activeId}
                      data-accent={pillar.accent}
                      aria-pressed={pillar.id === activeId}
                      aria-controls="formation-detail"
                      onClick={() => setActiveId(pillar.id)}
                    >
                      <span className="formation-orbit-node">
                        <Icon aria-hidden="true" strokeWidth={1.65} />
                        <span>{pillar.shortLabel}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="formation-mobile-track" aria-label="Pilares da formação">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <button
              key={pillar.id}
              type="button"
              className="formation-mobile-pillar"
              data-active={pillar.id === activeId}
              data-accent={pillar.accent}
              aria-pressed={pillar.id === activeId}
              aria-controls="formation-detail"
              onClick={() => setActiveId(pillar.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Icon aria-hidden="true" strokeWidth={1.65} />
              <strong>{pillar.shortLabel}</strong>
            </button>
          );
        })}
      </div>

      <article id="formation-detail" className="formation-detail" aria-live="polite">
        <div className="formation-detail-index" aria-label={`Pilar ${activeIndex + 1} de ${pillars.length}`}>
          <span>{String(activeIndex + 1).padStart(2, '0')}</span>
          <div aria-hidden="true"><i style={{ transform: `scaleX(${(activeIndex + 1) / pillars.length})` }} /></div>
          <span>{String(pillars.length).padStart(2, '0')}</span>
        </div>
        <p>{orbitLabels[activePillar.orbit]}</p>
        <h3>{activePillar.title}</h3>
        <p>{activePillar.description}</p>
        <dl>
          <dt>Você desenvolve</dt>
          <dd>{activePillar.outcome}</dd>
        </dl>
      </article>
    </div>
  );
}

