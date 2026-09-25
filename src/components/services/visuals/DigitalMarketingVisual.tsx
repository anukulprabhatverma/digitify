import React from 'react';

interface VisualProps {
  progress: number;
  isDark: boolean;
}

export const DigitalMarketingVisual: React.FC<VisualProps> = ({ progress, isDark }) => {
  // Clamp progress between 0 and 1
  const p = Math.max(0, Math.min(1, progress));

  // Phase ranges
  // Phase 1: Strategy (0.00 - 0.25)
  // Phase 2: Distribution (0.25 - 0.50)
  // Phase 3: Data (0.50 - 0.75)
  // Phase 4: Growth (0.75 - 1.00)
  const p1 = Math.min(1, Math.max(0, p / 0.25));
  const p2 = Math.min(1, Math.max(0, (p - 0.25) / 0.25));
  const p3 = Math.min(1, Math.max(0, (p - 0.50) / 0.25));
  const p4 = Math.min(1, Math.max(0, (p - 0.75) / 0.25));

  // Determine active phase label
  let phaseLabel = 'PHASE 01: STRATEGY & PERSONA';
  if (p >= 0.75) phaseLabel = 'PHASE 04: ORGANIC ACCELERATION';
  else if (p >= 0.5) phaseLabel = 'PHASE 03: DATA THROUGHPUT';
  else if (p >= 0.25) phaseLabel = 'PHASE 02: OMNICHANNEL DISTRIBUTION';

  // SVG center coordinates
  const cx = 300;
  const cy = 200;

  // 4 Omnichannel Nodes
  const nodes = [
    { id: 'seo', name: 'ORGANIC SEO', x: 130, y: 110, tag: 'HIGH INTENT' },
    { id: 'social', name: 'META & SOCIAL', x: 470, y: 110, tag: 'SCALE' },
    { id: 'search', name: 'PAID SEARCH', x: 130, y: 290, tag: 'VELOCITY' },
    { id: 'lifecycle', name: 'LIFECYCLE', x: 470, y: 290, tag: 'RETENTION' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 overflow-hidden select-none">
      {/* Top Telemetry Bar */}
      <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3 mb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-digitify-purple animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-black/70 dark:text-white/70 uppercase">
            {phaseLabel}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-day-muted dark:text-agency-muted">
          <span>PROGRESS</span>
          <span className="text-digitify-purple font-semibold">{Math.round(p * 100)}%</span>
        </div>
      </div>

      {/* Main SVG Story Canvas */}
      <div className="relative flex-1 flex items-center justify-center">
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full max-h-[340px] transition-all duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dm-growth-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#7928CA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="dm-area-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7928CA" stopOpacity="0.0" />
            </linearGradient>
            <radialGradient id="dm-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7928CA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7928CA" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Grid Lines (Subtle) */}
          <g opacity={isDark ? 0.15 : 0.08}>
            <line x1="100" y1="50" x2="500" y2="50" stroke="currentColor" strokeDasharray="3 3" />
            <line x1="100" y1="125" x2="500" y2="125" stroke="currentColor" strokeDasharray="3 3" />
            <line x1="100" y1="200" x2="500" y2="200" stroke="currentColor" strokeDasharray="3 3" />
            <line x1="100" y1="275" x2="500" y2="275" stroke="currentColor" strokeDasharray="3 3" />
            <line x1="100" y1="350" x2="500" y2="350" stroke="currentColor" strokeDasharray="3 3" />
            <line x1="150" y1="50" x2="150" y2="350" stroke="currentColor" strokeDasharray="3 3" />
            <line x1="300" y1="50" x2="300" y2="350" stroke="currentColor" strokeDasharray="3 3" />
            <line x1="450" y1="50" x2="450" y2="350" stroke="currentColor" strokeDasharray="3 3" />
          </g>

          {/* PHASE 1: STRATEGY (Concentric Targeting Radar) */}
          <g opacity={1 - p4 * 0.4}>
            {/* Concentric rings expanding with p1 */}
            <circle
              cx={cx}
              cy={cy}
              r={40 * p1}
              stroke="#7928CA"
              strokeWidth="1"
              strokeOpacity="0.4"
              strokeDasharray="4 4"
            />
            <circle
              cx={cx}
              cy={cy}
              r={90 * p1}
              stroke="#7928CA"
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="6 4"
            />
            <circle
              cx={cx}
              cy={cy}
              r={150 * p1}
              stroke="#7928CA"
              strokeWidth="1"
              strokeOpacity="0.15"
            />

            {/* Targeting Reticle Crosshair */}
            <line
              x1={cx - 160 * p1}
              y1={cy}
              x2={cx + 160 * p1}
              y2={cy}
              stroke="#7928CA"
              strokeWidth="0.8"
              strokeOpacity="0.3"
            />
            <line
              x1={cx}
              y1={cy - 110 * p1}
              x2={cx}
              y2={cy + 110 * p1}
              stroke="#7928CA"
              strokeWidth="0.8"
              strokeOpacity="0.3"
            />
          </g>

          {/* PHASE 2: DISTRIBUTION (Connecting Filaments to 4 Channel Nodes) */}
          {nodes.map((node) => {
            // Draw connecting lines with p2
            const currentX = cx + (node.x - cx) * p2;
            const currentY = cy + (node.y - cy) * p2;

            return (
              <g key={node.id}>
                {/* Connecting Vector Line */}
                <line
                  x1={cx}
                  y1={cy}
                  x2={currentX}
                  y2={currentY}
                  stroke={isDark ? '#4b5563' : '#cbd5e1'}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity={p2 * 0.8}
                />

                {/* Node Box */}
                <g
                  transform={`translate(${node.x}, ${node.y})`}
                  opacity={p2}
                  style={{
                    transformOrigin: `${node.x}px ${node.y}px`,
                    transform: `scale(${0.7 + p2 * 0.3})`,
                    transition: 'transform 0.2s ease-out',
                  }}
                >
                  <rect
                    x="-55"
                    y="-22"
                    width="110"
                    height="44"
                    rx="8"
                    fill={isDark ? '#18181b' : '#ffffff'}
                    stroke={p3 > 0.3 ? '#7928CA' : isDark ? '#27272a' : '#e4e4e7'}
                    strokeWidth={p3 > 0.3 ? '1.5' : '1'}
                    className="shadow-sm"
                  />
                  <text
                    x="0"
                    y="-4"
                    textAnchor="middle"
                    fill={isDark ? '#ffffff' : '#09090b'}
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="monospace"
                    letterSpacing="0.05em"
                  >
                    {node.name}
                  </text>
                  <text
                    x="0"
                    y="11"
                    textAnchor="middle"
                    fill="#7928CA"
                    fontSize="7.5"
                    fontWeight="600"
                    fontFamily="monospace"
                  >
                    [{node.tag}]
                  </text>
                </g>
              </g>
            );
          })}

          {/* PHASE 3: DATA FLOW (Streaming pulses along lines) */}
          {p3 > 0.05 && (
            <g opacity={p3}>
              {nodes.map((node, i) => {
                // Animate packet along line based on progress and index offset
                const packetT = ((p * 4 + i * 0.25) % 1);
                const px = cx + (node.x - cx) * packetT;
                const py = cy + (node.y - cy) * packetT;

                return (
                  <circle
                    key={`pulse-${node.id}`}
                    cx={px}
                    cy={py}
                    r={3.5}
                    fill="#A855F7"
                    className="animate-ping"
                    style={{ animationDuration: '2s' }}
                  />
                );
              })}
            </g>
          )}

          {/* Central Strategy Core */}
          <g transform={`translate(${cx}, ${cy})`}>
            {/* Core Halo */}
            <circle cx="0" cy="0" r={45 * (0.8 + p1 * 0.2)} fill="url(#dm-core-glow)" />

            {/* Core Outer Ring */}
            <circle
              cx="0"
              cy="0"
              r="34"
              fill={isDark ? '#09090b' : '#ffffff'}
              stroke="#7928CA"
              strokeWidth="2"
            />
            {/* Inner Core */}
            <circle cx="0" cy="0" r="16" fill="#7928CA" />
            <circle cx="0" cy="0" r="6" fill="#ffffff" />

            {/* Core Label */}
            <text
              x="0"
              y="52"
              textAnchor="middle"
              fill={isDark ? '#e4e4e7' : '#27272a'}
              fontSize="9"
              fontWeight="600"
              fontFamily="monospace"
              letterSpacing="0.08em"
            >
              DIGITIFY CORE
            </text>
          </g>

          {/* PHASE 4: GROWTH (Rising Organic Curve & Milestone Badge) */}
          {p4 > 0.05 && (
            <g opacity={p4}>
              {/* Curve area fill */}
              <path
                d={`M 100 340 Q 240 330, 320 ${340 - 140 * p4} T 520 ${340 - 240 * p4} L 520 340 Z`}
                fill="url(#dm-area-grad)"
              />

              {/* Glowing Growth Stroke */}
              <path
                d={`M 100 340 Q 240 330, 320 ${340 - 140 * p4} T 520 ${340 - 240 * p4}`}
                stroke="url(#dm-growth-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Peak Glow Milestone Dot */}
              <circle
                cx="520"
                cy={340 - 240 * p4}
                r="6"
                fill="#A855F7"
                stroke="#ffffff"
                strokeWidth="2"
                className="shadow-lg"
              />

              {/* Metric Card floating at peak */}
              <g
                transform={`translate(420, ${280 - 200 * p4})`}
                opacity={p4}
                className="transition-all duration-300"
              >
                <rect
                  x="0"
                  y="0"
                  width="120"
                  height="46"
                  rx="8"
                  fill={isDark ? '#09090b' : '#ffffff'}
                  stroke="#7928CA"
                  strokeWidth="1.5"
                  className="shadow-xl"
                />
                <text
                  x="12"
                  y="18"
                  fill="#7928CA"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  +184% REACH
                </text>
                <text
                  x="12"
                  y="34"
                  fill={isDark ? '#a1a1aa' : '#71717a'}
                  fontSize="8"
                  fontFamily="monospace"
                >
                  4.8X ACQUISITION ROI
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Timeline Stages Strip */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
        {[
          { label: 'STRATEGY', active: p >= 0.05, done: p >= 0.25 },
          { label: 'DISTRIBUTION', active: p >= 0.25, done: p >= 0.5 },
          { label: 'DATA STREAM', active: p >= 0.5, done: p >= 0.75 },
          { label: 'GROWTH', active: p >= 0.75, done: p >= 0.95 },
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
