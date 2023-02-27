import React from "react";
// Store page Scrolling image / Hero component added below.
import StoreHero from "./StoreHero/StoreHero";
import Merch from "./Merch";
import Music from "./Music";
import T_shirt from "./T_shirt";
import { MdSend } from "react-icons/md";


const Store = () => {
  return (
    <div>
      <StoreHero />
      <form action="" className="text-center mx-5 my-2">
      <input type='search' placeholder="Search Items..." className="w-50 h-100 p-2 text-center bg-dark rounded-pill"  />
      <MdSend  className="fs-1 mx-2 text-danger"/>
      </form>
      <div> <Music /> </div>
      <div className="row w-100 h-75">
    <div className="col">  <T_shirt /> </div>
     <div className="col">   <Merch /> </div>
      </div>
    </div>
  );
};

export default Store;
