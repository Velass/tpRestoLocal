import { Link } from "react-router-dom";
import "./Header.css"; // Importez le fichier CSS ici

function Header(){


    return(
        <div className="header">
        <Link to="/Accueil" className="nav-link">
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
        <Link to="/Localisation" className="nav-link cart">
          <img src="src\assets\panier.png" alt="" />
        </Link>
      </div>
    );
}

export default Header