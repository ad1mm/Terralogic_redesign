import { useReveal } from '../hooks/useReveal.js'

/**
 * Wraps children in a scroll-reveal container.
 * `as` lets callers pick the rendered element (div by default).
 * `delay` staggers the transition (ms).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
