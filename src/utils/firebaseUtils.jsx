import { useState, useEffect } from 'react';
import Firebase from './firebase';
import 'firebase/firestore';

function FirebaseUtils() {
  const [pizzasFromFirestore, setPizzasFromFirestore] = useState([]);

  useEffect(() => {
    Firebase.setData()
    const fetchData = async () => {
      try {
        const documentSnapshot = await Firebase.getData();

        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          console.log(data)
          if (data && data.pizzas) {
            setPizzasFromFirestore(data.pizzas);
            console.log(data.pizza)
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
        <div key={pizza.id}>
          <h3>{pizza.name}</h3>
          <img src={pizza.image} alt={pizza.name} style={{ maxWidth: '200px' }} />
          <p>Ingredients: {pizza.ingredients.join(", ")}</p>
          <p>Price: ${pizza.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FirebaseUtils;
