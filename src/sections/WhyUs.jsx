import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/iconMap.jsx'
import { IconArrowUpRight } from '../components/Icons.jsx'
import { why } from '../content.js'

export default function WhyUs() {
  return (
    <section id="approach-why" className="sx-a scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left intro */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">
              <span className="h-px w-6 bg-ember" />
              {why.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-paper-soft sm:text-4xl">
              {why.title}
            </h2>
            <a href={why.cta.href} className="btn-ember mt-8 text-base">
              {why.cta.label}
              <IconArrowUpRight width={18} height={18} />
            </a>
          </Reveal>

          {/* Right grid */}
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {why.items.map((item, i) => (
              <Reveal
                key={item.no}
                delay={(i % 2) * 90}
                className="group flex flex-col bg-navy-900/80 p-7 transition-colors duration-300 hover:bg-navy-800/80"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-moss/15 text-moss-light">
                    <Icon name={item.icon} width={22} height={22} />
                  </span>
                  <span className="font-display text-sm font-bold tracking-widest text-paper/25">{item.no}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-paper-soft">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/65">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
