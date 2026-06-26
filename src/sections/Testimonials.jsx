import Reveal from '../components/Reveal.jsx'
import { IconQuote } from '../components/Icons.jsx'
import { testimonials } from '../content.js'

const accents = ['bg-moss text-white', 'bg-ember text-navy-950', 'bg-sky text-white', 'bg-paper-soft text-navy-950']

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function Card({ t, i }) {
  return (
    <li className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-soft backdrop-blur-sm sm:w-[380px]">
      <IconQuote width={30} height={30} className="text-ember" />
      <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-paper/80">{t.quote}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${accents[i % accents.length]}`}>
          {initials(t.name)}
        </span>
        <span className="leading-tight">
          <span className="block font-display font-bold text-paper-soft">{t.name}</span>
          <span className="mt-0.5 block text-sm text-paper/55">{t.role}</span>
        </span>
      </figcaption>
    </li>
  )
}

export default function Testimonials() {
  const row = [...testimonials.items, ...testimonials.items]
  return (
    <section className="sx-a overflow-hidden py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-ember" />
            {testimonials.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-paper-soft sm:text-4xl">
            {testimonials.title}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={80} className="marquee-mask group mt-12">
        <ul className="marquee-track items-stretch gap-6 pr-6 group-hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
          {row.map((t, i) => (
            <Card key={i} t={t} i={i} />
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
