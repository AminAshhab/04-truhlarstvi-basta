import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Timeline from './components/Timeline.jsx'
import Services from './components/Services.jsx'
import Partners from './components/Partners.jsx'
import Gallery from './components/Gallery.jsx'
import Process from './components/Process.jsx'
import References from './components/References.jsx'
import Certifikaty from './components/Certifikaty.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const wrapperRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    lenis.on('scroll', ({ scroll }) => setScrolled(scroll > 40))

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.reveal-instant').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })
      })

      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTimeline
        .to('.hero .hero-eyebrow', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
        .to('.hero .hero-visual', { opacity: 1, y: 0, duration: 1.4, ease: 'power2.out' }, '-=0.7')
        .to('.hero h1 .line-1', { opacity: 1, y: 0, duration: 1.0 }, '-=1.2')
        .to('.hero h1 .italic-block', { opacity: 1, y: 0, duration: 1.0 }, '-=0.7')
        .to('.hero .hero-sub', { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
        .to('.hero .hero-cta-row', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to('.hero .hero-meta', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to('.hero .hero-scroll', { opacity: 1, duration: 0.8 }, '-=0.3')

      gsap.utils.toArray('.timeline-item').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
            onEnter: () => el.classList.add('in-view'),
          },
        })
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef} className="app">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Timeline />
      <Services />
      <Partners />
      <Gallery />
      <Process />
      <References />
      <Certifikaty />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
