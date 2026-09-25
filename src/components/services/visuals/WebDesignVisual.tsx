import React from 'react';

interface VisualProps {
  progress: number;
  isDark: boolean;
}

export const WebDesignVisual: React.FC<VisualProps> = ({ progress, isDark }) => {
  const p = Math.max(0, Math.min(1, progress));

  const p1 = Math.min(1, Math.max(0, p / 0.25));
  const p2 = Math.min(1, Math.max(0, (p - 0.25) / 0.25));
  const p3 = Math.min(1, Math.max(0, (p - 0.50) / 0.25));
  const p4 = Math.min(1, Math.max(0, (p - 0.75) / 0.25));

  let phaseLabel = 'PHASE 01: VIEWPORT ARCHITECTURE & SHELL';
  if (p >= 0.75) phaseLabel = 'PHASE 04: BESPOKE DIGITAL FLAGSHIP (60FPS)';
  else if (p >= 0.5) phaseLabel = 'PHASE 03: CODE SYNTHESIS & INTERACTION';
  else if (p >= 0.25) phaseLabel = 'PHASE 02: WIREFRAME & SPATIAL HIERARCHY';

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 overflow-hidden select-none">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3 mb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-digitify-purple animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-black/70 dark:text-white/70 uppercase">
            {phaseLabel}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-day-muted dark:text-agency-muted">
          <span>PERFORMANCE</span>
          <span className="text-digitify-purple font-semibold">{Math.round(p * 100)}%</span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative flex-1 flex items-center justify-center">
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full max-h-[340px] transition-all duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="web-btn-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="web-card-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7928CA" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Browser Window Outer Frame */}
          <rect
            x="80"
            y="45"
            width="440"
            height="290"
            rx="12"
            fill={isDark ? '#09090b' : '#ffffff'}
            stroke={p >= 0.5 ? '#7928CA' : isDark ? '#27272a' : '#e4e4e7'}
            strokeWidth={p >= 0.5 ? '1.8' : '1.2'}
            className="shadow-2xl transition-colors duration-300"
          />

          {/* Browser Window Top Chrome Bar */}
          <rect
            x="80"
            y="45"
            width="440"
            height="34"
            rx="12"
            fill={isDark ? '#141418' : '#f4f4f5'}
          />
          <line
            x1="80"
            y1="79"
            x2="520"
            y2="79"
            stroke={isDark ? '#27272a' : '#e4e4e7'}
            strokeWidth="1"
          />

          {/* Window Traffic Lights (Red, Amber, Green) */}
          <circle cx="102" cy="62" r="4.5" fill="#ef4444" />
          <circle cx="116" cy="62" r="4.5" fill="#eab308" />
          <circle cx="130" cy="62" r="4.5" fill="#22c55e" />

          {/* URL Search Pill */}
          <rect
            x="155"
            y="52"
            width="250"
            height="20"
            rx="5"
            fill={isDark ? '#09090b' : '#ffffff'}
            stroke={isDark ? '#27272a' : '#e4e4e7'}
            strokeWidth="1"
          />
          <text
            x="165"
            y="65"
            fill={isDark ? '#a1a1aa' : '#71717a'}
            fontSize="8"
            fontFamily="monospace"
          >
            🔒 https://digitify.design/experience
          </text>

          {/* Viewport Resolution & Breakpoint Toggles */}
          <text
            x="490"
            y="65"
            textAnchor="end"
            fill="#7928CA"
            fontSize="7.5"
            fontWeight="600"
            fontFamily="monospace"
          >
            1440 × 900
          </text>

          {/* PHASE 2: WIREFRAME SKELETON BLOCKS (p2) */}
          <g opacity={Math.max(0, (1 - p3 * 1.2) * p2)}>
            {/* Wireframe Nav */}
            <rect x="105" y="95" width="60" height="12" rx="3" fill={isDark ? '#27272a' : '#e4e4e7'} />
            <rect x="420" y="95" width="75" height="12" rx="3" fill={isDark ? '#27272a' : '#e4e4e7'} />

            {/* Wireframe Hero Title Skeleton */}
            <rect x="105" y="130" width="220" height="20" rx="4" fill={isDark ? '#27272a' : '#e4e4e7'} />
            <rect x="105" y="156" width="160" height="14" rx="4" fill={isDark ? '#27272a' : '#e4e4e7'} />
            <rect x="105" y="180" width="280" height="8" rx="2" fill={isDark ? '#1f1f23' : '#f4f4f5'} />
            <rect x="105" y="194" width="240" height="8" rx="2" fill={isDark ? '#1f1f23' : '#f4f4f5'} />

            {/* Wireframe Cards Skeleton */}
            <rect x="105" y="220" width="180" height="85" rx="8" fill="none" stroke={isDark ? '#27272a' : '#e4e4e7'} strokeDasharray="3 3" />
            <rect x="305" y="220" width="190" height="85" rx="8" fill="none" stroke={isDark ? '#27272a' : '#e4e4e7'} strokeDasharray="3 3" />
          </g>

          {/* PHASE 3 & 4: HIGH-FIDELITY SYNTHESIS & LIVE UI PREVIEW */}
          {p3 > 0.05 && (
            <g opacity={p3} className="transition-opacity duration-300">
              {/* High-Fi Nav */}
              <text x="105" y="105" fill={isDark ? '#ffffff' : '#09090b'} fontSize="11" fontWeight="700" fontFamily="sans-serif">
                DIGITIFY<tspan fill="#7928CA">.</tspan>
              </text>
              <g transform="translate(415, 93)">
                <rect x="0" y="0" width="80" height="18" rx="9" fill={isDark ? '#18181b' : '#f4f4f5'} stroke="#7928CA" strokeWidth="0.8" />
                <text x="40" y="12" textAnchor="middle" fill="#7928CA" fontSize="7.5" fontWeight="600" fontFamily="monospace">
                  LET'S TALK →
                </text>
              </g>

              {/* High-Fi Editorial Hero Headline */}
              <text
                x="105"
                y="145"
                fill={isDark ? '#ffffff' : '#09090b'}
                fontSize="18"
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="-0.03em"
              >
                BESPOKE DIGITAL FLAGGSHIPS
              </text>
              <text
                x="105"
                y="168"
                fill="#7928CA"
                fontSize="14"
                fontWeight="600"
                fontFamily="sans-serif"
              >
                Engineered with 60FPS precision.
              </text>
              <text
                x="105"
                y="190"
                fill={isDark ? '#a1a1aa' : '#71717a'}
                fontSize="8.5"
                fontFamily="monospace"
              >
                Editorial typography, kinetic interactions, accessible semantics.
              </text>

              {/* High-Fi Interactive Left Card */}
              <g transform="translate(105, 215)">
                <rect
                  x="0"
                  y="0"
                  width="185"
                  height="95"
                  rx="10"
                  fill="url(#web-card-grad)"
                  stroke="#7928CA"
                  strokeWidth="1.2"
                />
                <circle cx="25" cy="25" r="10" fill="#7928CA" />
                <text x="25" y="28" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700" fontFamily="monospace">
                  UI
                </text>
                <text x="45" y="28" fill={isDark ? '#ffffff' : '#09090b'} fontSize="9" fontWeight="700" fontFamily="sans-serif">
                  INTERACTIVE MOTION
                </text>
                <text x="15" y="55" fill={isDark ? '#a1a1aa' : '#71717a'} fontSize="7.5" fontFamily="monospace">
                  Scroll-linked spring physics
                </text>

                {/* Interactive CTA Pill */}
                <rect x="15" y="68" width="90" height="18" rx="9" fill="url(#web-btn-grad)" />
                <text x="60" y="80" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="700" fontFamily="monospace">
                  EXPLORE STACK →
                </text>
              </g>

              {/* High-Fi Live Code Stream Right Card */}
              <g transform="translate(305, 215)">
                <rect
                  x="0"
                  y="0"
                  width="190"
                  height="95"
                  rx="10"
                  fill={isDark ? '#141418' : '#f8fafc'}
                  stroke={isDark ? '#27272a' : '#e4e4e7'}
                  strokeWidth="1"
                />
                <text x="12" y="20" fill={isDark ? '#71717a' : '#94a3b8'} fontSize="7" fontFamily="monospace">
                  // REACT + TAILWIND + MOTION
                </text>
                <text x="12" y="38" fill="#A855F7" fontSize="7.5" fontFamily="monospace">
                  const Experience = () =&gt; &#123;
                </text>
                <text x="22" y="54" fill={isDark ? '#38bdf8' : '#0284c7'} fontSize="7.5" fontFamily="monospace">
                  useScrollTimeline(&#123; fps: 60 &#125;);
                </text>
                <text x="22" y="70" fill="#10b981" fontSize="7.5" fontFamily="monospace">
                  return &lt;FlagshipCanvas /&gt;;
                </text>
                <text x="12" y="86" fill="#A855F7" fontSize="7.5" fontFamily="monospace">
                  &#125;;
                </text>
              </g>

              {/* Interactive Virtual Mouse Cursor (p4) */}
              {p4 > 0.05 && (
                <g
                  transform={`translate(${160 + p4 * 15}, ${295 - (1 - p4) * 20})`}
                  className="transition-transform duration-300"
                >
                  <polygon points="0,0 4,14 7,10 14,14 15,12 8,8 12,5" fill="#ffffff" stroke="#000000" strokeWidth="1.2" />
                  <circle cx="16" cy="16" r={8 * p4} fill="#A855F7" opacity="0.4" />
                </g>
              )}
            </g>
          )}

          {/* Bottom Production Spec Seal */}
          {p4 > 0.05 && (
            <g transform="translate(180, 350)" opacity={p4}>
              <rect
                x="0"
                y="0"
                width="240"
                height="28"
                rx="6"
                fill={isDark ? '#18181b' : '#f4f4f5'}
                stroke="#A855F7"
                strokeWidth="1"
              />
              <text
                x="120"
                y="18"
                textAnchor="middle"
                fill="#A855F7"
                fontSize="8.5"
                fontWeight="700"
                fontFamily="monospace"
              >
                PRODUCTION READY // 100 LIGHTHOUSE // 60FPS
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Timeline Stages Strip */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
        {[
          { label: 'ARCHITECTURE', active: p >= 0.05, done: p >= 0.25 },
          { label: 'WIREFRAME', active: p >= 0.25, done: p >= 0.5 },
          { label: 'INTERACTION', active: p >= 0.5, done: p >= 0.75 },
          { label: 'FLAGSHIP', active: p >= 0.75, done: p >= 0.95 },
        ].map((stage, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="h-1 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full bg-digitify-purple transition-all duration-300"
                style={{
                  width:
                    idx === 0
                      ? `${p1 * 100}%`
                      : idx === 1
                      ? `${p2 * 100}%`
                      : idx === 2
                      ? `${p3 * 100}%`
                      : `${p4 * 100}%`,
                }}
              />
            </div>
            <span
              className={`text-[9px] font-mono tracking-wider truncate ${
                stage.active
                  ? 'text-black dark:text-white font-semibold'
                  : 'text-day-muted dark:text-agency-muted'
              }`}
            >
              {stage.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
