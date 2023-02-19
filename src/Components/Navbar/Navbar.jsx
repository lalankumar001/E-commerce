import React from 'react'
import Cart from '../Cart/Cart'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbaritems}>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand fs-2 fw-2 text-info" href="#">E-comm</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center fs-3 fw-1" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="#">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
  <Cart />
</nav>
    </div>
  )
}

export default Navbar