function Navigation({ scrolled }) {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-mark">IB</span>
          <span>Truhlářství Bašta</span>
        </a>
        <div className="nav-links">
          <a href="#o-nas">O nás</a>
          <a href="#vyroba">Výroba</a>
          <a href="#partneri">Partneři</a>
          <a href="#galerie">Galerie</a>
          <a href="#reference">Reference</a>
          <a href="#certifikaty">Certifikáty</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <a href="#kontakt" className="nav-cta">
          Domluvit zakázku
        </a>
      </div>
    </nav>
  )
}

export default Navigation
