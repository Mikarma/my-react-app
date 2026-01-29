import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Banner from "../components/Banner/Banner.jsx"
import homeBanner from "../assets/img/background.png"
import Card from "../components/Card/Card.jsx"
import logements from "../data/logements.json"
import "../styles/main.scss"


function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <Banner
          image={homeBanner} 
          title="Chez vous, partout et ailleurs"
          variant="contain"
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
