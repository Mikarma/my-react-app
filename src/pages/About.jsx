import "../styles/main.scss"
import Banner from "../components/Banner/Banner.jsx"
import Collapse from "../components/Collapse/Collapse.jsx"
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"

import aboutBanner from "../assets/img/about_banner.jpg"

function About() {
  const sections = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une information fiable et vérifiée.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie de notre ADN. Chaque utilisateur doit respecter les autres.",
    },
    {
      title: "Service",
      content:
        "Nos équipes sont disponibles 24h/24 et 7j/7 pour vous assurer un service optimal.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est notre priorité : chaque logement respecte nos standards stricts.",
    },
  ]

  return (
    <>
      <Header />

      <main className="about">
        <Banner
          image={aboutBanner} variant="cover"/>

        <section className="about__content">
          {sections.map((sec, index) => (
            <Collapse key={index} title={sec.title} content={sec.content} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default About
