/**
 * Single source of truth for site copy and imagery.
 * Stats, case studies and testimonials are realistic placeholders — swap the
 * figures and names for verified ones before launch. Image IDs are Unsplash
 * photo IDs (verified reachable); buildImg() composes responsive URLs.
 */

export const company = {
  name: 'TerraLogic Systems',
  legalName: 'TerraLogic Systems Ltd',
  rc: 'RC 1234567',
  email: 'hello@terralogicsystems.com',
  phone: '+234 (0) 700 837 7256',
  location: 'Central Business District, Abuja, Nigeria',
}

export const nav = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
]

export const hero = {
  badge: 'ICT · Infrastructure · Engineering',
  titleA: 'One partner for Nigeria’s',
  titleHighlight: 'digital and physical',
  titleB: 'infrastructure.',
  subtitle:
    'TerraLogic Systems designs, builds and operates the technology that government, security agencies and enterprises depend on — from software and data centres to cybersecurity, engineering and supply.',
  stats: [
    { value: '6', label: 'Integrated capabilities' },
    { value: '24/7', label: 'Managed operations' },
    { value: '36', label: 'States reachable' },
  ],
}

export const trust = {
  heading: 'Trusted to deliver for institutions across the public and private sector',
  logos: ['Federal Ministries', 'State Governments', 'Security Agencies', 'Financial Services', 'Telecoms', 'Development Partners'],
}

export const capabilities = {
  eyebrow: 'What we do',
  title: 'Six capabilities, one accountable team',
  intro:
    'Most projects need more than one discipline. We combine them under a single contract so nothing falls between the gaps. Select any capability to see how we deliver it.',
  items: [
    {
      icon: 'code',
      title: 'Software & Digital Transformation',
      desc: 'Custom applications, web and mobile platforms, AI and automation, e-Government, digital identity and enterprise systems.',
      tags: ['Web & Mobile', 'AI / Automation', 'ERP'],
      image: '1531973576160-7125cd663d86',
      imageAlt: 'A software team working in a modern open-plan office',
      detail:
        'We design, build and run the platforms that move organisations off paper and spreadsheets — from citizen-facing services to the enterprise systems that connect agencies behind the scenes.',
      features: [
        { title: 'Web & mobile platforms', desc: 'Citizen and enterprise applications built for scale, accessibility and unreliable-network conditions.' },
        { title: 'AI & automation', desc: 'Document processing, analytics and workflow automation that remove manual bottlenecks.' },
        { title: 'e-Government & identity', desc: 'Registries, digital-identity and ERP platforms that connect agencies end to end.' },
      ],
    },
    {
      icon: 'cloud',
      title: 'Cloud & Data Centres',
      desc: 'Cloud migration, hybrid environments, data-centre design and the networking and database backbone behind them.',
      tags: ['Cloud', 'Data Centres', 'Networking'],
      image: '1558494949-ef010cbdcc31',
      imageAlt: 'Rows of networking equipment and cabling in a data centre',
      detail:
        'We give you a clear path off ageing on-premise systems and the resilient foundation to run critical workloads — designed, built and operated by one team.',
      features: [
        { title: 'Cloud & migration', desc: 'Public, private and hybrid environments with a planned route off legacy infrastructure.' },
        { title: 'Data-centre design', desc: 'Tier-grade facilities engineered for resilience, power and cooling efficiency.' },
        { title: 'Networking backbone', desc: 'The switching, routing and database layer that keeps everything connected.' },
      ],
    },
    {
      icon: 'shield',
      title: 'Cybersecurity & Surveillance',
      desc: 'Security operations, access control, surveillance and protective systems for sensitive government and corporate environments.',
      tags: ['SOC', 'Access Control', 'CCTV'],
      image: '1605810230434-7631ac76ec81',
      imageAlt: 'A command centre wall of monitoring and surveillance screens',
      detail:
        'We protect sensitive government and corporate environments end to end — combining digital security operations with the physical surveillance and access systems that guard your facilities.',
      features: [
        { title: 'Security operations', desc: '24/7 monitoring, threat detection and incident response from a managed SOC.' },
        { title: 'Access & surveillance', desc: 'CCTV, access control and command centres for protected facilities.' },
        { title: 'Governance & compliance', desc: 'Controls aligned to ISO 27001 and national data-protection expectations.' },
      ],
    },
    {
      icon: 'server',
      title: 'ICT Infrastructure & Supply',
      desc: 'Procurement, installation, configuration and maintenance of computers, servers, communications and surveillance equipment.',
      tags: ['Procurement', 'Install', 'Maintenance'],
      image: '1573164713988-8665fc963095',
      imageAlt: 'A systems engineer reviewing equipment inside a live data centre',
      detail:
        'We source, deploy and maintain the hardware that everything else runs on — with vendor relationships and logistics reach that get the right equipment commissioned anywhere in the country.',
      features: [
        { title: 'Procurement', desc: 'Sourcing of computers, servers, communications and surveillance equipment at scale.' },
        { title: 'Installation & config', desc: 'Professional deployment, configuration and commissioning on site.' },
        { title: 'Maintenance', desc: 'Warranty management, spares and preventive maintenance that protect uptime.' },
      ],
    },
    {
      icon: 'structure',
      title: 'Engineering & Contracting',
      desc: 'Civil, electrical and mechanical works, ICT infrastructure projects, construction and turnkey design-build delivery.',
      tags: ['Civil', 'Electrical', 'Turnkey'],
      image: '1497366754035-f200968a6e72',
      imageAlt: 'A modern facility corridor with glass partitions',
      detail:
        'When a programme needs physical works as well as technology, we deliver the buildings, power and services around it — under a single design-build contract.',
      features: [
        { title: 'Civil & structural', desc: 'Construction and site works delivered to specification and schedule.' },
        { title: 'Electrical & mechanical', desc: 'Power, HVAC and building services for technology-grade facilities.' },
        { title: 'Turnkey design-build', desc: 'Single-contract delivery from feasibility through to handover.' },
      ],
    },
    {
      icon: 'advisory',
      title: 'Consultancy & Managed Services',
      desc: 'Advisory, technical support, training and capacity building, plus fully managed operations once you go live.',
      tags: ['Advisory', 'Training', 'Managed Ops'],
      image: '1521737604893-d14cc237f11d',
      imageAlt: 'A team collaborating around a table',
      detail:
        'We stay involved long after go-live — advising on strategy, building your team’s capacity and running the systems day to day so they keep delivering value.',
      features: [
        { title: 'Advisory', desc: 'Technology strategy, feasibility and architecture from an independent standpoint.' },
        { title: 'Training & capacity', desc: 'Knowledge transfer and capacity building that leave teams self-sufficient.' },
        { title: 'Managed operations', desc: 'Run, support and continuously improve the systems once you go live.' },
      ],
    },
  ],
}

