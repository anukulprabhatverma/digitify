import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Globe, ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isTouchActive, setIsTouchActive] = useState(false);
  const isPdf = project.previewType === 'pdf';
  const projectName = project.name || project.title || 'Untitled Project';
  const displayDomain = project.domain || (project.externalLink ? project.externalLink.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${projectName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface transition-all duration-300 hover:border-digitify-purple/50 dark:hover:border-digitify-purple/50 flex flex-col group shadow-sm">
      {/* Top Header Bar (Browser Window / Frame Header) */}
      <div className="flex items-center justify-between px-3 xs:px-4 py-2 sm:py-2.5 border-b border-day-border/70 dark:border-agency-border/70 bg-day-surface/95 dark:bg-[#0d0d12]/95 backdrop-blur-sm z-10 select-none">
        {/* Left: Window Controls + Domain Badge */}
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          {/* Subtle Window Dots */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700/80" />
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700/80" />
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700/80" />
          </div>

          {/* Domain / Project Name Pill */}
          <div className="flex items-center gap-1.5 px-2 xs:px-2.5 py-0.5 rounded-md bg-day-border/40 dark:bg-agency-border/40 border border-day-border/60 dark:border-agency-border/60 text-[10px] xs:text-[11px] font-mono text-day-subtext dark:text-agency-subtext tracking-wide truncate max-w-[120px] xs:max-w-[170px] sm:max-w-[240px]">
            <Globe size={11} className="text-day-muted dark:text-agency-muted shrink-0" />
            <span className="truncate">{displayDomain}</span>
          </div>
        </div>

        {/* Right: Project Number, Status Badge & Optional Case Study Action */}
        <div className="flex items-center gap-1.5 xs:gap-2 shrink-0">
          <span className="font-mono text-xs font-semibold text-digitify-purple">
            {project.number}
          </span>

          {isPdf ? (
            <span className="inline-flex items-center gap-1 px-1.5 xs:px-2 py-0.5 rounded text-[9px] xs:text-[10px] font-mono uppercase tracking-wider bg-digitify-purple/10 text-digitify-purple border border-digitify-purple/20">
              <FileText size={10} />
              <span className="hidden xs:inline">Deck</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-1.5 xs:px-2 py-0.5 rounded text-[9px] xs:text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden xs:inline">Live</span>
            </span>
          )}

          {/* Optional subtle Case Study action */}
          {project.caseStudyUrl && (
            <Link
              to={project.caseStudyUrl}
              className="inline-flex items-center gap-0.5 text-[10px] xs:text-[11px] font-mono text-digitify-purple hover:underline transition-colors shrink-0 ml-0.5"
            >
              <span>Case Study</span>
              <ArrowUpRight size={11} />
            </Link>
          )}

          {/* Optional external link button */}
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-day-muted dark:text-agency-muted hover:text-black dark:hover:text-white transition-colors p-1"
              title="Open source in new tab"
              aria-label={`Open ${projectName} in new tab`}
            >
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Main Visual Preview Area (Contained Fixed-Height Viewport with Scroll Trap Prevention on Mobile) */}
      <div className="relative w-full h-[340px] xs:h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-black/95 dark:bg-[#0c0c10]">
        {/* Mobile touch shield to allow smooth page scroll */}
        {!isTouchActive && (
          <div
            onClick={() => setIsTouchActive(true)}
            className="md:hidden absolute inset-0 z-20 bg-black/30 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center cursor-pointer select-none"
          >
            <div className="px-3.5 py-1.5 rounded-full bg-white dark:bg-black text-black dark:text-white text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xl border border-white/20 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple animate-pulse" />
              <span>Tap to interact</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-300 mt-2 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
              Swipe to scroll page
            </span>
          </div>
        )}

        {isTouchActive && (
          <button
            onClick={() => setIsTouchActive(false)}
            className="md:hidden absolute top-2 right-2 z-30 px-2.5 py-1 rounded-md bg-black/85 text-white text-[10px] font-mono uppercase tracking-wider border border-white/20 shadow-md backdrop-blur-sm active:scale-95 cursor-pointer"
          >
            Lock Scroll
          </button>
        )}

        {isPdf ? (
          /* Contained Scrollable PDF Viewport */
          <div className="w-full h-full relative overflow-y-auto overscroll-contain bg-[#111116] scrollbar-thin">
            <object
              data={`${project.previewUrl}#toolbar=0&navpanes=0&scrollbar=1&statusbar=0&messages=0&view=FitH`}
              type="application/pdf"
              className="w-full h-full min-h-full border-0 block"
              aria-label={`${projectName} PDF portfolio presentation`}
            >
              <iframe
                src={`${project.previewUrl}#toolbar=0&navpanes=0&scrollbar=1&statusbar=0&messages=0&view=FitH`}
                className="w-full h-full border-0 block bg-[#111116]"
                title={`${projectName} PDF Portfolio Preview`}
                loading="lazy"
              />
            </object>

            {/* Subtle floating indication that preview is scrollable */}
            <div className="absolute bottom-2.5 right-3 pointer-events-none text-[9px] xs:text-[10px] font-mono text-white/70 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 select-none flex items-center gap-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple animate-pulse" />
              <span>Scrollable PDF Deck</span>
            </div>
          </div>
        ) : (
          /* Contained Scrollable Live Website Viewport */
          <div className="w-full h-full relative overflow-hidden bg-white dark:bg-black">
            <iframe
              src={project.previewUrl}
              className="w-full h-full border-0 block bg-white"
              title={`${projectName} Live Website Preview`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
            />

            {/* Subtle bottom fallback banner */}
            <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-md px-3 py-1.5 flex items-center justify-between text-[10px] xs:text-[11px] font-mono text-zinc-300 border-t border-white/10 z-10 select-none">
              <span className="truncate pr-2 text-zinc-400">
                {project.fallbackMessage || 'Live embedded preview · Stays contained'}
              </span>
              {project.externalLink && (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-digitify-purple hover:underline shrink-0 flex items-center gap-1 font-medium"
                >
                  <span>Visit site</span>
                  <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Project Meta Bar Below */}
      <div className="p-4 sm:p-5 border-t border-day-border/60 dark:border-agency-border/60 flex flex-col space-y-1.5 bg-day-surface dark:bg-agency-surface">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-display font-medium text-black dark:text-white group-hover:text-digitify-purple transition-colors truncate">
            {projectName}
          </h3>
          <span className="text-[11px] font-mono uppercase tracking-wider text-day-muted dark:text-agency-muted shrink-0">
            {project.category}
          </span>
        </div>

        {project.description && (
          <p className="text-xs text-day-subtext dark:text-agency-subtext line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};
