import Reveal from './Reveal.jsx'

/** Shared eyebrow + title + optional intro block. */
export default function SectionHead({ eyebrow, title, intro, align = 'left', invert = false, className = '' }) {
  const center = align === 'center'
  return (
    <Reveal className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${invert ? '!text-moss-light' : ''} ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-ember" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-paper-soft sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-paper/70">{intro}</p>}
    </Reveal>
  )
}