export const solutions = {
  eyebrow: 'Flagship solutions',
  title: 'Built for national scale',
  intro:
    'When the brief spans software, infrastructure and security at once, we lead the whole programme — design through to operation.',
  image: '1573164713988-8665fc963095', // engineer in a data centre
  imageAlt: 'A systems engineer reviewing equipment inside a live data centre',
  items: [
    {
      no: '01',
      title: 'e-Government & digital identity',
      desc: 'Citizen-facing services, registries and identity platforms that connect agencies and remove paper from the process.',
    },
    {
      no: '02',
      title: 'Smart & secure infrastructure',
      desc: 'Command centres, surveillance, access control and data analytics for safe cities and protected facilities.',
    },
    {
      no: '03',
      title: 'Enterprise resource planning',
      desc: 'ERP, automation and analytics that give leadership a single, real-time view across the organisation.',
    },
  ],
}

export const sectors = {
  eyebrow: 'Who we serve',
  title: 'Solutions shaped to the people who rely on them',
  items: [
    {
      title: 'Government & Public Sector',
      desc: 'Digital services, registries and infrastructure that help institutions serve citizens reliably.',
      image: '1486406146926-c627a92ad1ab',
      alt: 'Government and institutional office towers',
    },
    {
      title: 'Security & Defence Agencies',
      desc: 'Surveillance, command centres and protected systems engineered for sensitive operations.',
      image: '1605810230434-7631ac76ec81',
      alt: 'A wall of monitoring and surveillance screens',
    },
    {
      title: 'Corporate & Enterprise',
      desc: 'Software, cloud and managed services that keep large organisations efficient and secure.',
      image: '1531973576160-7125cd663d86',
      alt: 'Professionals working in a modern open-plan office',
    },
    {
      title: 'Development Partners',
      desc: 'Programme delivery, logistics and consulting for donor and development initiatives.',
      image: '1521737604893-d14cc237f11d',
      alt: 'A team collaborating around a table',
    },
  ],
}

export const why = {
  eyebrow: 'The TerraLogic difference',
  title: 'Why organisations consolidate with us',
  cta: { label: 'Start a conversation', href: '#contact' },
  items: [
    {
      no: '01',
      icon: 'layers',
      title: 'End-to-end, under one roof',
      desc: 'ICT, engineering and supply from a single accountable partner — fewer vendors, fewer gaps, clearer ownership.',
    },
    {
      no: '02',
      icon: 'globe',
      title: 'Local presence, global standards',
      desc: 'On-the-ground delivery across Nigeria, built to international engineering and information-security benchmarks.',
    },
    {
      no: '03',
      icon: 'badge',
      title: 'Certified & compliant',
      desc: 'Quality, security and data-protection practices aligned to recognised standards and regulatory expectations.',
    },
    {
      no: '04',
      icon: 'bolt',
      title: 'Turnkey delivery',
      desc: 'From feasibility and design to commissioning and managed operations — we carry the project the whole way.',
    },
  ],
}

export const stats = {
  title: 'Delivery you can measure',
  intro: 'Indicative programme outcomes across our integrated engagements.',
  items: [
    { value: '120+', label: 'Projects delivered', sub: 'Public and private sector' },
    { value: '99.98%', label: 'Operational uptime', sub: 'On managed infrastructure' },
    { value: '15+', label: 'Years combined expertise', sub: 'Across our leadership' },
    { value: '36', label: 'States reachable', sub: 'Nationwide delivery footprint' },
  ],
}

