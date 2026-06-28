import { useEffect, useRef, useState } from 'react'
import CapabilityArt from './CapabilityArt.jsx'
import { IconClose, IconArrowUpRight } from './Icons.jsx'

/**
 * Detail dialog for a single capability. Two-column layout: depth + feature list
 * on the left, a per-capability animated illustration on the right.
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
        className={`modal-scroll relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-4xl border border-white/10 bg-navy-900 text-paper-soft shadow-lift transition-all duration-300 ease-out sm:rounded-4xl ${
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
          <div className="p-6 sm:p-8">
            <h2 id="capability-modal-title" className="font-display text-2xl font-bold leading-tight text-paper-soft sm:text-[1.7rem]">
              {current.title}
            </h2>
            <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-paper/70">{current.detail}</p>

            {/* feature timeline */}
            <ul className="relative mt-6 space-y-4">
              <span aria-hidden="true" className="absolute left-[5px] top-2 bottom-2 w-px bg-white/15" />
              {current.features.map((f) => (
                <li key={f.title} className="relative pl-7">
                  <span aria-hidden="true" className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full bg-ember ring-4 ring-ember/20" />
                  <h3 className="font-display text-[0.95rem] font-bold text-paper-soft">{f.title}</h3>
                  <p className="mt-1 text-[0.875rem] leading-snug text-paper/60">{f.desc}</p>
                </li>
              ))}
            </ul>

            <a href="#contact" onClick={onClose} className="btn-ember mt-7 text-sm">
              Discuss this capability
              <IconArrowUpRight width={16} height={16} />
            </a>
          </div>

          {/* Right: animated server-rack brand motif + managed-infra stats */}
          <div className="relative flex flex-col items-center justify-center gap-6 overflow-hidden bg-gradient-to-br from-navy-800/70 via-navy-900 to-navy-950 p-6 sm:p-8 lg:items-start lg:pl-4">
            {/* faint blueprint grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '26px 26px',
              }}
            />
            {/* ambient glows anchoring the rack */}
            <div className="pointer-events-none absolute left-1/2 top-[40%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-8 right-6 h-40 w-40 rounded-full bg-ember/15 blur-3xl" aria-hidden="true" />
            {/* blend the panel into the left column to soften the split */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-900 to-transparent" aria-hidden="true" />

            <CapabilityArt kind={current.icon} className="relative h-64 w-auto drop-shadow-[0_10px_34px_rgba(86,166,218,0.18)] sm:h-72" />

            <ul className="relative grid w-full max-w-[15rem] grid-cols-3 gap-2 text-center">
              {[
                { v: '99.98%', l: 'Uptime' },
                { v: '24/7', l: 'Managed' },
                { v: 'Tier III', l: 'Grade' },
              ].map((s) => (
                <li key={s.l} className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3 backdrop-blur-sm">
                  <span className="block font-display text-lg font-bold text-paper-soft">{s.v}</span>
                  <span className="mt-0.5 block text-[0.65rem] font-medium uppercase tracking-wider text-paper/50">{s.l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
