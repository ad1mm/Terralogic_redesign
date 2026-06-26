import { trust } from '../content.js'

export default function TrustBar() {
  const row = [...trust.logos, ...trust.logos]
  return (
    <section aria-label="Sectors we serve" className="border-y border-white/10 bg-white/[0.02] py-8">
      <div className="container-x">
        <p className="text-center text-sm font-medium text-paper/55">{trust.heading}</p>
      </div>
      <div className="marquee-mask mt-6 overflow-hidden">
        <ul className="marquee-track items-center gap-x-6 pr-6" style={{ animationDuration: '60s' }}>
          {row.map((logo, i) => (
            <li
              key={i}
              className="flex shrink-0 items-center gap-6"
              aria-hidden={i >= trust.logos.length}
            >
              <span className="font-display text-lg font-semibold uppercase tracking-wide text-paper/40">
                {logo}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-ember/40" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
