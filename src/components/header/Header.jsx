import { Link } from "react-router-dom";
import "./Header.css"; // Importez le fichier CSS ici
import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";

function Header(){
  const { cart } = useContext(CartContext);
  const number = cart.length;

    return(
        <div className="header">
        <Link to="/Accueil" className="nav-link">
          <img src="/img/pizzaMenu.jpg" alt="" />
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
        <div className="panier">
        <Link to="/Panier" className="nav-link cart">
          <img src="/img/panier.png" alt="" />
          <p>{number}</p>
        </Link>
        </div>
      </div>
    );
}

export default Header