import { createContext, useState } from 'react';
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  
  const clearCart = () => {
    setCart([]);
  };

  const onAddToCart = (item) => {
    addToCart(item);

    
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, onAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
