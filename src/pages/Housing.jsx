import { useParams, Navigate } from "react-router-dom"
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Carousel from "../components/Carousel/Carousel.jsx"
import Collapse from "../components/Collapse/Collapse.jsx"
import logements from "../data/logements.json"
import "../styles/main.scss"

function Housing() {
  const { id } = useParams()

  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/error" replace />
  }

  return (
    <>
      <Header />

      <main className="housing">
        <Carousel pictures={logement.pictures} />

        <section className="housing__info">
          <div className="housing__title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="housing__owner">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          
        </section>

        <section className="housing__owner-rating">
          <div className="housing__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="housing__tag">
                {tag}
              </span>
            ))}
          </div>
          

          <div className="housing__rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < logement.rating ? "star filled" : "star"}>
                ★
              </span>
            ))}
          </div>
        </section>

        <section className="housing__details">
          <Collapse className="housing__details--desc" title="Description" content={logement.description} />
          <Collapse className="housing__details--equip"
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((eq, i) => (
                  <li key={i}>{eq}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Housing
