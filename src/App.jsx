import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import Store from "./Components/Store/Store";

function App() {
  const [isShown, setShown] = useState(false);

  const modalHandler = () => {
    setShown((prev) => !prev);
  };

  return (
    <div className="App">
      {isShown && <Modal onModalToggle={modalHandler} />}
      <Navbar onModalToggle={modalHandler} />
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Store />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
