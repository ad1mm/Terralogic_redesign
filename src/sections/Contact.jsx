import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { IconMail, IconPhone, IconPin, IconArrowUpRight, IconCheck } from '../components/Icons.jsx'
import { company } from '../content.js'

const details = [
  { icon: IconMail, label: 'Email us', value: company.email, href: `mailto:${company.email}` },
  { icon: IconPhone, label: 'Call us', value: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, '')}` },
  { icon: IconPin, label: 'Visit us', value: company.location, href: null },
]

const sectorOptions = ['Government & Public Sector', 'Security & Defence', 'Corporate & Enterprise', 'Development Partner', 'Other']

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // No backend in this build — wire to your email service or CRM endpoint.
    setSent(true)
  }

  return (
    <section id="contact" className="sx-b scroll-mt-24 overflow-x-clip py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-5 py-12 shadow-soft backdrop-blur-sm sm:px-10 sm:py-14">
          {/* oversized backdrop word */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 select-none font-display text-[22vw] font-bold leading-none tracking-tighter text-white/[0.04] sm:-right-4 sm:-top-6 sm:text-[16rem]"
          >
            Contact
          </span>

          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: invitation + details */}
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-ember" />
                Get in touch
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-paper-soft sm:text-4xl">
                Let’s scope your next programme
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-paper/70">
                Share a few details and the right specialists will get back to you — usually within one business day.
              </p>

              <ul className="mt-9 space-y-3">
                {details.map(({ icon: Ico, label, value, href }) => {
                  const inner = (
                    <div className="flex min-w-0 items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-200 group-hover:border-moss/40">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-paper-soft">
                        <Ico width={20} height={20} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-paper/50">{label}</span>
                        <span className="block break-words font-medium text-paper-soft">{value}</span>
                      </span>
                      {href && (
                        <IconArrowUpRight width={18} height={18} className="mt-0.5 shrink-0 text-paper/30" />
                      )}
                    </div>
                  )
                  return (
                    <li key={label} className="min-w-0">
                      {href ? (
                        <a href={href} className="group block min-w-0">
                          {inner}
                        </a>
                      ) : (
                        <div className="group min-w-0">{inner}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={120}>
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-moss/30 bg-moss/5 p-10 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-moss text-paper-soft">
                    <IconCheck width={28} height={28} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-paper-soft">Thank you — message received</h3>
                  <p className="mt-2 text-paper/70">We’ll be in touch shortly. For anything urgent, call {company.phone}.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full name" type="text" autoComplete="name" required />
                    <Field id="org" label="Organisation" type="text" autoComplete="organization" required />
                    <Field id="email" label="Work email" type="email" autoComplete="email" required />
                    <div className="flex flex-col gap-2">
                      <label htmlFor="sector" className="text-sm font-semibold text-paper-soft">Sector</label>
                      <select id="sector" name="sector" className="rounded-xl border border-white/15 bg-navy-900 px-4 py-3 text-paper-soft outline-none transition-colors focus:border-sky">
                        {sectorOptions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-paper-soft">How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="resize-none rounded-xl border border-white/15 bg-navy-900 px-4 py-3 text-paper-soft outline-none transition-colors placeholder:text-paper/35 focus:border-sky"
                      placeholder="Tell us about the programme, timeline and the disciplines involved."
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-6 w-full text-base">
                    Send message
                    <IconArrowUpRight width={18} height={18} />
                  </button>
                  <p className="mt-3 text-center text-xs text-paper/45">
                    We’ll only use your details to respond to this enquiry.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, type, required, autoComplete }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-paper-soft">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-xl border border-white/15 bg-navy-900 px-4 py-3 text-paper-soft outline-none transition-colors placeholder:text-paper/35 focus:border-sky"
      />
    </div>
  )
}
