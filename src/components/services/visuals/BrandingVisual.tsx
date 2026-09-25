import React from 'react';

interface VisualProps {
  progress: number;
  isDark: boolean;
}

export const BrandingVisual: React.FC<VisualProps> = ({ progress, isDark }) => {
  const p = Math.max(0, Math.min(1, progress));

  const p1 = Math.min(1, Math.max(0, p / 0.25));
  const p2 = Math.min(1, Math.max(0, (p - 0.25) / 0.25));
  const p3 = Math.min(1, Math.max(0, (p - 0.50) / 0.25));
  const p4 = Math.min(1, Math.max(0, (p - 0.75) / 0.25));

  let phaseLabel = 'PHASE 01: GEOMETRIC PROPORTION & PHI';
  if (p >= 0.75) phaseLabel = 'PHASE 04: LIVING BRAND IDENTITY SYSTEM';
  else if (p >= 0.5) phaseLabel = 'PHASE 03: FORM CONVERGENCE & MONOGRAM';
  else if (p >= 0.25) phaseLabel = 'PHASE 02: CHROMATIC & TYPOGRAPHIC CODES';

  // 4 Curated Swatches
  const swatches = [
    { name: 'DIGITIFY PURPLE', hex: '#7928CA', border: '#7928CA' },
    { name: 'ELECTRIC VIOLET', hex: '#A855F7', border: '#A855F7' },
    { name: 'OBSIDIAN CORE', hex: isDark ? '#18181b' : '#09090b', border: isDark ? '#3f3f46' : '#27272a' },
    { name: 'PURE MINERAL', hex: isDark ? '#ffffff' : '#f4f4f5', border: '#e4e4e7' },
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
          <span>COHESION</span>
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
            <radialGradient id="br-mark-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7928CA" stopOpacity="0.0" />
            </radialGradient>
            <linearGradient id="br-grad-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>

          {/* Background Construction Grid & Axis */}
          <g opacity={Math.max(0.12, (1 - p4 * 0.75) * 0.4)}>
            <line x1="100" y1="200" x2="500" y2="200" stroke="#7928CA" strokeWidth="0.8" strokeDasharray="3 4" />
            <line x1="300" y1="50" x2="300" y2="350" stroke="#7928CA" strokeWidth="0.8" strokeDasharray="3 4" />
            <line x1="150" y1="60" x2="450" y2="340" stroke="#7928CA" strokeWidth="0.6" strokeDasharray="2 4" />
            <line x1="150" y1="340" x2="450" y2="60" stroke="#7928CA" strokeWidth="0.6" strokeDasharray="2 4" />
          </g>

          {/* PHASE 1: GEOMETRIC PROPORTION & GOLDEN RATIO CIRCLES */}
          <g opacity={Math.max(0.15, p1 * (1 - p4 * 0.8))}>
            {/* Concentric Golden Ratio Circles */}
            <circle
              cx="300"
              cy="200"
              r={34 * p1}
              stroke="#7928CA"
              strokeWidth="1.2"
              strokeDasharray="4 3"
            />
            <circle
              cx="300"
              cy="200"
              r={68 * p1}
              stroke="#7928CA"
              strokeWidth="1"
              strokeDasharray="5 4"
            />
            <circle
              cx="300"
              cy="200"
              r={110 * p1}
              stroke="#A855F7"
              strokeWidth="0.8"
              strokeDasharray="6 4"
            />
            <circle
              cx="300"
              cy="200"
              r={160 * p1}
              stroke="#A855F7"
              strokeWidth="0.5"
            />

            {/* Geometric specs */}
            <text x="120" y="75" fill="#7928CA" fontSize="8" fontFamily="monospace">
              PHI RATIO: 1.618
            </text>
            <text x="430" y="75" fill={isDark ? '#a1a1aa' : '#71717a'} fontSize="8" fontFamily="monospace">
              RADIUS: LOCKED
            </text>
          </g>

          {/* PHASE 2: CHROMATIC SWATCH CARDS */}
          {p2 > 0.05 && (
            <g opacity={p2 * (1 - p4 * 0.4)}>
              {swatches.map((sw, i) => {
                const offsetX = (i - 1.5) * 88;
                const offsetY = 50 + (1 - p2) * 20;

                return (
                  <g
                    key={sw.name}
                    transform={`translate(${300 + offsetX}, ${offsetY})`}
                    className="transition-transform duration-300"
                  >
                    <rect
                      x="-38"
                      y="0"
                      width="76"
                      height="38"
                      rx="6"
                      fill={sw.hex}
                      stroke={sw.border}
                      strokeWidth="1.5"
                      className="shadow-md"
                    />
                    <text
                      x="0"
                      y="52"
                      textAnchor="middle"
                      fill={isDark ? '#e4e4e7' : '#18181b'}
                      fontSize="7"
                      fontWeight="600"
                      fontFamily="monospace"
                    >
                      {sw.hex}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* PHASE 3: FORM CONVERGENCE & MONOGRAM ARCS */}
          {p3 > 0.05 && (
            <g opacity={p3}>
              {/* Rotating Converging Geometric Arcs */}
              <g
                transform={`rotate(${p3 * 90}, 300, 200)`}
                style={{ transformOrigin: '300px 200px' }}
              >
                <path
                  d="M 230 200 A 70 70 0 0 1 370 200"
                  stroke="#7928CA"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                />
                <path
                  d="M 370 200 A 70 70 0 0 1 230 200"
                  stroke="#A855F7"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                />
              </g>

              {/* Tangent guide points */}
              <circle cx="230" cy="200" r="4" fill="#7928CA" />
              <circle cx="370" cy="200" r="4" fill="#A855F7" />
              <circle cx="300" cy="130" r="4" fill="#7928CA" />
              <circle cx="300" cy="270" r="4" fill="#A855F7" />
            </g>
          )}

          {/* PHASE 4: SOLIDIFIED BRAND IDENTITY MARK & AMBIENT AURA */}
          {p4 > 0.05 && (
            <g opacity={p4} className="transition-all duration-300">
              {/* Radial Aura Glow */}
              <circle cx="300" cy="200" r={85 * p4} fill="url(#br-mark-glow)" />

              {/* Central Solid Brand Monogram Glyph ("D" with dot) */}
              <g transform="translate(255, 150)">
                {/* Outer Rounded D Contour */}
                <path
                  d="M 15 0 H 45 C 72 0, 90 22, 90 50 C 90 78, 72 100, 45 100 H 15 C 6.7 100, 0 93.3, 0 85 V 15 C 0 6.7, 6.7 0, 15 0 Z"
                  fill={isDark ? '#09090b' : '#ffffff'}
                  stroke="#7928CA"
                  strokeWidth="4"
                  className="shadow-2xl"
                />

                {/* Inner Cutout */}
                <path
                  d="M 24 22 H 42 C 58 22, 68 34, 68 50 C 68 66, 58 78, 42 78 H 24 Z"
                  fill="url(#br-grad-mark)"
                />

                {/* Signature Digitify Purple Accent Dot */}
                <circle
                  cx="100"
                  cy="50"
                  r="7"
                  fill="#A855F7"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              </g>

              {/* Brand Wordmark & Tagline beneath */}
              <text
                x="300"
                y="285"
                textAnchor="middle"
                fill={isDark ? '#ffffff' : '#09090b'}
                fontSize="18"
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="0.08em"
              >
                DIGITIFY<tspan fill="#7928CA">.</tspan>
              </text>
              <text
                x="300"
                y="304"
                textAnchor="middle"
                fill={isDark ? '#a1a1aa' : '#71717a'}
                fontSize="9"
                fontFamily="monospace"
                letterSpacing="0.12em"
              >
                IDENTITY // STRATEGY // SYSTEM
              </text>

              {/* Bottom Verification Badge */}
              <g transform="translate(180, 325)">
                <rect
                  x="0"
                  y="0"
                  width="240"
                  height="28"
                  rx="6"
                  fill={isDark ? '#18181b' : '#f4f4f5'}
                  stroke="#7928CA"
                  strokeWidth="1"
                />
                <text
                  x="120"
                  y="18"
                  textAnchor="middle"
                  fill="#7928CA"
                  fontSize="8.5"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  BRAND DESIGN SYSTEM LOCKED // VERIFIED
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Timeline Stages Strip */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
        {[
          { label: 'PHI RATIO', active: p >= 0.05, done: p >= 0.25 },
          { label: 'CHROMATICS', active: p >= 0.25, done: p >= 0.5 },
          { label: 'CONVERGENCE', active: p >= 0.5, done: p >= 0.75 },
          { label: 'BRAND SYSTEM', active: p >= 0.75, done: p >= 0.95 },
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
