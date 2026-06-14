function Contact() {
  return (
    <section id="kontakt" className="section section-alt">
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <div className="eyebrow reveal">— Kontakt</div>
          <div className="divider reveal"></div>
          <h2 className="reveal">
            Domluvíme<br />
            <span className="italic-mark">vaši zakázku.</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-channels reveal">
            <a href="tel:+420777616951" className="channel">
              <div className="channel-label">
                <span className="name">Telefon (Ivo)</span>
                <span className="value">+420 777 616 951</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>
            <a href="tel:+420603516951" className="channel">
              <div className="channel-label">
                <span className="name">Telefon (provoz)</span>
                <span className="value">+420 603 516 951</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>
            <a href="mailto:truhlikbasta@gmail.com" className="channel">
              <div className="channel-label">
                <span className="name">E-mail</span>
                <span className="value">truhlikbasta@gmail.com</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>
          </div>

          <div className="address-block reveal">
            <div className="label">Dílna a adresa</div>
            <div className="value">Ivo Bašta — Truhlářství</div>
            <div className="value" style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>
              Ústí 105
            </div>
            <div className="city">588 42 Větrný Jeníkov · okres Jihlava</div>

            <p className="muted" style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
              Vlastní dílna od roku 2006. Pracujeme po celé Vysočině a okolí —
              menší zakázky lze předat osobně, větší zaměřujeme přímo na místě.
            </p>

            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps?q=%C3%9Ast%C3%AD+105%2C+588+42+V%C4%9Btrn%C3%BD+Jen%C3%ADkov&output=embed"
                title="Mapa — Ústí 105, Větrný Jeníkov"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
