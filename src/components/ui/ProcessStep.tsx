import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  isLast = false,
}) => {
  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-lg border border-day-border dark:border-agency-border bg-day-surface/60 dark:bg-agency-surface/40 hover:bg-day-surface dark:hover:bg-agency-surface transition-all duration-200 group ${
        !isLast ? 'mb-4 md:mb-0' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-8">
        <span className="font-mono text-xs text-day-muted dark:text-agency-muted group-hover:text-digitify-purple transition-colors">
          STEP {number}
        </span>
        <span className="h-2 w-2 rounded-full border border-day-muted dark:border-agency-muted group-hover:border-digitify-purple group-hover:bg-digitify-purple transition-all" />
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-display font-medium text-black dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
