/**
 * Hero composition built around the real TerraLogic emblem (transparent PNG),
 * framed by concentric animated orbit rings and floating data chips. The rings
 * are pure inline SVG; motion is subtle and disabled under prefers-reduced-motion
 * via the Tailwind animate utilities.
 */
export default function HeroGraphic({ className = '' }) {
  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[30rem] ${className}`} aria-hidden="true">
      {/* soft brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
        <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss/25" />
        <div className="absolute right-8 top-10 h-32 w-32 rounded-full bg-ember/20" />
        <div className="absolute bottom-10 left-8 h-28 w-28 rounded-full bg-sky/25" />
      </div>

      {/* orbit rings */}
      <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full" role="presentation">
        <defs>
          <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6aa852" />
            <stop offset="100%" stopColor="#56a6da" />
          </linearGradient>
        </defs>
        <g className="origin-center animate-spin-slow">
          <circle cx="260" cy="260" r="244" fill="none" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="1.5" strokeDasharray="2 12" />
        </g>
        <g className="origin-center animate-spin-slow" style={{ animationDuration: '54s', animationDirection: 'reverse' }}>
          <circle cx="260" cy="260" r="212" fill="none" stroke="url(#ringStroke)" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="90 30" />
          <circle cx="472" cy="260" r="5" fill="#df8326" />
          <circle cx="48" cy="260" r="4" fill="#2f8ecb" />
        </g>
        <g className="origin-center animate-spin-slow" style={{ animationDuration: '40s' }}>
          <circle cx="260" cy="260" r="180" fill="none" stroke="#ffffff" strokeOpacity="0.10" strokeWidth="1.2" strokeDasharray="1 10" />
        </g>
      </svg>

      {/* the real emblem, gently floating */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float-slow drop-shadow-[0_24px_60px_rgba(8,23,38,0.55)]">
          <img
            src="/assets/terralogic-mark.png"
            alt=""
            draggable="false"
            className="h-auto w-[58%] max-w-[17rem] select-none mx-auto"
            style={{ width: 'min(58%, 17rem)' }}
          />
        </div>
      </div>

      {/* floating data chips */}
      <FloatChip className="left-[-6%] top-[22%]" label="Uptime" value="99.98%" accent="moss" delay="0s" />
      <FloatChip className="right-[-5%] top-[12%]" label="Data centres" value="Tier III" accent="ember" delay="1.4s" />
      <FloatChip className="right-[0%] bottom-[12%]" label="Secured endpoints" value="24/7 SOC" accent="sky" delay="0.7s" />
    </div>
  )
}

function FloatChip({ className = '', label, value, accent, delay }) {
  const dot = { moss: 'bg-moss', ember: 'bg-ember', sky: 'bg-sky' }[accent]
  return (
    <div
      className={`absolute hidden sm:flex animate-float-slow items-center gap-3 rounded-2xl border border-navy/10 bg-paper-soft/95 px-4 py-3 shadow-soft backdrop-blur ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
      <span className="leading-tight">
        <span className="block text-[0.65rem] font-medium uppercase tracking-wider text-navy/55">{label}</span>
        <span className="block font-display text-sm font-bold text-navy">{value}</span>
      </span>
    </div>
  )
}
