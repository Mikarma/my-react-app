import logements from "../data/logements.json"
import Banner from "../components/Banner/Banner"
import Card from "../components/Card/Card"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/main.scss"

function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <Banner
          title="Chez vous, partout et ailleurs"
          image="/src/assets/banner-home.png"
        />

        <section className="gallery">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
