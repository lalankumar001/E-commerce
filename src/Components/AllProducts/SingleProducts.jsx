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
    <div class="container text-center card shadow p-3 mb-5 bg-body-tertiary rounded ">
      <div class="row">
        <div class="col">
          <NavLink to='/Store/Product-details'>
            <img src={props.product.imageUrl} alt={props.product.title} />
          </NavLink>
        </div>
        <div class="col">
          <h2>{props.product.title}</h2>
        </div>
        <div class="col">
          <h2>Price: ${props.product.price}</h2>
        </div>
        <div className={styles.ProductDes}>
          <h2>Last Price :</h2>
          <h1>$ {RandomPrice.toFixed(2)}</h1>
          <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
        </div>

      </div>
      <button
        onClick={() => cartCtx.onAdditems({ ...props.product, quantity: 1 })}
        className="btn btn-info col w-50 p-2 mx-2 mt-3 shadow bg-body-tertiary rounded"
      >
        Add to cart
      </button>
    </div>

    // Above code is form demo

    // <div className="flex  ">
    //   <div className=" ">
    //     <div className=" bg-danger">
    //       <NavLink to='/Store/Product-details'>
    //         <img src={props.product.imageUrl} alt={props.product.title} />
    //       </NavLink>
    //     </div>
    //     <div className="row w-50">
    //     <div className="col">
    //       <h2>{props.product.title}</h2>
    //       </div>
    //       <div className="col">
    //           <h2>Price: ${props.product.price}</h2>
    //       </div>
    //       </div>
    //     <div>
    //       <h2>Last Price :</h2>
    //       <h1>$ {RandomPrice.toFixed(2)}</h1>
    //       <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
    //     </div>

    //   </div>
    //   <button
    //     onClick={() => cartCtx.onAdditems({ ...props.product, quantity: 1 })}
    //     className=""
    //   >
    //     Add to cart
    //   </button>
    // </div>
  );
};

export default SingleProducts;
