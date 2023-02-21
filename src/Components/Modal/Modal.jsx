import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
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
                <th>Items</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.items.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
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
            <button>PURCHASE</button>
          </div>
        </div>,
        modalElement
      )}
    </div>
  );
};

export default Modal;
