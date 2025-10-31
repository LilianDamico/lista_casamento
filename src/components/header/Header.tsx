import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link ${isActive ? "active" : ""}`;

  return (
    <header className="hdr">
      <div className="hdr__wrap">
        <NavLink to="/" className="brand" onClick={closeMenu} aria-label="Ir para a página inicial">
          <span className="brand__names">Caroline & Gabriel</span>
        </NavLink>

        <button
          className="hdr__burger"
          aria-label="Abrir/fechar navegação"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>Início</NavLink>
          <NavLink to="/galeria" className={linkClass} onClick={closeMenu}>Galeria</NavLink>
          <NavLink to="/lista" className={linkClass} onClick={closeMenu}>Lista</NavLink>
          <NavLink to="/listaconvidados" className={linkClass} onClick={closeMenu}>Lista de Convidados</NavLink>
          <NavLink to="/rsvp" className={linkClass} onClick={closeMenu}>RSVP</NavLink>
          <NavLink to="/local" className={linkClass} onClick={closeMenu}>Local</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
