import './MenuSlider.css';
import { useContext } from 'react';
import { CartContext } from '../../utils/CartContext'; // Assurez-vous d'ajuster le chemin d'accès correct
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MenuItems = [
  {
    id: 1,
    title: 'Pizza Margherita',
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Basil'],
    price: 9.99,
    image: 'path/to/margherita.jpg',
  },
  {
    id: 2,
    title: 'Pizza Pepperoni',
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Pepperoni'],
    price: 10.99,
    image: 'path/to/pepperoni.jpg',
  },
  // ... Ajoutez d'autres éléments du menu ici
];

const MenuSlider = () => {
  const { onAddToCart } = useContext(CartContext);

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
      {MenuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.ingredients.join(', ')}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default MenuSlider;
