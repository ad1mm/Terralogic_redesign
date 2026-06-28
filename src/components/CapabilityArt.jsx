/**
 * Per-capability illustration motifs that share one visual system: the same
 * thin white strokes + low-opacity fills, the same glowing multi-colour LED
 * language, the same data-flow/blink animation vocabulary, and identical
 * 220x300 proportions — so the six read as a coordinated family rather than
 * unrelated pictures. Motion is CSS-driven (rack-led / art-flow), so
 * prefers-reduced-motion freezes it.
 */
const LED = { moss: '#74c45a', ember: '#f59a36', sky: '#73c0ef' }
const S = {
  stroke: 'rgba(255,255,255,0.18)',
  soft: 'rgba(255,255,255,0.10)',
  fill: 'rgba(255,255,255,0.05)',
  fillSoft: 'rgba(255,255,255,0.03)',
}

function Led({ cx, cy, color = 'sky', r = 2.8, i = 0 }) {
  return (
    <g
      className="rack-led"
      style={{ animationDelay: `${((i * 0.5) % 3).toFixed(2)}s`, animationDuration: `${(2.2 + (i % 3) * 0.5).toFixed(2)}s` }}
    >
      <circle cx={cx} cy={cy} r={r + 2} fill={LED[color]} opacity="0.5" filter="url(#artGlow)" />
      <circle cx={cx} cy={cy} r={r} fill={LED[color]} />
      <circle cx={cx} cy={cy} r={r * 0.42} fill="#ffffff" opacity="0.85" />
    </g>
  )
}

function Defs() {
  return (
    <defs>
      <filter id="artGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="2" />
      </filter>
      <linearGradient id="artScanGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#73c0ef" stopOpacity="0" />
        <stop offset="50%" stopColor="#cfe8fa" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#73c0ef" stopOpacity="0" />
      </linearGradient>
    </defs>
  )
}

/* 1. Software & Digital Transformation — code editor window */
function CodeArt() {
  const lines = [
    { x: 38, w: 64, c: 'sky' },
    { x: 108, w: 38, c: null },
    { x: 50, w: 92, c: null },
    { x: 50, w: 50, c: 'moss' },
    { x: 106, w: 44, c: null },
    { x: 62, w: 66, c: null },
    { x: 50, w: 38, c: 'ember' },
    { x: 50, w: 84, c: null },
    { x: 38, w: 70, c: null },
  ]
  return (
    <>
      <rect x="22" y="46" width="176" height="196" rx="14" fill={S.fillSoft} stroke={S.stroke} />
      <line x1="22" y1="68" x2="198" y2="68" stroke={S.soft} />
      <Led cx="40" cy="57" color="ember" r="2.4" i={0} />
      <Led cx="52" cy="57" color="moss" r="2.4" i={1} />
      <Led cx="64" cy="57" color="sky" r="2.4" i={2} />
      {lines.map((ln, k) => (
        <rect
          key={k}
          x={ln.x}
          y={86 + k * 17}
          width={ln.w}
          height="5"
          rx="2.5"
          fill={ln.c ? LED[ln.c] : 'rgba(255,255,255,0.13)'}
          opacity={ln.c ? 0.75 : 1}
        />
      ))}
      <rect className="rack-led" x="112" y="221" width="2.6" height="11" rx="1" fill="#ffffff" style={{ animationDuration: '1.1s' }} />
    </>
  )
}

