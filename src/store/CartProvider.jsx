import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  // declaring initial state
  const [cartItems, setCartItems] = useState({
    items: [],
    totalAmount: 0,
  });

  const addItemsHandler = (product) => {
    setCartItems((prev) => {
      const updatedState = { ...prev };
      updatedState.items.push(product);
      return updatedState;
    });
  };

  // value that will be received by each n every components from our global mall
  const cartCtx = {
    items: cartItems.items,
    onAddItems: addItemsHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
