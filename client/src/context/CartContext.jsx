import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);


  const addToCart = (product) => {

    const exists = cart.find(
      item => item._id === product._id
    );

    if (exists) {

      setCart(
        cart.map(item =>
          item._id === product._id
          ? {
              ...item,
              qty: item.qty + 1
            }
          : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          qty: 1
        }
      ]);

    }

  };


  const removeFromCart = (id) => {

    setCart(
      cart.filter(
        item => item._id !== id
      )
    );

  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;