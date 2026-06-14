const dveriRef = [
  { name: 'Italo flexo Velké Meziříčí', meta: 'Velké Meziříčí — průmyslový komplex' },
  { name: 'Obytný soubor Vidoule Praha + řadové domy', meta: 'Praha — rezidenční výstavba' },
  { name: 'Český statistický úřad Praha', meta: 'Praha — administrativa' },
  { name: 'Obytný soubor Velké Přílepy', meta: 'Velké Přílepy — bytová zástavba' },
  { name: 'Krajský úřad', meta: 'Administrativní budova' },
]

const nabytkRef = [
  { name: 'Zubní ordinace Motorpal Jihlava', meta: 'Vybavení ordinace' },
  { name: 'Ředitelství Motorpal Jihlava', meta: 'Kancelářský nábytek' },
  { name: 'Kuchyňské kouty Automotive Lighting', meta: 'Vybavení kanceláří — kompletně' },
]

function References() {
  return (
    <section id="reference" className="section section-alt">
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <div className="eyebrow reveal">— Reference</div>
          <div className="divider reveal"></div>
          <h2 className="reveal">
            Z větších realizací<br />
            <span className="italic-mark">posledních let.</span>
          </h2>
        </div>

        <div className="references-grid">
          <div className="reveal">
            <div className="references-block-title">Montáž dveří a zárubní SAPELI</div>
            <ul className="references-list">
              {dveriRef.map((r) => (
                <li key={r.name}>
                  {r.name}
                  <span className="ref-meta">{r.meta}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <div className="references-block-title">Výroba nábytku</div>
            <ul className="references-list">
              {nabytkRef.map((r) => (
                <li key={r.name}>
                  {r.name}
                  <span className="ref-meta">{r.meta}</span>
                </li>
              ))}
            </ul>
            <p className="muted" style={{ marginTop: '1.5rem', fontSize: '0.92rem', lineHeight: 1.65 }}>
              Pro zákazníky z řad podniků, firem a rodin jsme realizovali řadu
              zakázek v oblasti výroby nábytku, kuchyní a mnoho dalšího.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default References
