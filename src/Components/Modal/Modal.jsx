import React, { useContext, useState} from "react";
import ReactDOM from "react-dom";
import CartContext from "../../globalStore/CartContext";
import styles from "./Modal.module.css";

const modalElement = document.getElementById("modal");

const Modal = (props) => {
 const cartCtx =useContext(CartContext)

  return (
    <div>
      {ReactDOM.createPortal(
        <div className={styles.cartModal}>
          {/* Modal close btn and its onclick function and its css like display none */}
          <button onClick={props.onModalToggle}>X</button>
          <h1>Cart</h1>
          <table>
            
            <thead>
              
              <tr>
                <th>Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Quantity</th>
              </tr>

            </thead>
            <tbody className="w-75">
              {cartCtx.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td className="bg-dark h-50vh"><img src={item.imageUrl} alt="" /></td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <div>
                  <button onClick={() =>  cartCtx.onRemoveitems(item)}>-</button>
                  <button onClick={() => cartCtx.onAdditems(item)}>+</button>
                  </div>
                </tr>
              ))}
              <tr>
                <td>
                  <h1>Total $</h1>
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles["purchaseBtn"]}>
            <button onClick={cartCtx.onClearitems}>PURCHASE</button>
          </div>
        </div>,
        modalElement
      )}
    </div>
  );
};

export default Modal;
