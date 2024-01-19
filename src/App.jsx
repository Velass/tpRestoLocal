import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Carte from "./components/carte/carte";
import Presentation from "./components/presentation/presentation";
import Localisation from "./components/localisation/localisation";
import Accueil from "./components/accueil/accueil";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Presentation" element={<Presentation />} />
          <Route path="/Carte" element={<Carte />} />
          <Route path="/Localisation" element={<Localisation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
