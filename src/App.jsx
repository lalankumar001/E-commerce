import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Store from './Components/Store/Store'
import Modal from './Components/Modal/Modal'
import './App.css'


function App() {
 const [isShown, setShown] = useState(false);
 const modalHandler =()=>{
  setShown(prev => !prev)
  console.log('button clicked')
 }
 
  return (
    <div className="App">
    {isShown && <Modal />}
     <Navbar modalHandler={modalHandler} />
     <Routes>
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Store" element={<Store />} />
      <Route path="/About" element={<About />} />
      <Route path="/" element={<Store />} />
     </Routes>

     <Footer />
       </div>
  )
}

export default App
