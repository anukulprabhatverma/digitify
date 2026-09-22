import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Context & Research',
    description:
      'We deconstruct brand positioning, competitive landscapes, audience behaviors, and specific commercial targets.',
  },
  {
    number: '02',
    title: 'DEFINE',
    tagline: 'Clarity & Architecture',
    description:
      'We establish a concrete strategic thesis, messaging hierarchy, platform roadmap, and creative direction.',
  },
  {
    number: '03',
    title: 'DESIGN',
    tagline: 'Form & Craftsmanship',
    description:
      'We craft identity systems, intuitive digital interfaces, and high-impact visual narratives engineered to stand out.',
  },
  {
    number: '04',
    title: 'DELIVER',
    tagline: 'Execution & Velocity',
    description:
      'We deploy digital flagships, scale targeted acquisition campaigns, and sustain long-term brand momentum.',
  },
];

export const ApproachSteps: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {steps.map((step, idx) => (
        <div
          key={step.number}
          className="relative overflow-hidden p-6 sm:p-7 rounded-xl border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40 hover:bg-day-surface dark:hover:bg-agency-surface/70 hover:border-digitify-purple/40 dark:hover:border-digitify-purple/40 motion-safe:hover:-translate-y-1 transition-all duration-350 ease-out flex flex-col justify-between space-y-6 group cursor-default select-none motion-reduce:transform-none"
        >
          {/* Top Bar: Number, Tagline & Minimal Indicator Arrow */}
          <div className="flex items-center justify-between border-b border-day-border/60 dark:border-agency-border/60 pb-3">
            <span className="font-mono text-xs text-day-muted dark:text-agency-muted group-hover:text-digitify-purple group-hover:translate-x-1 transition-all duration-350 ease-out motion-reduce:transform-none">
              {step.number}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
                {step.tagline}
              </span>
              <ArrowUpRight
                size={13}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-350 ease-out text-digitify-purple shrink-0 motion-reduce:hidden"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Middle: Title with upward shift & Description fading into focus */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-medium tracking-tight text-black dark:text-white mb-2 transition-transform duration-350 ease-out group-hover:-translate-y-0.5 sm:group-hover:-translate-y-1 motion-reduce:transform-none">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-day-subtext/85 dark:text-agency-subtext/85 group-hover:text-day-subtext dark:group-hover:text-agency-subtext group-hover:opacity-100 transition-all duration-350 ease-out leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Bottom: Animated Phase Indicator */}
          <div className="pt-2 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted group-hover:text-black dark:group-hover:text-white transition-colors duration-350">
            <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple group-hover:scale-125 transition-transform duration-350 motion-reduce:transform-none" />
            <span className="group-hover:translate-x-0.5 transition-transform duration-350 ease-out motion-reduce:transform-none">
              Phase 0{idx + 1}
            </span>
          </div>

          {/* Thin purple accent line revealing from left to right */}
          <div
            className="absolute bottom-0 left-0 h-[2px] w-0 bg-digitify-purple transition-all duration-350 ease-out group-hover:w-full motion-reduce:hidden pointer-events-none"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
};