/* 2. Cloud & Data Centres — cloud feeding a row of servers, with data flow */
function CloudArt() {
  const servers = [62, 110, 158]
  const cols = ['sky', 'moss', 'ember']
  return (
    <>
      <g>
        <circle cx="92" cy="76" r="16" fill={S.fill} />
        <circle cx="118" cy="68" r="20" fill={S.fill} />
        <circle cx="138" cy="82" r="14" fill={S.fill} />
        <rect x="84" y="76" width="62" height="18" rx="9" fill={S.fill} />
      </g>
      <ellipse cx="114" cy="80" rx="36" ry="20" fill="none" stroke={S.soft} />
      <Led cx="114" cy="74" color="sky" i={0} />
      {servers.map((sx, k) => (
        <g key={k}>
          <line x1="114" y1="94" x2={sx} y2="166" stroke={S.soft} strokeDasharray="3 4" />
          <circle
            className="art-flow"
            cx="114"
            cy="94"
            r="2.4"
            fill={LED[cols[k]]}
            style={{ '--fx': `${sx - 114}px`, '--fy': '72px', animationDelay: `${(k * 0.6).toFixed(2)}s` }}
          />
        </g>
      ))}
      {servers.map((sx, k) => (
        <g key={`s${k}`}>
          <rect x={sx - 22} y="166" width="44" height="22" rx="3" fill={S.fill} stroke={S.soft} />
          <line x1={sx - 14} y1="177" x2={sx + 4} y2="177" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeLinecap="round" />
          <Led cx={sx + 13} cy="177" color={cols[k]} r="2.2" i={k + 1} />
        </g>
      ))}
    </>
  )
}

/* 3. Cybersecurity & Surveillance — shield with scan + keyhole + viewfinder */
function ShieldArt() {
  // curved shield: rounded top corners, sides bowing in to a rounded point
  const shield = 'M76 60 H144 Q150 60 150 66 V100 Q150 134 110 152 Q70 134 70 100 V66 Q70 60 76 60 Z'
  const Corner = ({ x, y, sx, sy }) => (
    <path d={`M${x + sx * 10} ${y} H${x} V${y + sy * 10}`} fill="none" stroke={S.soft} strokeWidth="2" strokeLinecap="round" />
  )
  return (
    <>
      <Corner x={50} y={50} sx={1} sy={1} />
      <Corner x={170} y={50} sx={-1} sy={1} />
      <Corner x={50} y={162} sx={1} sy={-1} />
      <Corner x={170} y={162} sx={-1} sy={-1} />
      <path d={shield} fill={S.fill} stroke={S.stroke} />
      <clipPath id="shieldClip">
        <path d={shield} />
      </clipPath>
      <g clipPath="url(#shieldClip)">
        <rect className="art-flow" x="70" y="58" width="80" height="3" fill="url(#artScanGrad)" style={{ '--fy': '92px', animationDuration: '4.5s' }} />
      </g>
      <circle cx="110" cy="98" r="7" fill="none" stroke={S.stroke} />
      <rect x="108" y="102" width="4" height="12" rx="2" fill={LED.ember} opacity="0.8" />
      <Led cx="110" cy="98" color="ember" r="3" i={0} />
    </>
  )
}

/* 4. ICT Infrastructure & Supply — server rack */
function RackArt() {
  const units = [
    ['moss', 'sky'],
    ['moss', 'ember', 'sky'],
    ['sky', 'moss'],
    ['ember', 'moss'],
    ['moss', 'sky'],
  ]
  const X = 58
  const W = 104
  const UH = 30
  const GAP = 8
  const TOP = 44
  return (
    <>
      <rect x={X - 12} y={TOP - 12} width={W + 24} height={units.length * (UH + GAP) + 16} rx="12" fill={S.fillSoft} stroke={S.stroke} />
      {units.map((leds, i) => {
        const y = TOP + i * (UH + GAP)
        const cy = y + UH / 2
        return (
          <g key={i}>
            <rect x={X} y={y} width={W} height={UH} rx="4" fill={S.fill} stroke={S.soft} />
            {[0, 1, 2].map((v) => (
              <line key={v} x1={X + 10} y1={cy - 6 + v * 6} x2={X + W - 40} y2={cy - 6 + v * 6} stroke="rgba(255,255,255,0.11)" strokeWidth="2" strokeLinecap="round" />
            ))}
            {leds.map((c, j) => (
              <Led key={j} cx={X + W - 10 - j * 8} cy={cy} color={c} r="2.6" i={i + j} />
            ))}
          </g>
        )
      })}
      <rect className="art-flow" x={X} y={TOP - 6} width={W} height="3" rx="1.5" fill="url(#artScanGrad)" style={{ '--fy': `${units.length * (UH + GAP) - 4}px`, animationDuration: '5s' }} />
    </>
  )
}

