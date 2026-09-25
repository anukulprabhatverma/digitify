import React from 'react';
import { Play } from 'lucide-react';

interface ServiceMediaPlaceholderProps {
  serviceId: string;
  serviceName: string;
  serviceNumber: string;
  videoSrc?: string;
  posterSrc?: string;
}

/**
 * ServiceMediaPlaceholder
 *
 * Clean, premium media placeholder ready to accept:
 * - MP4 / WebM video (autoplay, loop, muted, playsInline)
 * - Static image or animated media
 *
 * When videoSrc or posterSrc is provided in the future, it renders the actual media with
 * responsive object-fit: cover and rounded-corner clipping.
 *
 * Future replacement concepts:
 * - 01 Digital Marketing: Digital marketing ecosystem (search, social, email, targeting, growth chart)
 * - 02 Performance Marketing: Precision funnel (ads -> clicks -> leads -> conversions -> ROAS growth)
 * - 03 Social Media Management: Content pieces (posts, reels, engagement signals, community growth)
 * - 04 Graphic Design: Canvas composition (grid, typography, shapes, finished editorial creative)
 * - 05 Branding & Visual Identity: Identity system (strategy, typography, color palette, logo construction)
 * - 06 Web Design & Experiences: Digital flagship (wireframe, UI components, responsive layout, interaction)
 */
export const ServiceMediaPlaceholder: React.FC<ServiceMediaPlaceholderProps> = ({
  serviceId,
  serviceName,
  serviceNumber,
  videoSrc,
  posterSrc,
}) => {
  // If video is provided later, render the full-bleed video element
  if (videoSrc) {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[460px] rounded-xl sm:rounded-2xl overflow-hidden bg-black/95">
        <video
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // If static image is provided later, render the image element
  if (posterSrc) {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[460px] rounded-xl sm:rounded-2xl overflow-hidden bg-black/95">
        <img
          src={posterSrc}
          alt={serviceName}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="group relative w-full h-full min-h-[200px] xs:min-h-[230px] sm:min-h-[290px] lg:min-h-[350px] xl:min-h-[380px] max-h-[450px] rounded-xl sm:rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-black/40 flex flex-col justify-between p-4 sm:p-5 transition-all duration-500 ease-out hover:scale-[1.012] select-none"
      data-service={serviceId}
    >
      {/* Background Architectural Canvas Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Media Spec Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-digitify-purple" />
          <span>SHOWCASE // {serviceNumber}</span>
        </div>
        <span className="hidden sm:inline border border-black/10 dark:border-white/10 rounded px-2 py-0.5 text-[9px]">
          16:9 4K READY
        </span>
      </div>

      {/* Center Media Visual Anchor */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-3.5 sm:py-4">
        {/* Sleek Minimalist Media Beacon */}
        <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-black/15 dark:border-white/15 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:border-digitify-purple/60">
          <Play
            size={18}
            className="ml-0.5 text-black/70 dark:text-white/70 transition-colors duration-300 group-hover:text-digitify-purple"
          />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-digitify-purple" />
        </div>

        <p className="mt-4 font-mono text-[11px] sm:text-xs tracking-wider text-black/80 dark:text-white/80 font-medium">
          [ FUTURE SERVICE VIDEO ]
        </p>
        <p className="mt-1 text-[10px] sm:text-[11px] text-day-muted dark:text-agency-muted max-w-xs font-mono">
          Ready for {serviceName} film showcase
        </p>
      </div>

      {/* Bottom Media Spec Footer */}
      <div className="relative z-10 flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.06] pt-3 text-[9px] font-mono text-day-muted dark:text-agency-muted">
        <span>FORMAT: MP4 / WEBM / 60FPS</span>
        <span>OBJECT-FIT: COVER</span>
      </div>
    </div>
  );
};
