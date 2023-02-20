import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const Cart = (props) => {
  return (
      <div onClick={props.modalHandler} className="nav-item fs-6 btn btn-info mx-5">
          <FaCartPlus />
          Cart
        </div>
  )
}

export default Cart