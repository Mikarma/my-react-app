import React, { useState } from "react"
import "./carousel.scss"

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0)
  const total = pictures.length

  if (total === 0) return null 


  const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1))


  const next = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))

  return (
    <div className="carousel">
      {total > 1 && (
        <>
          <button className="carousel__arrow carousel__arrow--left" onClick={prev}>
            ‹
          </button>
          <button className="carousel__arrow carousel__arrow--right" onClick={next}>
            ›
          </button>
          <div className="carousel__counter">
            {current + 1}/{total}
          </div>
        </>
      )}

      <img
        src={pictures[current]}
        alt={`Image ${current + 1} du logement`}
        className="carousel__img"
      />
    </div>
  )
}

export default Carousel
