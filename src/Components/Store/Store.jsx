import React from "react";
import Music from "./Music";
import Merch from "./Merch";
import styles from './Store.module.css'


const productsArr = [
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
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Store = () => {

  return <div className={styles.StoreItems}>
    <header>
    <h1>The Generics</h1>
    </header>
    <main>
    <div className="">
      {productsArr.map((product) => (
        <div key={product.title} className="container">
          <img src={product.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
        
      ))}
    </div>
    </main>

    <Music />
    <Merch />

  </div>;
};

export default Store;
