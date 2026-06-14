const milestones = [
  {
    year: '1992',
    title: 'Založení firmy',
    desc: 'Truhlářství — tesařství — elektro. Začínáme v pronajatých prostorách Sokola Bedřichov, ATC Pávov.',
  },
  {
    year: '1994',
    title: 'Ivo Bašta — Truhlářství',
    desc: 'Firma získává dnešní podobu i jméno.',
  },
  {
    year: '1996',
    title: 'Partnerství SAPELI',
    desc: 'Začínáme s profesionální montáží dveří a zárubní SAPELI — montážní technika WÜRTH.',
  },
  {
    year: '1998',
    title: 'Přesun do Jihlavy',
    desc: 'Nové prostory Fleš Jihlava — rozšiřujeme výrobní kapacitu.',
  },
  {
    year: '2006',
    title: 'Vlastní dílna',
    desc: 'Ústí u Větrného Jeníkova — od této chvíle vyrábíme ve svém.',
  },
  {
    year: '2013',
    title: 'Partnerství SEPOS',
    desc: 'Začínáme montovat také dveře a zárubně SEPOS, spol. s r.o.',
  },
]

function Timeline() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="eyebrow reveal">— Příběh dílny</div>
          <div className="divider reveal" style={{ margin: '1.5rem auto' }}></div>
          <h2 className="reveal">Třicet let v dřevě.</h2>
        </div>

        <div className="timeline">
          {milestones.map((m) => (
            <article key={m.year} className="timeline-item reveal">
              <div className="timeline-content">
                <div className="timeline-year">{m.year}</div>
                <h3 className="timeline-title">{m.title}</h3>
                <p className="timeline-desc">{m.desc}</p>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-spacer"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
