import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { work } from '../content.js'

export default function Work() {
  return (
    <section id="work" className="sx-a scroll-mt-24 py-20 text-paper-soft sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={work.eyebrow} title={work.title} intro={work.intro} invert />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {work.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-soft backdrop-blur-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative">
                <SmartImage
                  id={item.image}
                  alt={item.alt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  widths={[480, 700, 1000]}
                  className="aspect-[16/10] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-navy-950/80 px-3 py-1 text-xs font-semibold text-paper-soft shadow-soft backdrop-blur">
                  {item.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-snug text-paper-soft">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/55">
                  <span className="font-semibold text-paper/75">Challenge — </span>
                  {item.problem}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/75">
                  <span className="font-semibold text-moss-light">Outcome — </span>
                  {item.result}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
