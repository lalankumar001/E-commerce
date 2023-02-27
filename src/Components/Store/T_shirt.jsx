import React from "react";
import SingleProducts from "../AllProducts/SingleProducts";
 
const cartElements = [
  {
    title: "jara",

    price: 110,

    imageUrl:
      "https://imgs.search.brave.com/8mlzVi-arraGtvMKIUqECUSh3rwuzRNZORUqD6T5PNI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/V1doYW9fYnNtVWg3/LUpGRVJ1dHF3SGFI/YSZwaWQ9QXBp",  
  },

  {
    title: "Moments",

    price: 120,

    imageUrl:
      "https://imgs.search.brave.com/KHO4xF_Ag1K4S-N1tCjLeXKZj6tfbAuOXXu5DIPbVvo/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/akJsVmg4OXBQZHhC/UG1VeEtfS25BSGFF/NyZwaWQ9QXBp",
  },
];

const T_shirt = (props) => {
  return (
    <div>
      <h1 className="text-center">T-shirt</h1>
      <div>
        {cartElements.map((item) => (
         <SingleProducts key={item.title} product={item} />
        ))}
      </div>
    </div>
  );
};

export default T_shirt;
