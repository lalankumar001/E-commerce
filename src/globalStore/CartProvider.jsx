import React,{useState} from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    // Declaring initial state
    const[cartItems,setCartItems] =useState({
        items:[],
        totalAmount: 0,
    })

   const addItemHandler = (product) =>{
    console.log(product.title);
    setCartItems(prevState =>({
        items: [...prevState.items,product],
        totalAmount: prevState.totalAmount + product.price

    }))
   }

   const removeItemHandler = (product) =>{
    setCartItems(prevState =>({
        items: prevState.items.filter(item => item.title!== product.title),
        totalAmount: prevState.totalAmount - product.price,
    })) 
   }

   const clearItemsHandler = (product) =>{
    setCartItems(prevState =>({
      ...prevState,
            items: [],
            totalAmount: 0
    }))
   }

    // value that will be received all child components form our global store /state
const cartCtx ={
    items: cartItems.items,
    onAdditems:addItemHandler,
    onRemoveitems:removeItemHandler,
    onClearitems:clearItemsHandler,
    totalAmount:cartItems.totalAmount
}

  return (
    <CartContext.Provider value={cartCtx} >
        {props.children}
    </CartContext.Provider>
    )
}

export default CartProvider