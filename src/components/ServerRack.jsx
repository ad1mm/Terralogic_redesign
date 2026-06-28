/**
 * Decorative server-rack motif used inside the capability dialog. Pure inline
 * SVG — a cabinet of mixed rack units (servers, a patch panel, a storage shelf)
 * with multi-colour status LEDs that blink on staggered loops and a faint data
 * "scan" sweeping down the rack. LEDs carry a soft glow so the illustration
 * holds its own against the dark panel. Motion is CSS-driven, so
 * prefers-reduced-motion freezes it.
 */
const LED = { moss: '#74c45a', ember: '#f59a36', sky: '#73c0ef' }

// Each unit: visual kind + up to three status LEDs (drawn at the right edge).
const UNITS = [
  { kind: 'server', leds: ['moss', 'sky'] },
  { kind: 'server', leds: ['moss', 'ember', 'sky'] },
  { kind: 'panel', leds: ['sky', 'moss'] },
  { kind: 'server', leds: ['ember', 'moss'] },
  { kind: 'storage', leds: ['moss', 'sky'] },
  { kind: 'server', leds: ['sky', 'ember'] },
  { kind: 'server', leds: ['moss', 'sky'] },
]

const X = 42 // unit left edge
const W = 136 // unit width
const UNIT_H = 32
const GAP = 6
const TOP = 22

export default function ServerRack({ className = '' }) {
  return (
    <svg viewBox="0 0 220 300" className={className} role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="rackScanGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#56a6da" stopOpacity="0" />
          <stop offset="50%" stopColor="#cfe8fa" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#56a6da" stopOpacity="0" />
        </linearGradient>
        <filter id="rackGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* cabinet shell + feet */}
      <rect x="30" y="10" width="160" height="284" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" />
      <rect x="46" y="294" width="11" height="6" rx="2" fill="rgba(255,255,255,0.16)" />
      <rect x="163" y="294" width="11" height="6" rx="2" fill="rgba(255,255,255,0.16)" />

      {UNITS.map((u, i) => {
        const y = TOP + i * (UNIT_H + GAP)
        const cy = y + UNIT_H / 2
        return (
          <g key={i}>
            <rect x={X} y={y} width={W} height={UNIT_H} rx="4" fill="rgba(255,255,255,0.055)" stroke="rgba(255,255,255,0.17)" strokeWidth="1" />
            {/* metallic top highlight */}
            <line x1={X + 3} y1={y + 1.6} x2={X + W - 3} y2={y + 1.6} stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round" />
            {/* rack ears */}
            <rect x={X + 3} y={y + 5} width="3" height={UNIT_H - 10} rx="1.5" fill="rgba(255,255,255,0.16)" />
            <rect x={X + W - 6} y={y + 5} width="3" height={UNIT_H - 10} rx="1.5" fill="rgba(255,255,255,0.16)" />

            {/* face detail per unit kind */}
            {u.kind === 'panel'
              ? Array.from({ length: 8 }).map((_, p) => (
                  <rect key={p} x={X + 14 + p * 11} y={cy - 5} width="7" height="10" rx="1.5" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                ))
              : u.kind === 'storage'
                ? Array.from({ length: 4 }).map((_, d) => (
                    <rect key={d} x={X + 14} y={y + 6 + d * 5.4} width={W - 60} height="3.4" rx="1.5" fill="rgba(255,255,255,0.08)" />
                  ))
                : [0, 1, 2].map((v) => (
                    <line key={v} x1={X + 14} y1={cy - 6 + v * 6} x2={X + W - 52} y2={cy - 6 + v * 6} stroke="rgba(255,255,255,0.11)" strokeWidth="2" strokeLinecap="round" />
                  ))}

            {/* status LEDs — blurred glow + core + bright hotspot, blinking together */}
            {u.leds.map((c, j) => {
              const cx = X + W - 12 - j * 8
              return (
                <g
                  key={j}
                  className="rack-led"
                  style={{ animationDelay: `${((i * 0.5 + j * 0.8) % 3).toFixed(2)}s`, animationDuration: `${(2 + ((i + j) % 3) * 0.6).toFixed(2)}s` }}
                >
                  <circle cx={cx} cy={cy} r="4.6" fill={LED[c]} opacity="0.55" filter="url(#rackGlow)" />
                  <circle cx={cx} cy={cy} r="2.8" fill={LED[c]} />
                  <circle cx={cx} cy={cy} r="1.1" fill="#ffffff" opacity="0.85" />
                </g>
              )
            })}
          </g>
        )
      })}

      {/* data scan sweeping down the rack */}
      <rect className="rack-scan" x={X} y="6" width={W} height="3" rx="1.5" fill="url(#rackScanGrad)" />
    </svg>
  )
}
