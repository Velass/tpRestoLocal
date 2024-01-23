import './Panier.css';
import { Link } from "react-router-dom";
import MenuSlider from "../slider/MenuSlider";

function Panier() {
  return (
    <div className="accueil">
      <MenuSlider />
      <Link to="/Panier">
        <button className="cta-button">Commander maintenant</button>
      </Link>
    </div>
  );
}

export default Panier;