import React from "react";
import { useContext } from "react";
import CartContext from "../../globalStore/CartContext";

const SingleProducts = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="container">
      <img src={props.product.imageUrl} alt={props.product.title} />
      <h1>{props.product.title}</h1>
      <h2>{props.product.price}</h2>

      <button
        onClick={() => cartCtx.onAdditems({ ...props.product, quantity: 1 })}
        className="btn btn-info p-2 mx-1 my-1"
      >
        Add to cart
      </button>
    </div>
  );
};

export default SingleProducts;
