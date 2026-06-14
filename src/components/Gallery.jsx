import { useCallback, useEffect, useState } from 'react'

const photos = [
  { src: '/images/portfolio-kuchyne-rekonstrukce.jpg', alt: 'Kuchyňská linka na zakázku', label: 'Kuchyně', span: 'tall' },
  { src: '/images/portfolio-dvere-chodba.jpg', alt: 'Dveře SAPELI v chodbě bytu', label: 'Dveře · SAPELI', span: 'wide' },
  { src: '/images/portfolio-vchodove-dvere.jpg', alt: 'Vchodové dveře', label: 'Vchodové dveře', span: 'tall' },
  { src: '/images/portfolio-interier-jidelna.jpg', alt: 'Interiér jídelny', label: 'Jídelna', span: 'square' },
  { src: '/images/portfolio-koupelna.jpg', alt: 'Koupelnové obložení', label: 'Koupelna', span: 'square' },
  { src: '/images/portfolio-schodiste.jpg', alt: 'Dřevěné schodiště', label: 'Schodiště', span: 'big' },
  { src: '/images/portfolio-schodiste-montaz.jpg', alt: 'Montáž schodiště', label: 'Montáž · schodiště', span: 'square' },
  { src: '/images/portfolio-firemni-vuz.jpg', alt: 'Firemní vůz Truhlářství Bašta', label: 'Z dílny', span: 'square' },
]

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length,
      ),
    [],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, next, prev])

  const active = isOpen ? photos[activeIndex] : null

  return (
    <section id="galerie" className="section section-alt">
      <div className="container">
        <div className="gallery-header">
          <div>
            <div className="eyebrow reveal">— Fotogalerie</div>
            <div className="divider reveal"></div>
            <h2 className="reveal">
              Z dílny,<br />
              <span className="italic-mark">z realizací.</span>
            </h2>
          </div>
          <p className="muted reveal" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '420px' }}>
            Ukázka z naší práce — kuchyně, vestavěné skříně, montáže dveří a
            schodišť. Fotky z reálných zakázek, ne stock.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <button
              type="button"
              className={`gallery-item gallery-${photo.span} reveal`}
              key={photo.src}
              onClick={() => setActiveIndex(i)}
              aria-label={`Otevřít detail: ${photo.label}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <span className="gallery-caption">{photo.label}</span>
              <span className="gallery-zoom" aria-hidden="true">+</span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={close}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Zavřít">×</button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Předchozí"
          >‹</button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <figcaption>
              <span className="lightbox-counter">{activeIndex + 1} / {photos.length}</span>
              <span className="lightbox-label">{active.label}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Další"
          >›</button>
        </div>
      )}
    </section>
  )
}

export default Gallery
