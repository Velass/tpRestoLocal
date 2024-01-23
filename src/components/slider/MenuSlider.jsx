import "./MenuSlider.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../utils/CartContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Firebase from "../../utils/Firebase";

const MenuSlider = () => {
  const { onAddToCart } = useContext(CartContext);
  const [pizzasFromFirestore, setPizzasFromFirestore] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentSnapshot = await Firebase.getData();
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          if (data && data.pizzas) {
            const firstFivePizzas = data.pizzas.slice(0, 5);
            setPizzasFromFirestore(firstFivePizzas);
          } else {
            console.log(
              "Le document ne contient pas la propriété 'pizzas' ou est vide."
            );
          }
        } else {
          console.log("Le document n'existe pas.");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données JSON :",
          error
        );
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="menu-slider">
      <Slider {...settings}>
        {pizzasFromFirestore.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.ingredients.join(", ")}</p>
            <p>Prix: {item.price}€</p>
            <button onClick={() => onAddToCart(item)}>Ajouter au panier</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MenuSlider;
