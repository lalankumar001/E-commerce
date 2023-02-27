import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../globalStore/CartContext";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from './SingleProduct.module.css';

const SingleProducts = (props) => {
  const RandomPrice = Math.random() * 999;
  const cartCtx = useContext(CartContext);
  return (
    <div className="container text-center card shadow p-3 mb-5 bg-body-tertiary rounded ">
      <div className="row">
        <div className="col ">
          <NavLink to='/Store/Product-details'>
            <img src={props.product.imageUrl} alt={props.product.title} />
          </NavLink>
          <h2>{props.product.title}</h2>
          <h2>Price: ${props.product.price}</h2>
          <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
        </div>
          <h4>Last Price :</h4>
          <h5 className="text-decoration-line-through">$ {RandomPrice.toFixed(2)}</h5>
        <div className="col">
        </div>

      </div>
      <button
        onClick={() => cartCtx.onAdditems({ ...props.product, quantity: 1 })}
        className="btn btn-info col w-100 p-2 mx-2 mt-3 shadow bg-body-tertiary rounded"
      >
        Add to cart
      </button>
    </div>
    );
};

export default SingleProducts;
