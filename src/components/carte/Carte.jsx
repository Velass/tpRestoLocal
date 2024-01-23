import { useState, useEffect, useContext } from 'react';
import Firebase from "../../utils/Firebase.jsx";
import { CartContext } from '../../utils/CartContext.jsx';
import "./Carte.css";

function Carte() {
  const { onAddToCart } = useContext(CartContext);
  const [pizzasFromFirestore, setPizzasFromFirestore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentSnapshot = await Firebase.getData();
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          if (data && data.pizzas) {
            setPizzasFromFirestore(data.pizzas);
          } else {
            console.log("Le document ne contient pas la propriété 'pizzas' ou est vide.");
          }
        } else {
          console.log("Le document n'existe pas.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données JSON :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pizza">
      {pizzasFromFirestore.map((pizza) => (
        <div key={pizza.id} className='conteneur-pizza'>
          <h3>{pizza.name}</h3>
          <img src={pizza.image} alt={pizza.name} />
          <p>Ingredients: {pizza.ingredients.join(", ")}</p>
          <p>Prix: {pizza.price}€</p>
          <button onClick={() => onAddToCart(pizza)}>Rajouter au panier</button>
        </div>
      ))}
    </div>
  );
}

export default Carte;
