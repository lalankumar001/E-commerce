import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import ContactUs from "./Components/Contact/ContactUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Store from "./Components/Store/Store";
import ProductDetails from "./Components/AllProductDetails/ProductDetails";
import AuthForm from "./Components/Auth/AuthForm";
import AuthContext from "./globalStore/AuthContext";

function App() {
  const [isShown, setShown] = useState(false);
  const authCtx = useContext(AuthContext);

  const modalHandler = () => {
    setShown((prev) => !prev);
  };

  return (
    <div className="App">
      {isShown && <Modal onModalToggle={modalHandler} />}
      <Navbar onModalToggle={modalHandler} />
      <Routes>
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Home" element={<Home />} />
        {authCtx.isLoggedIn && (
          <Route exact path="/Store" element={<Store />} />
        )}
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<ContactUs />} />
        <Route exact path="/" element={<Store />} />
        <Route exact path="/login" element={<AuthForm />} />
        {/* product details page */}
        <Route
          exact
          path="/Store/Product-details"
          element={<ProductDetails />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
