import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/Presentation" className="nav-link">
        Présentation
      </Link>
      <Link to="/Carte" className="nav-link">
        Carte
      </Link>
      <Link to="/Localisation" className="nav-link">
        Localisation
      </Link>
      <Link to="/Stock" className="nav-link">
        Stock
      </Link>
      <Link to="/Plan" className="nav-link">
        Plan du site
      </Link>
    </div>
  );
}

export default Footer;
