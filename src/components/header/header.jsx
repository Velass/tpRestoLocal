import { Link } from "react-router-dom";

function Header(){


    return(
        <div className="header">
        <Link to="/" className="nav-link">
          <img src="src\assets\pizzaMenu.jpg" alt="" />
        </Link>
        <Link to="/Presentation" className="nav-link">
          Présentation
        </Link>
        <Link to="/Carte" className="nav-link">
          Carte
        </Link>
        <Link to="/Localisation" className="nav-link">
          Localisation
        </Link>
        <Link to="/Localisation" className="nav-link">
          Panier
        </Link>
      </div>
    );
}

export default Header