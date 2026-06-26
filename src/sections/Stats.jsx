import Reveal from '../components/Reveal.jsx'
import { stats } from '../content.js'

export default function Stats() {
  return (
    <section className="sx-deep relative overflow-hidden py-20 text-paper-soft sm:py-24">
      {/* faint orbit / grid motif */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <svg className="absolute left-1/2 top-1/2 h-[120%] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="260" stroke="#fff" strokeDasharray="2 14" />
          <circle cx="300" cy="300" r="190" stroke="#fff" strokeDasharray="2 14" />
          <circle cx="300" cy="300" r="120" stroke="#fff" strokeDasharray="2 14" />
        </svg>
      </div>

      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper-soft sm:text-4xl">{stats.title}</h2>
          <p className="mt-3 text-lg text-paper/65">{stats.intro}</p>
        </Reveal>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((s, i) => (
            <Reveal as="div" key={s.label} delay={i * 80} className="border-t border-white/15 pt-6">
              <dd className="font-display text-4xl font-bold text-paper-soft sm:text-5xl">{s.value}</dd>
              <dt className="mt-3 text-base font-semibold text-paper/90">{s.label}</dt>
              <p className="mt-1 text-sm text-paper/55">{s.sub}</p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
