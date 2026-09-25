import React from 'react';

interface VisualProps {
  progress: number;
  isDark: boolean;
}

export const GraphicDesignVisual: React.FC<VisualProps> = ({ progress, isDark }) => {
  const p = Math.max(0, Math.min(1, progress));

  const p1 = Math.min(1, Math.max(0, p / 0.25));
  const p2 = Math.min(1, Math.max(0, (p - 0.25) / 0.25));
  const p3 = Math.min(1, Math.max(0, (p - 0.50) / 0.25));
  const p4 = Math.min(1, Math.max(0, (p - 0.75) / 0.25));

  let phaseLabel = 'PHASE 01: MODULAR GRID ARCHITECTURE';
  if (p >= 0.75) phaseLabel = 'PHASE 04: ICONIC EDITORIAL COMPOSITION';
  else if (p >= 0.5) phaseLabel = 'PHASE 03: OPTICAL BALANCE & CALIBRATION';
  else if (p >= 0.25) phaseLabel = 'PHASE 02: VECTOR CRAFT & TYPOGRAPHY';

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
          <span>PRECISION</span>
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
            <linearGradient id="gd-poster-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>
            <linearGradient id="gd-accent-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7928CA" />
            </linearGradient>
          </defs>

          {/* PHASE 1: SWISS 12-COLUMN MODULAR GRID & RULERS */}
          <g opacity={Math.max(0.15, p1 * (1 - p4 * 0.75))}>
            {/* 12 Vertical Grid Columns */}
            {[70, 110, 150, 190, 230, 270, 310, 350, 390, 430, 470, 510].map((colX, i) => (
              <line
                key={`grid-col-${i}`}
                x1={colX}
                y1="40"
                x2={colX}
                y2="360"
                stroke={isDark ? '#3f3f46' : '#cbd5e1'}
                strokeWidth="0.8"
                strokeDasharray="2 3"
              />
            ))}

            {/* Horizontal Baselines */}
            {[70, 130, 190, 250, 310, 350].map((rowY, i) => (
              <line
                key={`grid-row-${i}`}
                x1="70"
                y1={rowY}
                x2="510"
                y2={rowY}
                stroke={isDark ? '#3f3f46' : '#cbd5e1'}
                strokeWidth="0.8"
                strokeDasharray="2 3"
              />
            ))}

            {/* Ruler ticks on left margin */}
            {[50, 100, 150, 200, 250, 300, 350].map((y, i) => (
              <line
                key={`tick-${i}`}
                x1="62"
                y1={y}
                x2="70"
                y2={y}
                stroke="#7928CA"
                strokeWidth="1.2"
              />
            ))}

            {/* Grid dimension callouts */}
            <text x="75" y="55" fill="#7928CA" fontSize="8" fontFamily="monospace">
              8PT MODULAR SYSTEM
            </text>
            <text x="410" y="55" fill={isDark ? '#a1a1aa' : '#71717a'} fontSize="8" fontFamily="monospace">
              BASELINE: 24PX
            </text>
          </g>

          {/* PHASE 2: VECTOR BEZIER CURVE & ANCHOR HANDLES */}
          {p2 > 0.05 && (
            <g opacity={Math.max(0.2, p2 * (1 - p4 * 0.5))}>
              {/* Dynamic Bezier Curve path */}
              <path
                d={`M 110 280 C 180 ${280 - 180 * p2}, 260 ${80 + 80 * (1 - p2)}, 350 160 S 480 ${120 + 60 * p2}, 470 290`}
                stroke="#7928CA"
                strokeWidth="2.5"
                fill="none"
              />

              {/* Anchor Point 1 */}
              <g transform="translate(110, 280)">
                <rect x="-4" y="-4" width="8" height="8" fill="#ffffff" stroke="#7928CA" strokeWidth="2" />
                <line x1="0" y1="0" x2="40" y2="-40" stroke="#A855F7" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="40" cy="-40" r="3" fill="#A855F7" />
              </g>

              {/* Anchor Point 2 (Center peak) */}
              <g transform="translate(350, 160)">
                <rect x="-4" y="-4" width="8" height="8" fill="#ffffff" stroke="#7928CA" strokeWidth="2" />
                <line x1="-35" y1="20" x2="35" y2="-20" stroke="#A855F7" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="-35" cy="20" r="3" fill="#A855F7" />
                <circle cx="35" cy="-20" r="3" fill="#A855F7" />
              </g>

              {/* Anchor Point 3 */}
              <g transform="translate(470, 290)">
                <rect x="-4" y="-4" width="8" height="8" fill="#ffffff" stroke="#7928CA" strokeWidth="2" />
                <line x1="0" y1="0" x2="-30" y2="-30" stroke="#A855F7" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="-30" cy="-30" r="3" fill="#A855F7" />
              </g>

              {/* Vector pen icon at tangent */}
              <g transform="translate(350, 150)">
                <polygon points="0,0 -8,-14 0,-18 8,-14" fill="#7928CA" />
                <circle cx="0" cy="-9" r="1.5" fill="#ffffff" />
              </g>
            </g>
          )}

          {/* PHASE 3: OPTICAL BALANCE & ALIGNMENT GUIDES */}
          {p3 > 0.05 && (
            <g opacity={p3}>
              {/* Golden Ratio Arc Overlay */}
              <path
                d="M 150 320 A 170 170 0 0 1 470 150"
                stroke="#A855F7"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Alignment Crosshairs (Cyan / Purple) */}
              <line x1="230" y1="110" x2="230" y2="290" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="390" y1="110" x2="390" y2="290" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />

              {/* Optical Kerning Caliper */}
              <g transform="translate(230, 95)">
                <line x1="0" y1="0" x2="160" y2="0" stroke="#06b6d4" strokeWidth="1.5" />
                <line x1="0" y1="-5" x2="0" y2="5" stroke="#06b6d4" strokeWidth="1.5" />
                <line x1="160" y1="-5" x2="160" y2="5" stroke="#06b6d4" strokeWidth="1.5" />
                <text x="80" y="-8" textAnchor="middle" fill="#06b6d4" fontSize="8" fontWeight="600" fontFamily="monospace">
                  KERNING & BALANCE: OPTICAL
                </text>
              </g>
            </g>
          )}

          {/* PHASE 4: FINISHED MUSEUM-GRADE EDITORIAL POSTER */}
          {p4 > 0.05 && (
            <g opacity={p4} className="transition-all duration-300">
              {/* Editorial Canvas Container */}
              <rect
                x="140"
                y="65"
                width="320"
                height="240"
                rx="12"
                fill={isDark ? '#09090b' : '#ffffff'}
                stroke="#7928CA"
                strokeWidth="2"
                className="shadow-2xl"
              />

              {/* Geometric graphic accent block */}
              <rect
                x="160"
                y="85"
                width="80"
                height="80"
                rx="8"
                fill="url(#gd-accent-grad)"
              />
              <circle cx="200" cy="125" r="22" fill="#ffffff" opacity="0.9" />
              <polygon points="190,115 210,125 190,135" fill="#7928CA" />

              {/* Bold Editorial Typography Headline */}
              <text
                x="260"
                y="110"
                fill={isDark ? '#ffffff' : '#09090b'}
                fontSize="24"
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="-0.04em"
              >
                FORM.
              </text>
              <text
                x="260"
                y="135"
                fill="#7928CA"
                fontSize="24"
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="-0.04em"
              >
                CRAFT.
              </text>
              <text
                x="260"
                y="155"
                fill={isDark ? '#a1a1aa' : '#71717a'}
                fontSize="8"
                fontWeight="500"
                fontFamily="monospace"
              >
                SWISS EDITORIAL SYSTEM
              </text>

              {/* Lower Section: Typography layout bars & badge */}
              <line
                x1="160"
                y1="185"
                x2="440"
                y2="185"
                stroke={isDark ? '#27272a' : '#e4e4e7'}
                strokeWidth="1"
              />

              <g transform="translate(160, 205)">
                <text
                  x="0"
                  y="12"
                  fill={isDark ? '#e4e4e7' : '#18181b'}
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="monospace"
                >
                  DIGITIFY // VISUAL ART DIRECTION
                </text>
                <text
                  x="0"
                  y="26"
                  fill={isDark ? '#a1a1aa' : '#71717a'}
                  fontSize="8"
                  fontFamily="monospace"
                >
                  BESPOKE PRESENTATIONS, EDITORIAL & CAMPAIGN COLLATERAL
                </text>
              </g>

              {/* Top-Right Seal */}
              <g transform="translate(420, 90)">
                <circle cx="0" cy="0" r="14" fill="#7928CA" />
                <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="700" fontFamily="monospace">
                  04
                </text>
              </g>

              {/* Bottom Specification Badge */}
              <g transform="translate(200, 325)">
                <rect
                  x="0"
                  y="0"
                  width="200"
                  height="30"
                  rx="6"
                  fill={isDark ? '#18181b' : '#f4f4f5'}
                  stroke="#7928CA"
                  strokeWidth="1"
                />
                <text
                  x="100"
                  y="19"
                  textAnchor="middle"
                  fill="#7928CA"
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  ART DIRECTION LOCKED // PRINT READY
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Timeline Stages Strip */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
        {[
          { label: 'GRID SYSTEM', active: p >= 0.05, done: p >= 0.25 },
          { label: 'VECTOR CRAFT', active: p >= 0.25, done: p >= 0.5 },
          { label: 'ALIGNMENT', active: p >= 0.5, done: p >= 0.75 },
          { label: 'MUSEUM GRADE', active: p >= 0.75, done: p >= 0.95 },
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
