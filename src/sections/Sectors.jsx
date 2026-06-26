import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { sectors } from '../content.js'

export default function Sectors() {
  return (
    <section id="sectors" className="sx-b relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-ember/10 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHead eyebrow={sectors.eyebrow} title={sectors.title} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 70}
              className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-soft"
            >
              <SmartImage
                id={item.image}
                alt={item.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                widths={[400, 600, 800]}
                className="aspect-[3/4] w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              {/* gradient veil for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-bold leading-snug text-paper-soft">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/85 transition-all duration-500 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100">
                  {item.desc}
                </p>
                <span className="mt-3 block h-0.5 w-8 rounded-full bg-ember" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
