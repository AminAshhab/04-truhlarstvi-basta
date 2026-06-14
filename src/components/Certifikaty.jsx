const certs = [
  { src: '/images/cert-sapeli-povereni.jpg', label: 'Pověření SAPELI 2013' },
  { src: '/images/cert-zive-firmy-2013.jpg', label: 'Certifikát 2013' },
  { src: '/images/cert-zive-firmy-2012.jpg', label: 'Certifikát 2012' },
  { src: '/images/cert-spolehliva-firma-2011.jpg', label: 'Certifikát 2011' },
  { src: '/images/cert-koncese-ochrana.jpg', label: 'Koncese — ochrana osob a majetku' },
]

function Certifikaty() {
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
          {certs.map((c) => (
            <article key={c.label} className="cert-item reveal">
              <div className="cert-item-thumb">
                <img src={c.src} alt={c.label} loading="lazy" />
              </div>
              <div className="cert-item-label">{c.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifikaty
