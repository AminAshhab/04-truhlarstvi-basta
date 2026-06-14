function About() {
  return (
    <section id="o-nas" className="section">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="eyebrow reveal">— O nás</div>
            <div className="divider reveal"></div>
            <h2 className="about-title reveal">
              Ivo Bašta<br />
              <span className="italic-mark">— Truhlářství.</span>
            </h2>
            <figure className="about-photo reveal">
              <img
                src="/images/portfolio-interier-jidelna.jpg"
                alt="Interiér z dílny Ivo Bašta"
                loading="lazy"
              />
              <figcaption>Z naší dílny · zakázková výroba</figcaption>
            </figure>
          </div>

          <div>
            <p className="about-lead reveal">
              Firma Truhlářství Ivo Bašta byla založena v roce 1992 jako
              sdružení truhlářství — tesařství — elektro. Od roku 1994 nese
              dnešní název.
            </p>
            <div className="about-body">
              <p className="reveal">
                V letech 1992–1998 firma působila v pronajatých prostorách
                Sokola Bedřichov — ATC Pávov, v letech 1998–2006 v prostorách
                Fleš Jihlava. Od roku 2006 rozvíjíme činnost ve vlastních
                prostorách v Ústí u Větrného Jeníkova.
              </p>
              <p className="reveal">
                Vyrábíme nábytek na zakázku — od vybavení kanceláří přes byty
                a rodinné domy. Od roku 1996 montujeme dveře a zárubně SAPELI
                s nejmodernější montážní technikou WÜRTH; od roku 2013 také
                dveře SEPOS.
              </p>
              <p className="reveal">
                Dál se věnujeme výrobě kuchyní včetně spotřebičů, vestavěným
                skříním, dětským pokojům, obývacím stěnám z lamina i masivu,
                výrobě schodišť, obložení a podbití podhledů pro rodinné domy
                i přístřešků a pergol.
              </p>
            </div>
            <div className="about-pull reveal">
              „Dveřím se věnujeme od samotného zaměření až po konečnou montáž —
              upravujeme je přímo na místě podle rozdílnosti podlah.“
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
