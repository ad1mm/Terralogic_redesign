import Reveal from '../components/Reveal.jsx'
import brands from '../components/brandLogos.js'
import { partners } from '../content.js'

function BrandLogo({ brand }) {
  return (
    <li className="flex shrink-0 items-center" title={brand.title}>
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={brand.title}
        className="h-7 w-auto text-paper/35 transition-colors duration-300 hover:text-paper/70"
        style={{ width: 'auto' }}
      >
        <title>{brand.title}</title>
        <path d={brand.path} fill="currentColor" />
      </svg>
    </li>
  )
}

export default function Partners() {
  // Doubled track loops seamlessly under the marquee animation.
  const row = [...brands, ...brands]
  return (
    <section className="sx-b py-16 sm:py-20">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-paper-soft sm:text-3xl">{partners.heading}</h2>
          <p className="mt-3 text-paper/60">{partners.note}</p>
        </Reveal>
      </div>

      <Reveal delay={80} className="marquee-mask mt-12 overflow-hidden">
        <ul className="marquee-track items-center gap-x-16 pr-16" style={{ animationDuration: '48s' }}>
          {row.map((brand, i) => (
            <BrandLogo key={`${brand.title}-${i}`} brand={brand} />
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
