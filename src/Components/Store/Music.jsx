import React, { useState } from "react";
import SingleProducts from "../AllProducts/SingleProducts";
import styles from "./Store.module.css";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
  },
];

const Music = (props) => {
  return (
    <div>
      <h1 className="text-center fs-1 p-3 ">Music</h1>

      {cartElements.map((item) => (
        <SingleProducts key={item.title} product={item} />
      ))}
    </div>
  );
};

export default Music;
