import { useEffect, useState } from 'react'
import { IconArrowRight, IconArrowUpRight } from '../components/Icons.jsx'
import { hero } from '../content.js'

// Hero background visuals, cycled with a slow crossfade. Subject sits on the
// right; the mask fades each toward the left so the copy stays legible.
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&h=1080&q=80', // earth / network
  '/assets/hero-building.jpg', // TerraLogic HQ at dusk
  'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1920&h=1080&q=80', // fibre-optic / networking
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&h=1080&q=80', // server hardware / circuitry
]

const FADE_MASK =
  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 24%, #000 60%)'

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_IMAGES.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-950 pt-28 text-paper-soft sm:pt-32 lg:pt-40">
      {/* deep-navy ambient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-moss/20 blur-3xl" />
      </div>

      {/* 16:9 background visual — subject aligned to the right, gradually fading
          toward the left so the copy stays legible. Unsplash placeholder for now;
          swap the src for the final 16:9 image. */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            draggable="false"
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-y-0 right-0 h-full w-full select-none object-cover object-right transition-opacity duration-1000 ease-in-out lg:w-[64%] ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
          />
        ))}
        {/* navy wash for contrast behind the copy + bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/10 lg:via-navy-950/55 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy-950" />
      </div>

      <div className="container-x relative z-10">
        <div className="flex min-h-[26rem] items-center pb-16 lg:min-h-[34rem] lg:pb-24">
          {/* Copy */}
          <div className="reveal is-visible max-w-xl">
            <h1 className="font-display text-[2.5rem] font-bold leading-[1.04] tracking-tight text-paper-soft sm:text-5xl lg:text-[3.65rem]">
              {hero.titleA}{' '}
              <span className="relative whitespace-nowrap text-moss-light">
                {hero.titleHighlight}
                <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 7c70-6 226-6 296 0" stroke="#df8326" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              {hero.titleB}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-paper/75">{hero.subtitle}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-ember text-base">
                Request a consultation
                <IconArrowUpRight width={18} height={18} />
              </a>
              <a href="#capabilities" className="btn border border-white/25 bg-white/5 text-paper-soft hover:bg-white/10 text-base">
                Explore capabilities
                <IconArrowRight width={18} height={18} />
              </a>
            </div>

            {/* inline trust stats */}
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-bold text-paper-soft">{s.value}</span>
                    <span className="mt-1 block text-xs leading-snug text-paper/55">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
