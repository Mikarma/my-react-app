import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Housing() {
  const { id } = useParams()

  return (
    <>
      <Header />
      <main>
        <h1>Logement</h1>
        <p>ID : {id}</p>
      </main>
      <Footer />
    </>
  )
}

export default Housing
