import React from 'react';

interface CapabilityColumnProps {
  category: string;
  items: string[];
  number: string;
}

export const CapabilityColumn: React.FC<CapabilityColumnProps> = ({
  category,
  items,
  number,
}) => {
  return (
    <div className="flex flex-col space-y-6 p-6 sm:p-8 border-day-border dark:border-agency-border border-b lg:border-b-0 lg:border-r last:border-r-0">
      <div className="flex items-center justify-between pb-4 border-b border-day-border/60 dark:border-agency-border/60">
        <h4 className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
          {category}
        </h4>
        <span className="text-xs font-mono text-day-muted dark:text-agency-muted">{number}</span>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between group cursor-default"
          >
            <span className="text-base sm:text-lg font-display text-day-subtext dark:text-agency-subtext group-hover:text-black dark:group-hover:text-white transition-colors">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-day-border dark:bg-agency-border group-hover:bg-digitify-purple transition-colors" />
          </li>
        ))}
      </ul>
    </div>
  );
};
