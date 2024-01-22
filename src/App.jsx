import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carte from "./components/carte/Carte";
import Presentation from "./components/presentation/Presentation";
import Localisation from "./components/localisation/Localisation";
import Accueil from "./components/accueil/Accueil";

import { useEffect } from "react";
import Firebase from "./utils/firebase";
import { CartProvider } from "./utils/CartContext";

function App() {
  useEffect(() => {
    Firebase.setData()
  })

  return (
    <div className="App">
      <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Presentation" element={<Presentation />} />
          <Route path="/Carte" element={<Carte />} />
          <Route path="/Localisation" element={<Localisation />} />
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
