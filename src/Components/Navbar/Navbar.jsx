import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../globalStore/CartContext";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);

  let totalQty = 0;
  cartCtx.items.forEach((item) => (totalQty += item.quantity));

  return (
    <div className={styles.navbaritems}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand fs-2 fw-2 text-info">
            E-comm
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center fs-3 fw-1"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link
                  to="/Home"
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Store" className="nav-link  " href="#">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link" href="#">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Cart item added here */}
        <div
          onClick={props.onModalToggle}
          className="nav-item fs-6 btn btn-info mx-5"
        >
          <FaCartPlus />
          Cart
          {totalQty}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
