import React, { useState } from "react";
import SingleProducts from "../AllProducts/SingleProducts";
const cartElements = [
  {
    title: "Modern refrigerator and other household appliances",

    price: 100,

    imageUrl: "https://imgs.search.brave.com/C33YCZkfVjPM6vSlc2WVcnqFa_VHWULra4jklaXsonY/rs:fit:960:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/WElfYjdDTmphVjVq/TjVvQUlCNnZBSGFE/cSZwaWQ9QXBp",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://imgs.search.brave.com/ogWCWbpFWqcA6ODL5rWUWKzGBf3Vz67zL4hm81HlEyg/rs:fit:684:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/UkltTkJWT0dJZFV5/dGdzOXo0SHdnSGFG/SSZwaWQ9QXBp",
  },
];

const Merch = (props) => {
  return (
    <div className="row-2">
      <div>
        <h1 className="text-center">Electronic</h1>
        {cartElements.map((item) => (
       <div className="col">   <SingleProducts key={item.title} product={item} /> </div>
        ))}
      </div>
    </div>
  );
};

export default Merch;
