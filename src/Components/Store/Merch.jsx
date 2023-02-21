import React, { useState } from "react";
import SingleProduct from "../products/SingleProduct";
import styles from "./Store.module.css";
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
  {
    title: "Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",

    quantity: 1,
  },
];

const Merch = () => {
  return (
    <div>
      <h1 className="text-center fs-1 p-3 ">Merch</h1>
      {cartElements.map((item) => (
        <SingleProduct key={item.title} product={item} />
      ))}
    </div>
  );
};

export default Merch;
