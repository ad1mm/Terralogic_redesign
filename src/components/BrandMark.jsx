/**
 * Brand mark + wordmark. The mark is the real TerraLogic emblem (PNG with a
 * transparent background, so the full-colour globe and orbit read correctly on
 * both light and dark surfaces). The wordmark keeps live, recolourable text so
 * it stays crisp and adapts to the section it sits on.
 */
export function LogoMark({ size = 36, className = '' }) {
  return (
    <img
      src="/assets/terralogic-mark.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      draggable="false"
      className={`select-none ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export function Wordmark({ className = '', stacked = false, dark = false }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={stacked ? 42 : 36} />
      <span className="leading-none">
        <span className="block font-display text-[1.15rem] font-bold tracking-tight">
          <span className={dark ? 'text-paper-soft' : 'text-navy'}>Terra</span>
          <span className={dark ? 'text-moss-light' : 'text-moss'}>Logic</span>
        </span>
        <span
          className={`block text-[0.58rem] font-semibold uppercase tracking-[0.34em] ${
            dark ? 'text-paper/55' : 'text-navy/55'
          }`}
        >
          Systems
        </span>
      </span>
    </span>
  )
}
