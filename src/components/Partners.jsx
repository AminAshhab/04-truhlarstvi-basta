const partners = [
  {
    name: 'SAPELI',
    since: 'spolupráce od 1996',
    desc: 'Profesionální montáž dveří a zárubní s nejmodernější montážní technikou WÜRTH a chemií od stejného výrobce.',
  },
  {
    name: 'JAVAB',
    since: 'autorizovaný partner',
    desc: 'Katalog dveří a zárubní JAVAB — výběr od designových až po protipožární řešení.',
  },
  {
    name: 'SEPOS',
    since: 'spolupráce od 2013',
    desc: 'Montáž dveří a zárubní SEPOS, spol. s r.o. — rozšíření portfolia o český výrobní program.',
  },
]

function Partners() {
  return (
    <section id="partneri" className="partners">
      <div className="container">
        <div className="partners-header">
          <div className="eyebrow reveal">— Naši partneři</div>
          <h2 className="reveal" style={{ marginBottom: '1rem' }}>
            Tři dveřní programy<br />
            <span className="italic-mark">pod jednou rukou.</span>
          </h2>
          <p className="reveal">
            Tři certifikované partnerství = široký výběr a profesionální montáž
            pro jakýkoli interiér.
          </p>
        </div>
        <div className="partners-grid">
          {partners.map((p) => (
            <div key={p.name} className="partner-card reveal">
              <div className="partner-name">{p.name}</div>
              <div className="partner-since">{p.since}</div>
              <p className="partner-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
