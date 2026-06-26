import { useEffect, useState } from 'react'
import { Wordmark } from '../components/BrandMark.jsx'
import { IconMenu, IconClose, IconArrowUpRight } from '../components/Icons.jsx'
import { nav } from '../content.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // The whole site is now the brand navy, so the bar keeps its translucent
  // light-text glass state at all times — it just firms up its blur/background
  // slightly once scrolled for legibility over busier sections.
  const onDark = true

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x">
        <div
          className={`mt-3 flex items-center justify-between rounded-full border border-white/10 px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? 'bg-navy-950/55 shadow-lift backdrop-blur-md'
              : 'bg-white/5 backdrop-blur-sm'
          }`}
        >
          <a href="#top" className="shrink-0" aria-label="TerraLogic Systems — home">
            <Wordmark dark={onDark} />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  onDark
                    ? 'text-paper/80 hover:bg-white/10 hover:text-paper-soft'
                    : 'text-navy/75 hover:bg-navy/5 hover:text-navy'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={`btn hidden text-sm shadow-soft sm:inline-flex ${
                onDark
                  ? 'bg-paper-soft text-navy hover:bg-white'
                  : 'bg-navy text-paper-soft hover:bg-navy-700'
              }`}
            >
              Request a consultation
              <IconArrowUpRight width={16} height={16} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden ${
                onDark
                  ? 'border-white/25 bg-white/10 text-paper-soft'
                  : 'border-navy/15 bg-white/70 text-navy'
              }`}
            >
              <span className={`transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}>
                {open ? <IconClose /> : <IconMenu />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet — always rendered so it can slide + fade in/out */}
      <div className="container-x lg:hidden" aria-hidden={!open}>
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`mt-2 origin-top rounded-3xl border border-white/10 bg-navy-900/90 p-3 shadow-lift backdrop-blur-md transition-transform duration-300 ease-out ${
              open ? 'translate-y-0' : '-translate-y-3'
            }`}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                  className={`rounded-2xl px-4 py-3 text-base font-medium text-paper/80 transition-all duration-300 hover:bg-white/10 hover:text-paper-soft ${
                    open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                  }`}
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + nav.length * 45}ms` : '0ms' }}
                className={`btn-primary mt-2 w-full transition-all duration-300 ${
                  open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                }`}
                tabIndex={open ? 0 : -1}
              >
                Request a consultation
                <IconArrowUpRight width={16} height={16} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
