import { Link } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "../styles/main.scss"

function Error() {
  return (
    <>
      <Header />
        <section style={{ textAlign: "center", marginTop: "100px" }}>
          <h1>404</h1>
          <p>Oups ! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </section>
      <Footer />
    </>
  )
}

export default Error
