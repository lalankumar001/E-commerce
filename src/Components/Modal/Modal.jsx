import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";


const modalElement = document.getElementById("modal");

const Modal = () => {
  return (
    <div className="">
      {ReactDOM.createPortal(
        <div className={styles.cartModal}>
          {/* Modal close btn and its onclick function and its css like display none */}
          <button onClick={() => (modalElement.style.display = "none" )}>
            X
          </button>
          <h1>Cart</h1>
          <table>
            <tbody>
              <thead>
                <tr>
                  <th>Items</th>

                  <th>Price</th>

                  <th>Quantity</th>
                </tr>
              </thead>
            </tbody>
            <h1>Total $</h1>
          </table>

          <div className={styles["purchaseBtn"]}>
            <button onClick={()=>alert('Item has been purchase') }>PURCHASE</button>
          </div>
        </div>,
        modalElement
      )}
    </div>
  );
};

export default Modal;
