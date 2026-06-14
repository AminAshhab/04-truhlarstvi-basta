const steps = [
  {
    num: 'I.',
    title: 'Zaměření',
    desc: 'Přijedeme, zaměříme prostor a probereme materiály i provedení.',
  },
  {
    num: 'II.',
    title: 'Výroba',
    desc: 'Ve vlastní dílně v Ústí u Větrného Jeníkova — bez subdodávek a se stálou kontrolou kvality.',
  },
  {
    num: 'III.',
    title: 'Montáž',
    desc: 'Dveře a interiéry instalujeme přímo u vás — úpravy na místě podle reálných podmínek.',
  },
]

function Process() {
  return (
    <section className="section">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="eyebrow reveal">— Postup</div>
            <div className="divider reveal"></div>
            <h2 className="reveal">
              Tři kroky<br />
              <span className="italic-mark">od návrhu k dílu.</span>
            </h2>
          </div>
          <p className="muted reveal" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '420px' }}>
            Většinu úprav řešíme přímo na místě — zárubně srovnáváme podle
            podlah, dveře upravujeme při montáži. Hotovo na první pokus.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s) => (
            <article key={s.num} className="process-step reveal">
              <div className="process-step-num">{s.num}</div>
              <h3 className="process-step-title">{s.title}</h3>
              <p className="process-step-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
