import React from 'react';
import { FileText, Globe } from 'lucide-react';
import { ProjectItem } from '../../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isPdf = project.previewType === 'pdf';
  const displayDomain =
    project.domain ||
    project.previewUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '');

  const handleClick = () => {
    if (onSelect) {
      onSelect(project);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.name} presentation deck`}
      className="group relative overflow-hidden rounded-2xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface transition-all duration-300 hover:border-black dark:hover:border-white/50 hover:shadow-xl flex flex-col shadow-sm cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-digitify-purple/50"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━
          TOP FRAME HEADER BAR (Editorial Window Frame)
          ━━━━━━━━━━━━━━━━━━━━ */}
      <div className="flex items-center justify-between px-3.5 xs:px-4 py-2.5 sm:py-3 border-b border-day-border/70 dark:border-agency-border/70 bg-day-surface/95 dark:bg-[#0d0d12]/95 backdrop-blur-sm z-10 select-none">
        {/* Left: Window Frame Details + Project Domain Identifier */}
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700/80" />
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700/80" />
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700/80" />
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-day-border/40 dark:bg-agency-border/40 border border-day-border/60 dark:border-agency-border/60 text-[10px] xs:text-[11px] font-mono text-day-subtext dark:text-agency-subtext tracking-wide truncate max-w-[150px] xs:max-w-[200px] sm:max-w-[280px]">
            {isPdf ? (
              <FileText size={11} className="text-digitify-purple shrink-0" />
            ) : (
              <Globe size={11} className="text-digitify-purple shrink-0" />
            )}
            <span className="truncate">{displayDomain}</span>
          </div>
        </div>

        {/* Right: Project Number & Preview Status Indicator */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-xs sm:text-sm font-semibold text-digitify-purple">
            {project.number}
          </span>

          {isPdf ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] xs:text-[10px] font-mono uppercase tracking-wider bg-digitify-purple/10 text-digitify-purple border border-digitify-purple/20">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple animate-pulse" />
              <span>PDF Deck</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] xs:text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Visual Snapshot</span>
            </span>
          )}
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━
          CONTAINED VISUAL PREVIEW AREA
          Fixed-height card dimensions maintained, Page 1 thumbnail cleanly contained with aspect ratio preserved
          ━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative w-full h-[360px] xs:h-[400px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-black/95 dark:bg-[#0c0c10] flex items-center justify-center">
        <img
          src={project.previewImage || project.previewUrl}
          alt={`${project.name} Portfolio Preview`}
          className="w-full h-full object-contain object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] select-none pointer-events-none"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━
          PROJECT METADATA AREA (Below Preview)
          Editorial typography, generous spacing, clear hierarchy
          ━━━━━━━━━━━━━━━━━━━━ */}
      <div className="p-5 sm:p-6 border-t border-day-border/60 dark:border-agency-border/60 flex flex-col space-y-2.5 bg-day-surface dark:bg-agency-surface">
        {/* Top: Name + Category Tag */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono text-xs text-digitify-purple font-semibold">
              {project.number}
            </span>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-display font-medium text-black dark:text-white group-hover:text-digitify-purple transition-colors tracking-tight">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.tag && (
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-day-border dark:border-agency-border bg-day-surface/80 dark:bg-agency-surface/60 text-day-subtext dark:text-agency-subtext">
                {project.tag}
              </span>
            )}
          </div>
        </div>

        {/* Short Project Descriptor */}
        <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext leading-relaxed">
          {project.description}
        </p>
      </div>
    </article>
  );
};
