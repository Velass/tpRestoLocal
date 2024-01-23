import { Link } from "react-router-dom";
import "./Footer.css"; 

function Footer() {
  return (
    <div className="footer">
      <div className="lien-site">
        <div className="left">
          <Link to="/Presentation" className="nav-link">
            Présentation
          </Link>
          <Link to="/Carte" className="nav-link">
            Carte
          </Link>
        </div>
        <div className="right">
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
      </div>
      <div className="reseau">
        <a className="twitter" href="https://twitter.com/">
        <img src="src\assets\twitter.png" alt="" />
        </a>
        <a className="fb" href="https://www.facebook.com">
        <img src="src\assets\facebook.png" alt="" />
        </a>
        <a className="insta" href="https://www.instagram.com/">
        <img src="src\assets\instagram.png" alt="" />
        </a>
        <a className="reddit" href="https://www.reddit.com/">
        <img src="src\assets\reddit.png" alt="" />
        </a>
      </div>
      <p className="copyright">Copyright © 2024-2024 Vellas</p>
    </div>
  );
}

export default Footer;
