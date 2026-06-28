import { LogoMark } from '../components/BrandMark.jsx'
import { footer, company, nav } from '../content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-16 text-paper/70">
      <div className="container-x">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <LogoMark size={30} />
              </span>
              <span className="font-display text-lg font-bold text-paper-soft">
                Terra<span className="text-moss-light">Logic</span>
                <span className="ml-2 text-xs font-semibold uppercase tracking-[0.3em] text-paper/40">Systems</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/55">{footer.tagline}</p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-paper-soft">{col.heading}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#contact" className="text-sm text-paper/55 transition-colors duration-200 hover:text-paper-soft">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-paper/45">
            © {year} {company.legalName}. {company.rc}. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-paper/55 transition-colors hover:text-paper-soft">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* oversized wordmark */}
      <div aria-hidden="true" className="select-none px-4 pt-4">
        <span className="block text-center font-display text-[19vw] font-bold leading-[0.8] tracking-tighter text-white/[0.035]">
          TerraLogic
        </span>
      </div>
    </footer>
  )
}
