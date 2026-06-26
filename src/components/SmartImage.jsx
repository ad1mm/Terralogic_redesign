import { useState } from 'react'
import { buildImg, buildSrcSet } from '../content.js'

/**
 * Responsive, lazy-loaded image with a reserved aspect ratio (no layout shift)
 * and a soft fade-in once decoded. Pulls sized variants from Unsplash via srcset.
 */
export default function SmartImage({
  id,
  alt,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  imgClassName = '',
  widths,
  eager = false,
}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-navy-800 ${className}`}>
      <img
        src={buildImg(id, 1200)}
        srcSet={widths ? buildSrcSet(id, widths) : buildSrcSet(id)}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      />
    </div>
  )
}
