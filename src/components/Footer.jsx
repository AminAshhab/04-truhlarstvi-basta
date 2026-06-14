function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="nav-brand-mark">IB</span>
          <span>Ivo Bašta — Truhlářství</span>
        </div>
        <div className="footer-meta">
          <div>Ústí 105 · 588 42 Větrný Jeníkov</div>
          <div>
            <a href="tel:+420777616951">+420 777 616 951</a> ·{' '}
            <a href="tel:+420603516951">+420 603 516 951</a>
          </div>
          <div>
            <a href="mailto:truhlikbasta@gmail.com">truhlikbasta@gmail.com</a>
          </div>
          <div>© 1992 – {new Date().getFullYear()} · od roku 1992 v dřevě.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
