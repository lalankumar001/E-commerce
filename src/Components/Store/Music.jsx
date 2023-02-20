import React, { useState } from "react";
import styles from './Store.module.css';
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

const Music = () => {
  const [addItem , setAddItem] = useState(false);
  const AddItemHandler =() =>{
    setAddItem(addItem +1, 'item added')
  }
  return (
    <div>
      {addItem}
      <header>
        <h1 className="text-center fs-1 p-3 ">Music</h1>
      </header>
      <main>
        <div className="container row justify-content-center mx-5">
          {cartElements.map((product) => (
            <div key={product.title} className="col border w-25">
              <img src={product.imageUrl} alt={product.title} className={styles.zoom}/>
              <h4 className="col-12">{product.title}</h4>
              <p className="">${product.price}</p>
              <button className="btn btn-primary p-2" onClick={AddItemHandler} >Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Music;