import "./banner.scss"

function Banner({ image, title, variant = "cover" }) {
  return (
    <section className={`banner banner--${variant}`}>
      <img src={image} alt={title || "Banner"} className="banner__img" />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  )
}

export default Banner
