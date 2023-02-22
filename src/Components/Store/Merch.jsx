import React, { useState } from "react";
import SingleProducts from "../AllProducts/SingleProducts";
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
];

const Merch = (props) => {
  return (
    <div className="container">
      <div>
        <h1 className="text-center fs-1 p-3 ">Merch</h1>
        {cartElements.map((item) => (
          <SingleProducts key={item.title} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Merch;
