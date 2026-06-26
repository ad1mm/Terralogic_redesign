import { useEffect, useRef, useState } from 'react'
import SmartImage from './SmartImage.jsx'
import brands from './brandLogos.js'
import { Icon } from './iconMap.jsx'
import { IconClose, IconArrowUpRight } from './Icons.jsx'

/**
 * Detail dialog for a single capability. Two-column layout: depth + feature list
 * on the left, an image framed by a faded partner-logo halo on the right.
 * Accessible — role="dialog", Escape to close, backdrop click, focus moves to the
 * close button on open, and body scroll is locked while open.
 */
export default function CapabilityModal({ item, onClose }) {
  const [mounted, setMounted] = useState(false) // is the node in the tree
  const [show, setShow] = useState(false) // drives enter/leave transition
  const [current, setCurrent] = useState(item) // keeps content during leave
  const closeRef = useRef(null)

  // Manage enter / leave lifecycle
  useEffect(() => {
    if (item) {
      setCurrent(item)
      setMounted(true)
      const r = requestAnimationFrame(() => setShow(true))
      return () => cancelAnimationFrame(r)
    }
    if (mounted) {
      setShow(false)
      const t = setTimeout(() => setMounted(false), 240)
      return () => clearTimeout(t)
    }
  }, [item]) // eslint-disable-line react-hooks/exhaustive-deps

  // Escape + scroll lock + initial focus while open
  useEffect(() => {
    if (!item) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const f = setTimeout(() => closeRef.current?.focus(), 60)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      clearTimeout(f)
    }
  }, [item, onClose])

  if (!mounted || !current) return null
  const halo = brands.slice(0, 10)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="capability-modal-title"
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* panel */}
      <div
        className={`relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-4xl border border-white/10 bg-navy-900 text-paper-soft shadow-lift transition-all duration-300 ease-out sm:rounded-4xl ${
          show ? 'translate-y-0 opacity-100 sm:scale-100' : 'translate-y-6 opacity-0 sm:translate-y-0 sm:scale-95'
        }`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-paper-soft transition-colors duration-200 hover:bg-white/15"
        >
          <IconClose width={18} height={18} />
        </button>

        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left: depth + features */}
          <div className="p-7 sm:p-10">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss-light">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-moss-light">
                <Icon name={current.icon} width={22} height={22} />
              </span>
              Capability
            </span>

            <h2 id="capability-modal-title" className="mt-5 font-display text-2xl font-bold leading-tight text-paper-soft sm:text-3xl">
              {current.title}
            </h2>
            <p className="mt-4 leading-relaxed text-paper/70">{current.detail}</p>

            <ul className="mt-7 space-y-5">
              {current.features.map((f, i) => (
                <li key={f.title} className="border-l-2 border-ember/70 pl-4">
                  <h3 className="font-display text-base font-bold text-paper-soft">{f.title}</h3>
                  <p className="mt-1 text-[0.9rem] leading-relaxed text-paper/60">{f.desc}</p>
                </li>
              ))}
            </ul>

            <a href="#contact" onClick={onClose} className="btn-ember mt-8 text-sm">
              Discuss this capability
              <IconArrowUpRight width={16} height={16} />
            </a>
          </div>

          {/* Right: image framed by a faded partner-logo halo */}
          <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 p-8 sm:p-10">
            {/* faded brand halo */}
            <div className="pointer-events-none absolute inset-0 grid grid-cols-4 place-items-center gap-2 p-6 opacity-[0.10]" aria-hidden="true">
              {halo.map((b, i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <path d={b.path} fill="currentColor" />
                </svg>
              ))}
            </div>
            {/* glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/20 blur-3xl" aria-hidden="true" />

            <div className="relative w-full max-w-sm">
              <SmartImage
                id={current.image}
                alt={current.imageAlt}
                eager
                sizes="(max-width: 1024px) 90vw, 40vw"
                widths={[480, 700, 900]}
                className="aspect-[4/3] w-full rounded-3xl shadow-lift ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
