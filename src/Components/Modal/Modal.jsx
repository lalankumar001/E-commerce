import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../globalStore/CartContext";
import styles from "./Modal.module.css";

const modalElement = document.getElementById("modal");

const Modal = (props) => {
  const cartCtx = useContext(CartContext);

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
                <th>Item Name</th>
                <th>Item Image</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className="w-75">
              {cartCtx.items.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td className="h-50vh">
                    <img src={item.imageUrl} alt="" />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <div>
                      <button onClick={() => cartCtx.onRemoveitems(item)}>
                        -
                      </button>
                      <button
                        onClick={() =>
                          cartCtx.onAdditems({ ...item, quantity: 1 })
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <h1>Total ${cartCtx.totalAmount}</h1>
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
