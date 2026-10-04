import React, { useEffect } from 'react';
import { X, FileText, Download } from 'lucide-react';
import { ProjectItem } from '../../data/projectsData';

interface ProjectPreviewModalProps {
  isOpen: boolean;
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  isOpen,
  project,
  onClose,
}) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isPdf = project.previewType === 'pdf';
  const hasMultiplePages = Boolean(project.pdfPages && project.pdfPages.length > 0);
  const totalPages = project.totalPages || (project.pdfPages ? project.pdfPages.length : 1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} Portfolio Presentation`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 xs:p-3 sm:p-5 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] bg-[#0c0c10] border border-agency-border rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-3.5 xs:px-5 sm:px-6 py-3 sm:py-3.5 border-b border-agency-border bg-[#08080c] select-none shrink-0 gap-2">
          {/* Left: Indicator, Number, Name, Tag */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="h-2 w-2 rounded-full bg-digitify-purple animate-ping shrink-0" />
            <span className="font-mono text-xs font-semibold text-digitify-purple shrink-0">
              {project.number}
            </span>
            <h2 className="text-sm xs:text-base sm:text-lg font-display font-medium text-white truncate">
              {project.name}
            </h2>
            {project.tag && (
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-agency-border bg-agency-surface text-agency-subtext shrink-0">
                {project.tag}
              </span>
            )}
          </div>

          {/* Right: Pages Badge, PDF Download, Close Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {hasMultiplePages && (
              <span className="text-[10px] xs:text-[11px] font-mono text-agency-muted bg-white/5 border border-white/10 px-2 sm:px-2.5 py-1 rounded-md">
                {totalPages} {totalPages === 1 ? 'Page' : 'Pages'}
              </span>
            )}

            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                download={`${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`}
                className="hidden xs:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-[10px] xs:text-[11px] font-mono uppercase tracking-wider text-white bg-agency-surface border border-agency-border hover:border-digitify-purple hover:text-digitify-purple transition-colors cursor-pointer"
                title="Download local PDF"
              >
                <Download size={12} />
                <span>PDF</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="text-agency-subtext hover:text-white transition-colors w-8 h-8 rounded-full flex items-center justify-center hover:bg-agency-elevated cursor-pointer active:scale-95"
              aria-label="Close Project Deck"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Viewport: Contained Multi-Page PDF Viewer */}
        <div className="w-full flex-1 overflow-y-auto overscroll-contain bg-[#07070a] p-3 xs:p-4 sm:p-6 space-y-4 sm:space-y-6 scrollbar-thin">
          {hasMultiplePages ? (
            /* Multi-Page PDF Deck Stream */
            project.pdfPages!.map((pageSrc, idx) => (
              <div key={idx} className="relative w-full flex flex-col items-center">
                {/* Clean page numbering banner */}
                <div className="w-full flex items-center justify-between max-w-4xl px-2 py-1 mb-1.5 text-[10px] xs:text-[11px] font-mono text-agency-muted uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <FileText size={11} className="text-digitify-purple" />
                    <span>{project.name} · Deck</span>
                  </span>
                  <span>
                    Page {idx + 1} of {totalPages}
                  </span>
                </div>

                {/* Page Canvas Container */}
                <div className="w-full max-w-4xl bg-black rounded-lg overflow-hidden border border-agency-border shadow-2xl">
                  <img
                    src={pageSrc}
                    alt={`${project.name} — Page ${idx + 1}`}
                    className="w-full h-auto object-contain block select-none"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </div>
              </div>
            ))
          ) : isPdf && project.pdfUrl ? (
            /* Single/Fallback PDF Embed Viewport */
            <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-agency-border bg-[#111116]">
              <object
                data={`${project.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                type="application/pdf"
                className="w-full h-full border-0 block"
                aria-label={`${project.name} PDF preview`}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-agency-subtext">
                  <FileText size={32} className="text-digitify-purple mb-3" />
                  <p className="text-sm font-mono mb-3">{project.name} PDF Deck</p>
                  <a
                    href={project.pdfUrl}
                    download
                    className="px-4 py-2 rounded-lg bg-digitify-purple text-white text-xs font-mono uppercase tracking-wider"
                  >
                    Download PDF Deck
                  </a>
                </div>
              </object>
            </div>
          ) : (
            /* Single Visual Snapshot */
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-4xl bg-black rounded-lg overflow-hidden border border-agency-border shadow-2xl">
                <img
                  src={project.previewImage || project.previewUrl}
                  alt={project.name}
                  className="w-full h-auto object-contain block select-none"
                  loading="eager"
                  draggable={false}
                />
              </div>
            </div>
          )}

          {/* End of deck signature */}
          <div className="pt-4 pb-2 text-center text-xs font-mono text-agency-muted border-t border-agency-border/40">
            <span>End of presentation · {project.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
