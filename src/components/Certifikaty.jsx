import { useCallback, useEffect, useState } from 'react'

const certs = [
  { src: '/images/cert-sapeli-povereni.jpg', label: 'Pověření SAPELI 2013' },
  { src: '/images/cert-zive-firmy-2013.jpg', label: 'Certifikát 2013' },
  { src: '/images/cert-zive-firmy-2012.jpg', label: 'Certifikát 2012' },
  { src: '/images/cert-spolehliva-firma-2011.jpg', label: 'Certifikát 2011' },
  { src: '/images/cert-koncese-ochrana.jpg', label: 'Koncese — ochrana osob a majetku' },
]

function Certifikaty() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % certs.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + certs.length) % certs.length,
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

  const active = isOpen ? certs[activeIndex] : null

  return (
    <section id="certifikaty" className="section">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="eyebrow reveal">— Certifikáty a koncese</div>
            <div className="divider reveal"></div>
            <h2 className="reveal">
              Pověření<br />
              <span className="italic-mark">a partnerské certifikace.</span>
            </h2>
          </div>
          <p className="muted reveal" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '420px' }}>
            Doklady o partnerstvích a živnostenských oprávněních — od pověření
            SAPELI po koncese pro ochranu osob a majetku.
          </p>
        </div>

        <div className="cert-grid">
          {certs.map((c, i) => (
            <button
              type="button"
              key={c.label}
              className="cert-item reveal"
              onClick={() => setActiveIndex(i)}
              aria-label={`Otevřít detail: ${c.label}`}
            >
              <div className="cert-item-thumb">
                <img src={c.src} alt={c.label} loading="lazy" />
              </div>
              <div className="cert-item-label">{c.label}</div>
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
            <img src={active.src} alt={active.label} />
            <figcaption>
              <span className="lightbox-counter">{activeIndex + 1} / {certs.length}</span>
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

export default Certifikaty
