import React from 'react';

interface VisualProps {
  progress: number;
  isDark: boolean;
}

export const SocialMediaVisual: React.FC<VisualProps> = ({ progress, isDark }) => {
  const p = Math.max(0, Math.min(1, progress));

  const p1 = Math.min(1, Math.max(0, p / 0.25));
  const p2 = Math.min(1, Math.max(0, (p - 0.25) / 0.25));
  const p3 = Math.min(1, Math.max(0, (p - 0.50) / 0.25));
  const p4 = Math.min(1, Math.max(0, (p - 0.75) / 0.25));

  let phaseLabel = 'PHASE 01: AESTHETIC DIRECTION & VOICE';
  if (p >= 0.75) phaseLabel = 'PHASE 04: CULTURAL RESONANCE & SCALE';
  else if (p >= 0.5) phaseLabel = 'PHASE 03: COMMUNITY ENGAGEMENT';
  else if (p >= 0.25) phaseLabel = 'PHASE 02: CURATED CONTENT ARCHITECTURE';

  // Network community nodes around the cards
  const audienceNodes = [
    { x: 90, y: 80, delay: 0.1 },
    { x: 510, y: 90, delay: 0.2 },
    { x: 70, y: 280, delay: 0.3 },
    { x: 530, y: 270, delay: 0.15 },
    { x: 140, y: 350, delay: 0.25 },
    { x: 460, y: 350, delay: 0.35 },
  ];

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
          <span>COMMUNITY</span>
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
            <linearGradient id="soc-card-center" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="soc-pulse-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#7928CA" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Ambient Layout Grid */}
          <g opacity={isDark ? 0.12 : 0.06}>
            <circle cx="300" cy="200" r="160" stroke="currentColor" strokeDasharray="3 5" />
            <circle cx="300" cy="200" r="100" stroke="currentColor" strokeDasharray="3 5" />
            <line x1="140" y1="200" x2="460" y2="200" stroke="currentColor" strokeDasharray="2 4" />
          </g>

          {/* PHASE 1: AESTHETIC DIRECTION (Aspect Ratio Calibration Guides) */}
          <g opacity={1 - p4 * 0.5}>
            <g transform="translate(130, 40)" opacity={p1}>
              <text
                x="0"
                y="12"
                fill={isDark ? '#a1a1aa' : '#71717a'}
                fontSize="8"
                fontFamily="monospace"
              >
                // FORMAT: 9:16 STORY / REEL
              </text>
            </g>
            <g transform="translate(370, 40)" opacity={p1}>
              <text
                x="0"
                y="12"
                fill="#7928CA"
                fontSize="8"
                fontWeight="600"
                fontFamily="monospace"
              >
                // EDITORIAL PACING: DAILY
              </text>
            </g>
          </g>

          {/* PHASE 3: COMMUNITY ENGAGEMENT (Radiating Waves around Center Card) */}
          {p3 > 0.05 && (
            <g opacity={p3}>
              <circle
                cx="300"
                cy="190"
                r={70 + p3 * 50}
                stroke="#7928CA"
                strokeWidth="1.2"
                strokeOpacity={0.6 * (1 - p3 * 0.4)}
                strokeDasharray="4 4"
              />
              <circle
                cx="300"
                cy="190"
                r={110 + p3 * 50}
                stroke="#A855F7"
                strokeWidth="0.8"
                strokeOpacity={0.4 * (1 - p3 * 0.4)}
              />
            </g>
          )}

          {/* PHASE 2: CURATED CONTENT TILES ASSEMBLED IN HARMONY */}
          {p2 > 0.05 && (
            <g opacity={p2} className="transition-all duration-300">
              {/* Left Tile: Story / Narrative Card */}
              <g
                transform={`translate(${140 - (1 - p2) * 40}, 110)`}
                opacity={p2}
              >
                <rect
                  x="0"
                  y="0"
                  width="110"
                  height="160"
                  rx="10"
                  fill={isDark ? '#141418' : '#ffffff'}
                  stroke={isDark ? '#27272a' : '#e4e4e7'}
                  strokeWidth="1"
                  className="shadow-md"
                />
                {/* Image Placeholder */}
                <rect
                  x="10"
                  y="10"
                  width="90"
                  height="80"
                  rx="6"
                  fill={isDark ? '#27272a' : '#f4f4f5'}
                />
                <circle cx="55" cy="50" r="14" fill="#7928CA" opacity="0.3" />
                {/* Text lines */}
                <rect x="12" y="102" width="70" height="6" rx="2" fill={isDark ? '#52525b' : '#d4d4d8'} />
                <rect x="12" y="114" width="86" height="5" rx="2" fill={isDark ? '#3f3f46' : '#e4e4e7'} />
                <rect x="12" y="124" width="50" height="5" rx="2" fill={isDark ? '#3f3f46' : '#e4e4e7'} />
                {/* Tag */}
                <text x="12" y="148" fill="#7928CA" fontSize="7" fontWeight="600" fontFamily="monospace">
                  #EDITORIAL
                </text>
              </g>

              {/* Right Tile: Carousel Preview */}
              <g
                transform={`translate(${350 + (1 - p2) * 40}, 110)`}
                opacity={p2}
              >
                <rect
                  x="0"
                  y="0"
                  width="110"
                  height="160"
                  rx="10"
                  fill={isDark ? '#141418' : '#ffffff'}
                  stroke={isDark ? '#27272a' : '#e4e4e7'}
                  strokeWidth="1"
                  className="shadow-md"
                />
                {/* Carousel Card Header */}
                <rect
                  x="10"
                  y="10"
                  width="90"
                  height="80"
                  rx="6"
                  fill={isDark ? '#27272a' : '#f4f4f5'}
                />
                {/* Carousel dots */}
                <circle cx="45" cy="80" r="2.5" fill="#7928CA" />
                <circle cx="55" cy="80" r="2.5" fill={isDark ? '#52525b' : '#a1a1aa'} />
                <circle cx="65" cy="80" r="2.5" fill={isDark ? '#52525b' : '#a1a1aa'} />
                {/* Text lines */}
                <rect x="12" y="102" width="80" height="6" rx="2" fill={isDark ? '#52525b' : '#d4d4d8'} />
                <rect x="12" y="114" width="70" height="5" rx="2" fill={isDark ? '#3f3f46' : '#e4e4e7'} />
                <text x="12" y="148" fill="#7928CA" fontSize="7" fontWeight="600" fontFamily="monospace">
                  #CAROUSEL
                </text>
              </g>

              {/* Center Tile: Hero Reel / Flagship Showcase */}
              <g
                transform="translate(235, 80)"
                className="transition-transform duration-300"
              >
                <rect
                  x="0"
                  y="0"
                  width="130"
                  height="210"
                  rx="14"
                  fill={isDark ? '#09090b' : '#ffffff'}
                  stroke="#7928CA"
                  strokeWidth="2"
                  className="shadow-2xl"
                />
                {/* Reel visual banner */}
                <rect
                  x="8"
                  y="8"
                  width="114"
                  height="130"
                  rx="10"
                  fill="url(#soc-card-center)"
                />
                {/* Play / Sound glyph */}
                <circle cx="65" cy="73" r="20" fill="#ffffff" opacity="0.9" />
                <polygon points="60,63 74,73 60,83" fill="#7928CA" />

                {/* Badge inside reel */}
                <rect x="14" y="14" width="55" height="16" rx="4" fill="#000000" opacity="0.6" />
                <text x="20" y="25" fill="#ffffff" fontSize="7.5" fontWeight="700" fontFamily="monospace">
                  DIGITIFY
                </text>

                {/* Engagement counts */}
                <text
                  x="14"
                  y="158"
                  fill={isDark ? '#ffffff' : '#09090b'}
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  DIGITIFY IDENTITY
                </text>
                <text
                  x="14"
                  y="172"
                  fill={isDark ? '#a1a1aa' : '#71717a'}
                  fontSize="7.5"
                  fontFamily="monospace"
                >
                  CURATED NARRATIVE
                </text>

                {/* Interactive Action Dots */}
                <circle cx="20" cy="192" r="4" fill="#A855F7" />
                <circle cx="36" cy="192" r="4" fill="#7928CA" />
                <circle cx="52" cy="192" r="4" fill={isDark ? '#52525b' : '#d4d4d8'} />
              </g>
            </g>
          )}

          {/* Floating Reaction Beacons (Heart, Comment, Share) */}
          {p3 > 0.1 && (
            <g opacity={p3}>
              {/* Heart Beacon */}
              <g transform={`translate(${190 - p3 * 10}, ${100 - p3 * 20})`} className="animate-bounce">
                <rect x="0" y="0" width="70" height="24" rx="12" fill="#7928CA" />
                <text x="35" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700" fontFamily="monospace">
                  ❤ +840%
                </text>
              </g>

              {/* Conversation Beacon */}
              <g transform={`translate(${340 + p3 * 10}, ${100 - p3 * 20})`}>
                <rect x="0" y="0" width="85" height="24" rx="12" fill={isDark ? '#27272a' : '#f4f4f5'} stroke="#7928CA" />
                <text x="42" y="15" textAnchor="middle" fill="#7928CA" fontSize="8" fontWeight="700" fontFamily="monospace">
                  💬 RESONANCE
                </text>
              </g>
            </g>
          )}

          {/* PHASE 4: AUDIENCE NETWORK GRAPH & SCALE STAT */}
          {p4 > 0.05 && (
            <g opacity={p4}>
              {/* Connecting filaments to audience nodes */}
              {audienceNodes.map((n, idx) => (
                <g key={`node-${idx}`}>
                  <line
                    x1="300"
                    y1="190"
                    x2={n.x}
                    y2={n.y}
                    stroke="#7928CA"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity={p4 * 0.7}
                  />
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="5"
                    fill={isDark ? '#18181b' : '#ffffff'}
                    stroke="#A855F7"
                    strokeWidth="2"
                  />
                  <circle cx={n.x} cy={n.y} r="2" fill="#7928CA" />
                </g>
              ))}

              {/* Bottom Network Scale Badge */}
              <g transform="translate(180, 320)" opacity={p4}>
                <rect
                  x="0"
                  y="0"
                  width="240"
                  height="44"
                  rx="8"
                  fill={isDark ? '#09090b' : '#ffffff'}
                  stroke="#A855F7"
                  strokeWidth="1.5"
                  className="shadow-xl"
                />
                <text
                  x="120"
                  y="20"
                  textAnchor="middle"
                  fill="#A855F7"
                  fontSize="12"
                  fontWeight="800"
                  fontFamily="monospace"
                >
                  1.2M+ MONTHLY REACH
                </text>
                <text
                  x="120"
                  y="34"
                  textAnchor="middle"
                  fill={isDark ? '#a1a1aa' : '#71717a'}
                  fontSize="8"
                  fontFamily="monospace"
                  letterSpacing="0.05em"
                >
                  +312% COMMUNITY ENGAGEMENT VELOCITY
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Timeline Stages Strip */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
        {[
          { label: 'AESTHETIC', active: p >= 0.05, done: p >= 0.25 },
          { label: 'CURATION', active: p >= 0.25, done: p >= 0.5 },
          { label: 'ENGAGEMENT', active: p >= 0.5, done: p >= 0.75 },
          { label: 'CULTURE & REACH', active: p >= 0.75, done: p >= 0.95 },
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
