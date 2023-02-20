import React,{useState} from "react";
import Music from "./Music";
import Merch from "./Merch";
import Cart from "../Cart/Cart";
import styles from './Store.module.css'
import Modal from "../Modal/Modal";

const Store= ()=>{
  const [isShown, setShown] = useState(false);
 const modalHandler =()=>{
  setShown(prev => !prev)
 }
 
  return(
    <div className={styles.store}>
      <Music/>
      <Merch/>
    {/* Cart Modal Showing Button in Store Page Wher all data comes from Merch and Music components */}
      <div className={styles['cartbtn']}>
      {isShown && <Modal />}
       <Cart   modalHandler={modalHandler}/>
      </div>
    </div>
  )
}

export default Store;
