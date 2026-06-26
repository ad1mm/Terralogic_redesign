import {
  IconCode, IconCloud, IconShield, IconServer, IconStructure, IconSupply,
  IconAdvisory, IconLayers, IconGlobe, IconBadge, IconBolt, IconCompass,
} from './Icons.jsx'

export const iconMap = {
  code: IconCode,
  cloud: IconCloud,
  shield: IconShield,
  server: IconServer,
  structure: IconStructure,
  supply: IconSupply,
  advisory: IconAdvisory,
  layers: IconLayers,
  globe: IconGlobe,
  badge: IconBadge,
  bolt: IconBolt,
  compass: IconCompass,
}

export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] || IconCode
  return <Cmp {...props} />
}
