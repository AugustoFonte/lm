import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  return (
    <nav>
      <div>
        <ul className="menu" >
          <li>
            <Link className="link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="/SobreNos">Sobre Nós</Link>
          </li>
          <li>
            <Link className="link" to="/Servicos">Serviços</Link>
          </li>
          <li>
            <Link className="link" to="/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link className="link" to="/Contactos">Contactos</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;