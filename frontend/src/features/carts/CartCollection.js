import React, {useEffect} from 'react';
// import CartCard from "./carts/CartCard"
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

// const cartItemLink = "http://localhost:3000/cartItems"

function CartCollection(){
    let dispatch = useDispatch()
    let cartItems= useSelector(state => state.cartItemsState.cartItems)
    console.log(cartItems)

    let addToCart = (cartItems) => {
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if (item.id === cartItems.id){
               item.count++;
               alreadyInCart = true 
            }
        });
        if(!alreadyInCart){
            
        }
    }

    // let cartItem = state.items.find(item=> item.id === action.id)
    // let existing_item = (cartItems.find(item => action.id === item.id))
    // if (existing_item){
    //     cartItem.quantity += 1
        
    // } 
    // else{
    //     cartItem.quantity = 1
    //     let newTotal = state.total + cartItem.price
    //     return{
    //         ...state,
    //         cartItems: [...state.cartItems, cartItem],
    //         total: newTotal
    //     }
    // }

    // addToCart = (prod) => {
    //   let newProd = {
    //     title: prod.title,
    //     price: prod.price,
    //     description: prod.description,
    //     image: prod.image,
    //   };
    //   let current_cart =
    //     prod.carts.length == 1 ? prod.carts[0] : prod.carts.slice(-1)[0];
    //   fetch(`http://localhost:3000/carts/${current_cart.id}`, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       user_id: current_cart.user_id,
    //       newProd: newProd,
    //     }),
    //   });
    // };

    // const shoppingCartItems = cartItems.map(item => (
    //   <CartCard key={item.id} item={item}/>
    // ))

  //   const shoppingCartItems = cartItems.map(item => (
  //   <div className="CartItemList" key={item.id} item={item}>
  //     <img src={item.image}  />
  //     <p>{item.name}</p>
  //     <p> {item.price} </p>
  //   </div>
  // ))
      
  
      return(
          <section className="CartDiv" >
              <div className="ProdLink">
              <Link to="/Products">Continue Shopping</Link> 
              </div>
              <div className="HomeLink">
              <Link to="/">Home</Link>
              </div>
               
            <h2> Shopping Cart</h2>
              {/* {shoppingCartItems} */}
          </section>
          
      )
  
  }
  export default CartCollection;