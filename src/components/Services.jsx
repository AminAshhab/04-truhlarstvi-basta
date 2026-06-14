const services = [
  {
    num: 'I.',
    img: '/images/portfolio-kuchyne-rekonstrukce.jpg',
    title: 'Kuchyně na zakázku',
    desc: 'Kompletní kuchyňské linky včetně spotřebičů podle požadavku zákazníka.',
    note: 'lamino · masiv',
  },
  {
    num: 'II.',
    img: '/images/portfolio-dvere-chodba.jpg',
    title: 'Dveře a zárubně',
    desc: 'Profesionální montáž SAPELI, JAVAB a SEPOS — od zaměření po finální dokončení.',
    note: 'SAPELI · JAVAB · SEPOS',
  },
  {
    num: 'III.',
    img: '/images/portfolio-vchodove-dvere.jpg',
    title: 'Vestavěné skříně',
    desc: 'Skříně na míru pro byty i rodinné domy — dětské pokoje a obývací stěny.',
    note: 'na míru',
  },
  {
    num: 'IV.',
    img: '/images/portfolio-schodiste.jpg',
    title: 'Schodiště a obložení',
    desc: 'Výroba schodišť, obložení a podbití podhledů pro rodinné domy.',
    note: 'masiv',
  },
  {
    num: 'V.',
    img: '/images/portfolio-interier-jidelna.jpg',
    title: 'Nábytek pro firmy',
    desc: 'Kancelářské vybavení, řešení pro provozovny — atypické zakázky.',
    note: 'B2B',
  },
  {
    num: 'VI.',
    img: '/images/portfolio-koupelna.jpg',
    title: 'Přístřešky a pergoly',
    desc: 'Výroba a montáž přístřešků a pergol pro zahrady a vstupy.',
    note: 'exteriér',
  },
]

function Services() {
  return (
    <section id="vyroba" className="section">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="eyebrow reveal">— Výroba</div>
            <div className="divider reveal"></div>
            <h2 className="reveal">
              Šest oblastí,<br />
              <span className="italic-mark">jedno řemeslo.</span>
            </h2>
          </div>
          <p className="muted reveal" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '420px' }}>
            Od kuchyní po pergoly — vše vyrábíme nebo montujeme sami, ve vlastní
            dílně v Ústí u Větrného Jeníkova. Bez subdodávek.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.num} className="service-card reveal">
              <div className="service-image">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="service-body">
                <span className="service-number">{s.num}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <span className="service-note">{s.note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
