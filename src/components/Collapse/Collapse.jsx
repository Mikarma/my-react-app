import React, { useState } from "react"
import "./collapse.scss"

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <h2>{title}</h2>
        <span className={`collapse__arrow ${open ? "collapse__arrow--open" : ""}`}>▼</span>
      </div>

      {open && <div className="collapse__content">{content}</div>}
    </div>
  )
}

export default Collapse
