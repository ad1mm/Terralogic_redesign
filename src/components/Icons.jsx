/**
 * Custom line-icon set. All icons share a 24x24 viewBox, inherit `currentColor`,
 * and use a 1.6 stroke for a consistent, engineered feel. No emoji, no third-party set.
 */
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const IconCode = (p) => (
  <svg {...base} {...p}>
    <path d="m8 7-5 5 5 5" />
    <path d="m16 7 5 5-5 5" />
    <path d="M13.5 4 10.5 20" />
  </svg>
)

export const IconCloud = (p) => (
  <svg {...base} {...p}>
    <path d="M17.5 19a4.5 4.5 0 0 0 .3-8.99 6 6 0 0 0-11.64 1.5A3.75 3.75 0 0 0 6.5 19Z" />
    <path d="M9.5 14.5h5" />
  </svg>
)

export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5.5c0 4.2 2.9 7.4 7 8.5 4.1-1.1 7-4.3 7-8.5V6Z" />
    <path d="m9.3 11.8 1.9 1.9 3.6-3.8" />
  </svg>
)

export const IconServer = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="4" width="17" height="6.5" rx="1.6" />
    <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.6" />
    <path d="M7 7.25h.01M7 16.75h.01" />
    <path d="M11 7.25h6M11 16.75h6" />
  </svg>
)

export const IconStructure = (p) => (
  <svg {...base} {...p}>
    <path d="M3 20h18" />
    <path d="M5 20V9l7-5 7 5v11" />
    <path d="M10 20v-5h4v5" />
    <path d="M9.5 9.5h5" />
  </svg>
)

export const IconSupply = (p) => (
  <svg {...base} {...p}>
    <path d="m3.5 7.5 8.5-4 8.5 4-8.5 4Z" />
    <path d="M3.5 7.5v8l8.5 4 8.5-4v-8" />
    <path d="M12 11.5v8" />
  </svg>
)

export const IconAdvisory = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5.5h16v10H13l-4 3v-3H4Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </svg>
)

export const IconBuilding = (p) => (
  <svg {...base} {...p}>
    <path d="M3 20h18" />
    <path d="M5 20V5l7-2 7 2v15" />
    <path d="M9 8h0M9 11.5h0M9 15h0M15 8h0M15 11.5h0M15 15h0" />
  </svg>
)

export const IconRadar = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 12 18 6" />
    <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2" />
  </svg>
)

export const IconBriefcase = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="7.5" width="17" height="11.5" rx="2" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
    <path d="M3.5 12.5h17" />
  </svg>
)

export const IconGlobe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z" />
  </svg>
)

export const IconLayers = (p) => (
  <svg {...base} {...p}>
    <path d="m12 3.5 8.5 4.5L12 12.5 3.5 8Z" />
    <path d="m3.5 12 8.5 4.5L20.5 12" />
    <path d="m3.5 16 8.5 4.5L20.5 16" />
  </svg>
)

export const IconCompass = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5Z" />
  </svg>
)

export const IconBolt = (p) => (
  <svg {...base} {...p}>
    <path d="M13 3 5 13h6l-1 8 8-10h-6Z" />
  </svg>
)

export const IconBadge = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 9.8 5 7.1 4.7 6 7.2 3.6 8.5 4.3 11l-.7 2.5L6 14.8l1.1 2.5 2.7-.3L12 18.5l2.2-1.5 2.7.3 1.1-2.5 2.4-1.3L19.7 11l.7-2.5L18 7.2l-1.1-2.5L14.2 5Z" />
    <path d="m9.5 11.5 1.8 1.8 3.4-3.6" />
  </svg>
)

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21c4.5-4.2 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 2.5 6.8 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const IconArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4.5 12h15" />
    <path d="m13 5.5 6.5 6.5-6.5 6.5" />
  </svg>
)

export const IconArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7" />
    <path d="M8.5 7H17v8.5" />
  </svg>
)

export const IconCheck = (p) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 4.5 4.5 10.5-11" />
  </svg>
)

export const IconChevronDown = (p) => (
  <svg {...base} {...p}>
    <path d="m5.5 9 6.5 6.5L18.5 9" />
  </svg>
)

export const IconQuote = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M9.6 6C6.5 7.4 5 9.8 5 13.2V18h5v-5H7.6c0-2 .9-3.3 2.8-4.1Zm9 0c-3.1 1.4-4.6 3.8-4.6 7.2V18h5v-5h-2.4c0-2 .9-3.3 2.8-4.1Z" />
  </svg>
)

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
)
