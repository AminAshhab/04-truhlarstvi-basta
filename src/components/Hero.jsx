function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow reveal-instant">
              <span className="dot"></span>
              <span className="eyebrow">Ústí u Větrného Jeníkova · od 1992</span>
            </div>
            <h1>
              <span className="line-1">Nábytek a dveře</span>
              <span className="italic-block">na zakázku.</span>
            </h1>
            <p className="hero-sub reveal-instant">
              Zakázková výroba nábytku, kuchyní a vestavěných skříní a profesionální
              montáž dveří SAPELI, JAVAB a SEPOS. Vlastní dílna v Ústí u Větrného
              Jeníkova — od roku 1992.
            </p>
            <div className="hero-cta-row reveal-instant">
              <a href="#galerie" className="btn-primary">
                Prohlédnout práce
              </a>
              <a href="tel:+420777616951" className="btn-ghost">
                +420 777 616 951
              </a>
            </div>
            <div className="hero-meta reveal-instant">
              <div className="hero-meta-item">
                <div className="label">Specializace</div>
                <div className="value">Nábytek · Dveře · Kuchyně</div>
              </div>
              <div className="hero-meta-item">
                <div className="label">Region</div>
                <div className="value">Vysočina · ČR</div>
              </div>
            </div>
          </div>

          <figure className="hero-visual reveal-instant">
            <div className="hero-visual-frame">
              <img
                src="/images/portfolio-kuchyne-rekonstrukce.jpg"
                alt="Kuchyňská linka na zakázku — Ivo Bašta Truhlářství"
                loading="eager"
              />
            </div>
            <figcaption className="hero-visual-caption">
              <span className="label">Z ateliéru</span>
              <span>Kuchyňská linka · zakázková výroba</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  )
}

export default Hero
