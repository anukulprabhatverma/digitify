import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Digitify Agency Showreel"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-12 animate-fadeIn"
    >
      <div className="relative w-full max-w-5xl bg-[#0d0d10] border border-agency-border rounded-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-agency-border bg-[#08080a]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-digitify-purple animate-ping" />
            <span className="text-xs uppercase tracking-widest text-agency-muted font-mono">
              DIGITIFY SHOWREEL · 2026 EDITION
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-agency-subtext hover:text-white transition-colors p-1 rounded-md hover:bg-agency-elevated cursor-pointer"
            aria-label="Close Showreel"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video / Animated Reel Presentation Canvas */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {/* Visual canvas animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] rounded-full border border-digitify-purple/20 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10" />
            <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-digitify-purple/40 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>

          {/* Editorial Content Overlay in Reel */}
          <div className="relative z-10 text-center max-w-lg px-6">
            <img
              src="/brand/digitify-logo-white.png"
              alt="Digitify Logo"
              className="h-10 sm:h-12 w-auto mx-auto mb-6 object-contain"
            />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium tracking-tight text-white mb-2">
              WE MAKE BRANDS IMPOSSIBLE TO IGNORE.
            </h3>
            <p className="text-xs sm:text-sm text-agency-muted font-mono tracking-widest uppercase mb-6">
              [AGENCY SHOWREEL VIDEO PLACEHOLDER]
            </p>
            <p className="text-xs text-agency-subtext max-w-md mx-auto">
              Replace this placeholder with your verified video reel embed or direct MP4 stream when ready.
            </p>
          </div>

          {/* Interactive Player Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-agency-border/60">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <span className="text-xs font-mono text-agency-muted">00:45 / 02:14</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-agency-muted uppercase tracking-wider hidden sm:inline">
                4K HDR · 60 FPS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