export const approach = {
  eyebrow: 'How we engage',
  title: 'A clear path from brief to operation',
  intro: 'One team carries the programme the whole way — so accountability never changes hands.',
  steps: [
    { no: '01', icon: 'compass', tag: 'Discovery', accent: 'sky', title: 'Consult', desc: 'We map the problem, constraints and success measures with your team and stakeholders.' },
    { no: '02', icon: 'advisory', tag: 'Architecture', accent: 'moss', title: 'Design', desc: 'We architect the solution across software, infrastructure and security as one blueprint.' },
    { no: '03', icon: 'bolt', tag: 'Delivery', accent: 'ember', title: 'Deploy', desc: 'We build, integrate and commission — managing contractors, supply and timelines end to end.' },
    { no: '04', icon: 'server', tag: 'Operations', accent: 'navy', title: 'Manage', desc: 'We operate, support and continuously improve, so the system keeps delivering value.' },
  ],
}

export const work = {
  eyebrow: 'Selected work',
  title: 'Programmes we’re proud of',
  intro: 'Representative engagements — illustrative of scope and outcome.',
  items: [
    {
      tag: 'Cloud & Data Centres',
      title: 'Federal data-centre modernisation',
      problem: 'Ageing on-premise systems with limited resilience.',
      result: 'Migrated to a Tier III-grade environment with 99.98% uptime and 40% lower run cost.',
      image: '1558494949-ef010cbdcc31',
      alt: 'Rows of networking equipment and cabling in a data centre',
    },
    {
      tag: 'e-Government',
      title: 'State-wide citizen services platform',
      problem: 'Manual, paper-based processes across multiple agencies.',
      result: 'Unified digital services portal serving citizens online, cutting turnaround from weeks to days.',
      image: '1451187580459-43490279c0fa',
      alt: 'A view of the earth at night showing connected city lights',
    },
    {
      tag: 'Smart Infrastructure',
      title: 'Integrated facility & security rollout',
      problem: 'Disconnected security and building systems across sites.',
      result: 'Centralised command, surveillance and access control across facilities on one platform.',
      image: '1497366754035-f200968a6e72',
      alt: 'A modern facility corridor with glass partitions',
    },
  ],
}

export const partners = {
  heading: 'Built with the world’s leading technology vendors',
  note: 'Accredited partnerships that let us specify, supply and support enterprise-grade systems.',
}

export const testimonials = {
  eyebrow: 'In their words',
  title: 'Don’t take our word for it — hear it from the people we deliver for.',
  items: [
    {
      quote:
        'TerraLogic took a programme that had stalled for years and delivered it end to end. Having software, infrastructure and security in one team removed the finger-pointing entirely.',
      name: 'Permanent Secretary',
      role: 'Federal MDA (name withheld)',
    },
    {
      quote:
        'Their engineers understand both the technology and the realities of delivering across the country. The managed-service handover was the smoothest we’ve experienced.',
      name: 'Group Head, Technology',
      role: 'Tier-1 Financial Institution',
    },
    {
      quote:
        'Disciplined project management, transparent reporting and a genuine commitment to local capacity building. A serious, dependable partner.',
      name: 'Programme Director',
      role: 'International Development Partner',
    },
    {
      quote:
        'One contract, one point of accountability. They specified the equipment, built the facility and now run it — exactly what a project of this sensitivity needed.',
      name: 'Director of Operations',
      role: 'Security Agency (name withheld)',
    },
    {
      quote:
        'From feasibility through to commissioning they kept the programme moving and the reporting honest. The uptime on the managed infrastructure speaks for itself.',
      name: 'Chief Technology Officer',
      role: 'National Enterprise',
    },
  ],
}

export const cta = {
  title: 'Have a programme that spans more than one discipline?',
  subtitle: 'Tell us what you’re trying to achieve. We’ll bring the right mix of software, infrastructure and engineering to the table.',
}

export const footer = {
  tagline: 'Engineering Nigeria’s digital and physical infrastructure — under one accountable roof.',
  columns: [
    {
      heading: 'Capabilities',
      links: ['Software & Digital', 'Cloud & Data Centres', 'Cybersecurity', 'ICT Supply', 'Engineering', 'Managed Services'],
    },
    {
      heading: 'Sectors',
      links: ['Government', 'Security & Defence', 'Corporate', 'Development Partners'],
    },
    {
      heading: 'Company',
      links: ['About', 'Approach', 'Selected Work', 'Careers', 'Contact'],
    },
  ],
}

/** Build a responsive Unsplash URL for a given photo id and width. */
export function buildImg(id, w = 800, q = 70) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=${q}&w=${w}`
}
export function buildSrcSet(id, widths = [480, 800, 1200, 1600]) {
  return widths.map((w) => `${buildImg(id, w)} ${w}w`).join(', ')
}
