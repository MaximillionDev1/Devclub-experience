import { ArrowUpRight } from 'lucide-react';

type MindsetPrinciple = {
  number: string;
  title: string;
  description: string;
};

const mindsetPrinciples = [
  {
    number: '01',
    title: 'Rompa a sua própria barreira',
    description: 'Antes de aprender uma nova habilidade, existe uma decisão mais silenciosa: admitir que a mudança também pode ser possível para você.',
  },
  {
    number: '02',
    title: 'Ilumine o próximo trecho',
    description: 'Nenhuma carreira é construída enxergando tudo de uma vez. Comece pelo passo que está ao seu alcance agora.',
  },
  {
    number: '03',
    title: 'Continue em movimento',
    description: 'Direção sem constância permanece intenção. A evolução aparece quando pequenas decisões começam a se repetir.',
  },
] as const satisfies readonly MindsetPrinciple[];

const officialVideoUrl = 'https://www.youtube.com/watch?v=gc7y-wXJvkU';

export function MindsetSection() {
  return (
    <section id="mentalidade" className="mindset-section" aria-labelledby="mindset-title">
      <div className="mindset-layout">
        <div className="mindset-editorial">
          <header>
            <p>Mentalidade</p>
            <h2 id="mindset-title">Você não precisa enxergar o caminho inteiro.</h2>
            <p>Precisa apenas decidir qual será o próximo passo.</p>
          </header>

          <ol className="mindset-principles">
            {mindsetPrinciples.map((principle) => (
              <li key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mindset-video-action">
            <p>Esta reflexão continua em uma conversa oficial do DevClub.</p>
            <a href={officialVideoUrl} target="_blank" rel="noreferrer">
              Assistir à conversa completa
              <ArrowUpRight aria-hidden="true" strokeWidth={1.6} />
              <span className="sr-only"> no YouTube, abre em uma nova aba</span>
            </a>
          </div>
        </div>

        <figure className="mindset-artifact">
          <div className="mindset-frame" aria-hidden="true">
            <div className="mindset-frame-meta">
              <span>DevClub Experience</span>
              <span>Frame 04</span>
            </div>
            <div className="mindset-frame-light" />
            <div className="mindset-frame-path">
              <span />
              <i />
            </div>
            <div className="mindset-frame-copy">
              <span>Decisão</span>
              <strong>Próximo<br />passo</strong>
            </div>
            <div className="mindset-frame-desk" />
          </div>
          <figcaption>Um quadro sobre escolha, direção e o trecho que já pode ser percorrido.</figcaption>
        </figure>
      </div>
    </section>
  );
}

