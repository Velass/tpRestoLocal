import './Accueil.css';
import { Link } from "react-router-dom";
import MenuSlider from "../slider/MenuSlider";

function Accueil() {
  return (
    <div className="accueil">
      <MenuSlider />
      <Link to="/menu">
        <button className="cta-button">Commander maintenant</button>
      </Link>
    </div>
  );
}

export default Accueil;