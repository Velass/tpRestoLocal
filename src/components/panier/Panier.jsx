import "./Panier.css";
import { useContext, useState } from "react";
import { CartContext } from "../../utils/CartContext";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../utils/FormContext";

function Panier() {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);
  const { addToInfo } = useContext(FormContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
  });

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToInfo(formData);
    clearCart()
    navigate("/Livraison");
  };

  const isFormValid = formData.nom && formData.prenom && formData.adresse;

  return (
    <div className="panier-recap">
      <h2>Récapitulatif du Panier</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id} className="">
            <img src={pizza.image} alt={pizza.name} />
            <span>{pizza.name}</span>
            <span>{pizza.price}€</span>
            <button onClick={() => removeFromCart(pizza.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total :</span>
        <span> {totalAmount}€</span>
      </div>
      <div className="button">
        <button onClick={clearCart}>Vider le Panier</button>
      </div>
      <div className="formulaire">
        <h3>Formulaire de Livraison</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} />
          </label>
          <label>
            Prénom:
            <input type="text" name="prenom" value={formData.prenom} onChange={handleInputChange} />
          </label>
          <label>
            Adresse:
            <input type="text" name="adresse" value={formData.adresse} onChange={handleInputChange} />
          </label>
          <button type="submit" disabled={!isFormValid}>Valider la Commande</button>
          {!isFormValid && <p className="message">Veuillez remplir le formulaire.</p>}
        </form>
      </div>
    </div>
  );
}

export default Panier;