/* 5. Engineering & Contracting — building, lit windows and a tower crane */
function BuildingArt() {
  const cols = [106, 120, 134, 148]
  const rows = [110, 130, 150, 170, 190, 210]
  const lit = { '106-130': 'ember', '134-110': 'sky', '120-190': 'moss', '148-170': 'ember', '134-210': 'sky' }
  let li = 0
  return (
    <>
      <line x1="28" y1="236" x2="192" y2="236" stroke={S.stroke} />
      {/* shorter building */}
      <rect x="44" y="152" width="44" height="84" rx="2" fill={S.fillSoft} stroke={S.soft} />
      {[164, 184, 204].map((ry) =>
        [52, 70].map((cx) => <rect key={`${cx}-${ry}`} x={cx} y={ry} width="8" height="10" rx="1" fill="rgba(255,255,255,0.07)" />)
      )}
      {/* main building */}
      <rect x="98" y="94" width="58" height="142" rx="2" fill={S.fill} stroke={S.stroke} />
      {rows.map((ry) =>
        cols.map((cx) => {
          const key = `${cx}-${ry}`
          if (lit[key]) return <Led key={key} cx={cx + 4} cy={ry + 5} color={lit[key]} r="2.3" i={li++} />
          return <rect key={key} x={cx} y={ry} width="8" height="10" rx="1" fill="rgba(255,255,255,0.07)" />
        })
      )}
      {/* tower crane */}
      <line x1="170" y1="236" x2="170" y2="68" stroke={S.stroke} />
      <line x1="132" y1="72" x2="190" y2="72" stroke={S.stroke} />
      <line x1="170" y1="68" x2="150" y2="72" stroke={S.soft} />
      <line x1="170" y1="68" x2="184" y2="72" stroke={S.soft} />
      <line x1="150" y1="72" x2="150" y2="90" stroke={S.soft} />
      <rect x="145" y="90" width="10" height="6" rx="1" fill={S.fill} stroke={S.soft} />
      <Led cx="170" cy="66" color="ember" r="2.4" i={6} />
    </>
  )
}

/* 6. Consultancy & Managed Services — managed-ops dashboard */
function DashboardArt() {
  const chart = '44,162 70,150 92,158 116,130 140,138 168,104'
  const cols = ['moss', 'ember', 'sky']
  return (
    <>
      <rect x="26" y="56" width="168" height="160" rx="12" fill={S.fillSoft} stroke={S.stroke} />
      <line x1="26" y1="82" x2="194" y2="82" stroke={S.soft} />
      <Led cx="40" cy="69" color="moss" r="2.4" i={0} />
      <rect x="54" y="67" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
      {/* chart */}
      <polyline points={`44,178 ${chart} 168,178`} fill="rgba(115,192,239,0.06)" stroke="none" />
      <polyline points={chart} fill="none" stroke={LED.sky} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <line x1="44" y1="178" x2="168" y2="178" stroke={S.soft} />
      <Led cx="168" cy="104" color="sky" r="3" i={1} />
      {/* metric tiles */}
      {[0, 1, 2].map((k) => {
        const x = 40 + k * 52
        return (
          <g key={k}>
            <rect x={x} y="192" width="44" height="16" rx="3" fill={S.fill} stroke={S.soft} />
            <rect x={x + 6} y="198" width={[22, 14, 28][k]} height="4" rx="2" fill={LED[cols[k]]} opacity="0.8" />
          </g>
        )
      })}
    </>
  )
}

const ART = {
  code: CodeArt,
  cloud: CloudArt,
  shield: ShieldArt,
  server: RackArt,
  structure: BuildingArt,
  advisory: DashboardArt,
}

export default function CapabilityArt({ kind = 'server', className = '' }) {
  const Art = ART[kind] || RackArt
  return (
    <svg viewBox="0 0 220 300" className={className} role="presentation" aria-hidden="true">
      <Defs />
      <Art />
    </svg>
  )
}
