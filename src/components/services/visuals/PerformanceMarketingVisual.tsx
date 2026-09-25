import React from 'react';

interface VisualProps {
  progress: number;
  isDark: boolean;
}

export const PerformanceMarketingVisual: React.FC<VisualProps> = ({ progress, isDark }) => {
  const p = Math.max(0, Math.min(1, progress));

  const p1 = Math.min(1, Math.max(0, p / 0.25));
  const p2 = Math.min(1, Math.max(0, (p - 0.25) / 0.25));
  const p3 = Math.min(1, Math.max(0, (p - 0.50) / 0.25));
  const p4 = Math.min(1, Math.max(0, (p - 0.75) / 0.25));

  let phaseLabel = 'PHASE 01: AUDIENCE INTENT & TELEMETRY';
  if (p >= 0.75) phaseLabel = 'PHASE 04: CAPITAL EFFICIENCY & ROAS';
  else if (p >= 0.5) phaseLabel = 'PHASE 03: ALGORITHMIC OPTIMIZATION';
  else if (p >= 0.25) phaseLabel = 'PHASE 02: CONVERSION FUNNEL ARCHITECTURE';

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
          <span>EFFICIENCY</span>
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
            <linearGradient id="perf-funnel-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7928CA" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="perf-funnel-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="perf-funnel-3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9333EA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="perf-bar-grad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>

          {/* Background Grid Guide Lines */}
          <g opacity={isDark ? 0.12 : 0.06}>
            <line x1="80" y1="60" x2="520" y2="60" stroke="currentColor" strokeDasharray="2 4" />
            <line x1="80" y1="160" x2="520" y2="160" stroke="currentColor" strokeDasharray="2 4" />
            <line x1="80" y1="260" x2="520" y2="260" stroke="currentColor" strokeDasharray="2 4" />
            <line x1="80" y1="360" x2="520" y2="360" stroke="currentColor" strokeDasharray="2 4" />
            <line x1="300" y1="40" x2="300" y2="380" stroke="currentColor" strokeDasharray="4 4" />
          </g>

          {/* PHASE 1: PRECISION TARGETING GUIDES */}
          <g opacity={Math.max(0.2, 1 - p4 * 0.5)}>
            {/* Top Coordinate Indicators */}
            <g transform="translate(100, 45)" opacity={p1}>
              <rect
                x="0"
                y="0"
                width="110"
                height="22"
                rx="4"
                fill={isDark ? '#18181b' : '#f4f4f5'}
                stroke={isDark ? '#27272a' : '#e4e4e7'}
              />
              <text
                x="10"
                y="14"
                fill={isDark ? '#a1a1aa' : '#71717a'}
                fontSize="8"
                fontFamily="monospace"
              >
                TARGET: HIGH INTENT
              </text>
            </g>
            <g transform="translate(390, 45)" opacity={p1}>
              <rect
                x="0"
                y="0"
                width="110"
                height="22"
                rx="4"
                fill={isDark ? '#18181b' : '#f4f4f5'}
                stroke={isDark ? '#27272a' : '#e4e4e7'}
              />
              <text
                x="10"
                y="14"
                fill="#7928CA"
                fontSize="8"
                fontWeight="600"
                fontFamily="monospace"
              >
                BUDGET: AUTO-PACED
              </text>
            </g>
          </g>

          {/* PHASE 2: CONVERSION FUNNEL TIERS */}
          {p2 > 0.05 && (
            <g opacity={p2} className="transition-opacity duration-300">
              {/* Tier 1: Impressions (Top Wide) */}
              <polygon
                points="110,80 490,80 430,140 170,140"
                fill="url(#perf-funnel-1)"
                stroke="#7928CA"
                strokeWidth="1.2"
                strokeOpacity={0.4}
              />
              <text
                x="300"
                y="108"
                textAnchor="middle"
                fill={isDark ? '#ffffff' : '#09090b'}
                fontSize="11"
                fontWeight="600"
                fontFamily="monospace"
                letterSpacing="0.05em"
              >
                1. IMPRESSIONS & MEDIA REACH
              </text>
              <text
                x="300"
                y="126"
                textAnchor="middle"
                fill={isDark ? '#a1a1aa' : '#71717a'}
                fontSize="8.5"
                fontFamily="monospace"
              >
                1,250,000 TARGETED AUDIENCE
              </text>

              {/* Tier 2: Qualified Clicks (Mid Narrower) */}
              <polygon
                points="175,150 425,150 375,215 225,215"
                fill="url(#perf-funnel-2)"
                stroke="#7928CA"
                strokeWidth="1.5"
                strokeOpacity={0.7}
              />
              <text
                x="300"
                y="180"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11"
                fontWeight="600"
                fontFamily="monospace"
                letterSpacing="0.05em"
              >
                2. QUALIFIED HIGH-INTENT CLICKS
              </text>
              <text
                x="300"
                y="198"
                textAnchor="middle"
                fill="#f4f4f5"
                fontSize="8.5"
                fontFamily="monospace"
              >
                84,500 ENGAGED PROSPECTS
              </text>

              {/* Tier 3: Conversions (Bottom Concentrated) */}
              <polygon
                points="230,225 370,225 330,290 270,290"
                fill="url(#perf-funnel-3)"
                stroke="#A855F7"
                strokeWidth="2"
              />
              <text
                x="300"
                y="254"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="700"
                fontFamily="monospace"
                letterSpacing="0.05em"
              >
                3. CONVERSIONS
              </text>
              <text
                x="300"
                y="272"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="8.5"
                fontWeight="600"
                fontFamily="monospace"
              >
                4,890 ACQUISITIONS
              </text>
            </g>
          )}

          {/* PHASE 3: ALGORITHMIC DATA STREAM & TELEMETRY BADGES */}
          {p3 > 0.05 && (
            <g opacity={p3}>
              {/* Streaming Data Droplets */}
              {[
                { x: 285, y: 90 + ((p * 240) % 180) },
                { x: 315, y: 90 + ((p * 280 + 40) % 180) },
                { x: 300, y: 90 + ((p * 200 + 90) % 180) },
              ].map((dot, i) => (
                <circle
                  key={`drop-${i}`}
                  cx={dot.x}
                  cy={dot.y}
                  r="3"
                  fill="#ffffff"
                  stroke="#7928CA"
                  strokeWidth="1.5"
                />
              ))}

              {/* Left Telemetry Card: CTR */}
              <g transform="translate(60, 165)" opacity={p3}>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="44"
                  rx="6"
                  fill={isDark ? '#09090b' : '#ffffff'}
                  stroke="#7928CA"
                  strokeWidth="1"
                  className="shadow-md"
                />
                <text
                  x="10"
                  y="18"
                  fill="#7928CA"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  +3.4% CTR
                </text>
                <text
                  x="10"
                  y="33"
                  fill={isDark ? '#a1a1aa' : '#71717a'}
                  fontSize="7.5"
                  fontFamily="monospace"
                >
                  HIGH-INTENT TRAFFIC
                </text>
              </g>

              {/* Right Telemetry Card: CPA */}
              <g transform="translate(440, 165)" opacity={p3}>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="44"
                  rx="6"
                  fill={isDark ? '#09090b' : '#ffffff'}
                  stroke="#7928CA"
                  strokeWidth="1"
                  className="shadow-md"
                />
                <text
                  x="10"
                  y="18"
                  fill="#10b981"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  -38% CPA
                </text>
                <text
                  x="10"
                  y="33"
                  fill={isDark ? '#a1a1aa' : '#71717a'}
                  fontSize="7.5"
                  fontFamily="monospace"
                >
                  CAPITAL SAVINGS
                </text>
              </g>
            </g>
          )}

          {/* PHASE 4: CAPITAL EFFICIENCY SURGE & ROAS KPI */}
          {p4 > 0.05 && (
            <g opacity={p4}>
              {/* Concentrated Capital Chamber Glow at Base */}
              <circle cx="300" cy="305" r={30 * p4} fill="#7928CA" opacity="0.3" filter="blur(8px)" />

              {/* Dynamic Bottom Sparkline / Bar Array */}
              <g transform="translate(190, 310)">
                {[20, 32, 45, 60, 75, 95].map((val, idx) => {
                  const barH = (val / 100) * 45 * p4;
                  return (
                    <rect
                      key={idx}
                      x={idx * 36}
                      y={45 - barH}
                      width="18"
                      height={barH}
                      rx="3"
                      fill="url(#perf-bar-grad)"
                    />
                  );
                })}
              </g>

              {/* Master ROAS Headline Badge */}
              <g
                transform="translate(210, 345)"
                opacity={p4}
                className="transition-all duration-300"
              >
                <rect
                  x="0"
                  y="0"
                  width="180"
                  height="34"
                  rx="8"
                  fill={isDark ? '#09090b' : '#ffffff'}
                  stroke="#A855F7"
                  strokeWidth="1.5"
                  className="shadow-xl"
                />
                <text
                  x="90"
                  y="17"
                  textAnchor="middle"
                  fill="#A855F7"
                  fontSize="13"
                  fontWeight="800"
                  fontFamily="monospace"
                >
                  4.6X TARGET ROAS
                </text>
                <text
                  x="90"
                  y="28"
                  textAnchor="middle"
                  fill={isDark ? '#a1a1aa' : '#71717a'}
                  fontSize="7"
                  fontFamily="monospace"
                  letterSpacing="0.08em"
                >
                  MAXIMIZED MEDIA RETURN
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Timeline Stages Strip */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
        {[
          { label: 'INTENT', active: p >= 0.05, done: p >= 0.25 },
          { label: 'FUNNEL ARCH', active: p >= 0.25, done: p >= 0.5 },
          { label: 'OPTIMIZATION', active: p >= 0.5, done: p >= 0.75 },
          { label: '4.6X ROAS', active: p >= 0.75, done: p >= 0.95 },
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
