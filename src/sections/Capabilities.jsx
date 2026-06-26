import { useState } from 'react'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/iconMap.jsx'
import { IconArrowUpRight } from '../components/Icons.jsx'
import CapabilityModal from '../components/CapabilityModal.jsx'
import { capabilities } from '../content.js'

export default function Capabilities() {
  const [active, setActive] = useState(null) // index of opened capability

  return (
    <section id="capabilities" className="sx-a relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-moss/15 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHead eyebrow={capabilities.eyebrow} title={capabilities.title} intro={capabilities.intro} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-haspopup="dialog"
                className="group card relative flex h-full w-full cursor-pointer flex-col p-7 text-left transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-moss/30 hover:shadow-lift focus-visible:-translate-y-1 focus-visible:border-moss/30"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-paper-soft transition-colors duration-300 group-hover:bg-moss group-hover:text-white">
                    <Icon name={item.icon} width={24} height={24} />
                  </span>
                  <IconArrowUpRight
                    width={18}
                    height={18}
                    className="text-paper/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-paper-soft">{item.title}</h3>
                <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-paper/65">{item.desc}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-paper/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-light opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  View capability
                  <IconArrowUpRight width={14} height={14} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <CapabilityModal item={active !== null ? capabilities.items[active] : null} onClose={() => setActive(null)} />
    </section>
  )
}
