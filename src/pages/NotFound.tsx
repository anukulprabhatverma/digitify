import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-8 text-center">
      <div className="space-y-6 max-w-lg">
        <span className="text-xs font-mono uppercase tracking-widest text-digitify-purple block">
          404 ERROR
        </span>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-display font-medium tracking-tightest text-black dark:text-white leading-none">
          404<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-base sm:text-lg text-day-subtext dark:text-agency-subtext leading-relaxed">
          The page you are looking for does not exist, has been relocated, or is temporarily unavailable.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-md"
          >
            <ArrowLeft size={14} />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
