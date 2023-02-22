import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  // Declaring initial state
  const [cartItems, setCartItems] = useState({
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = (product) => {
    setCartItems((prevState) => {
      const updatedState = { ...prevState };
      const foundIdx = updatedState.items.findIndex(
        (item) => item.title === product.title
      );

      if (foundIdx >= 0) {
        // item already exists
        updatedState.items[foundIdx].quantity++;
      } else {
        updatedState.items.push(product);
      }
      updatedState.totalAmount += product.price;

      return updatedState;
    });
  };

  const removeItemHandler = (product) => {
    setCartItems((prevState) => {
      const updatedState = { ...prevState };
      const foundIdx = updatedState.items.findIndex(
        (item) => item.title === product.title
      );

      if (updatedState.items[foundIdx].quantity > 1) {
        updatedState.items[foundIdx].quantity--;
      } else {
        // remove this item from state
        updatedState.items = prevState.items.filter(
          (item) => item.title !== product.title
        );
      }
      updatedState.totalAmount -= product.price;

      return updatedState;
    });
  };

  const clearItemsHandler = (product) => {
    setCartItems((prevState) => ({
      ...prevState,
      items: [],
      totalAmount: 0,
    }));
  };

  // value that will be received all child components form our global store /state
  const cartCtx = {
    items: cartItems.items,
    onAdditems: addItemHandler,
    onRemoveitems: removeItemHandler,
    onClearitems: clearItemsHandler,
    totalAmount: cartItems.totalAmount,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
