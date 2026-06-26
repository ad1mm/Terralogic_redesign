import Reveal from '../components/Reveal.jsx'
import { IconArrowUpRight, IconArrowRight } from '../components/Icons.jsx'
import { cta } from '../content.js'

export default function CTA() {
  return (
    <section className="py-6">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-14 text-paper-soft sm:px-12 sm:py-16">
          {/* motif */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.14]" aria-hidden="true">
            <svg className="absolute -right-16 -top-16 h-80 w-80 animate-spin-slow" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="92" stroke="#fff" strokeDasharray="2 12" />
              <circle cx="100" cy="100" r="64" stroke="#fff" strokeDasharray="2 12" />
            </svg>
            <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-moss/40 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-paper-soft sm:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg text-paper/70">{cta.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="#contact" className="btn-ember text-base">
                Request a proposal
                <IconArrowUpRight width={18} height={18} />
              </a>
              <a href="#capabilities" className="btn border border-white/25 bg-white/5 text-paper-soft hover:bg-white/10 text-base">
                See capabilities
                <IconArrowRight width={18} height={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
