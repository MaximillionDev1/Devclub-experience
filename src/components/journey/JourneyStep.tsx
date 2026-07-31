import type { JourneyStepData } from './journey-data';

type JourneyStepProps = {
  step: JourneyStepData;
};

export function JourneyStep({ step }: JourneyStepProps) {
  return (
    <article
      id={`etapa-${step.id}`}
      className="story-step relative border-t border-white/10 py-14 sm:py-18 lg:flex lg:min-h-[52vh] lg:items-center lg:py-24"
      aria-labelledby={`etapa-${step.id}-titulo`}
    >
      <div className="max-w-2xl">
        <p className="flex items-center gap-4 font-mono text-xs tracking-[0.22em] text-white/55">
          <span className="text-white/85">{step.number}</span>
          <span className="h-px w-10 bg-white/20" aria-hidden="true" />
          <span className="uppercase">{step.keyword}</span>
        </p>
        <h3
          id={`etapa-${step.id}-titulo`}
          className="mt-6 max-w-xl text-balance text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.05] font-medium tracking-[-0.035em] text-white/90"
        >
          {step.title}
        </h3>
        <p className="mt-5 max-w-lg text-pretty text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
          {step.text}
        </p>
      </div>
    </article>
  );
}
