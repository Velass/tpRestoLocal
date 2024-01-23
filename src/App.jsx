import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carte from "./components/carte/Carte";
import Presentation from "./components/presentation/Presentation";
import Localisation from "./components/localisation/Localisation";
import Accueil from "./components/accueil/Accueil";
import Panier from "./components/panier/Panier";

import { useEffect } from "react";
import Firebase from "./utils/Firebase.jsx";
import { CartProvider } from "./utils/CartContext";
import Livraison from "./components/livraison/Livraison.jsx";
import { FormProvider } from "./utils/FormContext.jsx";

function App() {
  useEffect(() => {
    Firebase.setData();
  });

  return (
    <div className="App">
      <CartProvider>
        <FormProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/Accueil" element={<Accueil />} />
              <Route path="/Presentation" element={<Presentation />} />
              <Route path="/Carte" element={<Carte />} />
              <Route path="/Localisation" element={<Localisation />} />
              <Route path="/Panier" element={<Panier />} />
              <Route path="/Livraison" element={<Livraison />} />
            </Routes>
            <Footer />
          </Router>
        </FormProvider>
      </CartProvider>
    </div>
  );
}

export default App;
