import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo_header.png";
import "../../styles/main.scss"

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />

      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
