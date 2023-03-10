import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../globalStore/AuthContext";
import CartContext from "../../globalStore/CartContext";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  let totalQty = 0;
  cartCtx.items.forEach((item) => (totalQty += item.quantity));

  return (
    <div className={styles.navbaritems}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand fs-2 fw-2 text-info">
            E-market
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
              {authCtx.isLoggedIn && (
                <li className="nav-item">
                  <Link to="/Store" className="nav-link">
                    Store
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                {!authCtx.isLoggedIn && (
                  <Link to="/Login" className="nav-link btn btn-primary">
                    Login
                  </Link>
                )}
                {authCtx.isLoggedIn && (
                  <button className="btn btn-danger"
                    onClick={() => {
                      authCtx.onLogout();
                    }}
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* Cart item added here */}
        <div
          onClick={props.onModalToggle}
          className="nav-item fs-6 btn btn-info mx-5"
        >
          Cart <FaCartPlus />
          {/* Cart Badge below */}
          <span className="badge text-bg-dark ">{totalQty}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
