import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const SingleProduct = (props) => {
  
  const cartCtx = useContext(CartContext);

  return (
    <div className="container row justify-content-center mx-5">
      <div className="col border w-25">
        <img src={props.product.imageUrl} alt={props.product.title} />
        <h4 className="col-12">{props.product.title}</h4>
        <p>${props.product.price}</p>
        <button
          className="btn btn-primary p-2"
          onClick={() => cartCtx.onAddItems(props.product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
