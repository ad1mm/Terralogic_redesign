import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/iconMap.jsx'
import { IconArrowRight } from '../components/Icons.jsx'
import { approach } from '../content.js'

// Per-step accent classes (kept static so Tailwind keeps them in the build)
const accentMap = {
  sky: { chip: 'group-hover:bg-sky group-hover:text-white', bar: 'bg-sky', dot: 'bg-sky', text: 'text-sky' },
  moss: { chip: 'group-hover:bg-moss group-hover:text-white', bar: 'bg-moss', dot: 'bg-moss', text: 'text-moss-light' },
  ember: { chip: 'group-hover:bg-ember group-hover:text-navy-950', bar: 'bg-ember', dot: 'bg-ember', text: 'text-ember-light' },
  navy: { chip: 'group-hover:bg-paper-soft group-hover:text-navy-950', bar: 'bg-paper-soft', dot: 'bg-paper-soft', text: 'text-paper-soft' },
}

export default function Approach() {
  return (
    <section id="approach" className="sx-b relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-ember" />
            {approach.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-paper-soft sm:text-4xl">
            {approach.title}
          </h2>
          {approach.intro && <p className="mt-4 text-lg leading-relaxed text-paper/65">{approach.intro}</p>}
        </Reveal>

        <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step, i) => {
            const a = accentMap[step.accent] || accentMap.navy
            const isLast = i === approach.steps.length - 1
            return (
              <Reveal as="li" key={step.no} delay={i * 110} className="relative">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-soft backdrop-blur-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  {/* ghost number watermark */}
                  <span className="pointer-events-none absolute -right-2 -top-5 font-display text-[6.5rem] font-bold leading-none text-white/[0.05] select-none">
                    {step.no}
                  </span>

                  <div className="flex items-center justify-between">
                    <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-paper-soft transition-colors duration-300 ${a.chip}`}>
                      <Icon name={step.icon} width={26} height={26} />
                    </span>
                    <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${a.text}`}>
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-xl font-bold text-paper-soft">{step.title}</h3>
                  <p className="relative mt-2 flex-1 text-[0.95rem] leading-relaxed text-paper/65">{step.desc}</p>

                  {/* accent progress bar */}
                  <span className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <span className={`block h-full w-8 rounded-full transition-all duration-500 ease-out group-hover:w-full ${a.bar}`} />
                  </span>
                </div>

                {/* connector arrow between cards (large screens) */}
                {!isLast && (
                  <span
                    className="absolute -right-5 top-[3.4rem] z-10 hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-navy-800 text-paper/40 shadow-soft lg:flex"
                    aria-hidden="true"
                  >
                    <IconArrowRight width={16} height={16} />
                  </span>
                )}
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
