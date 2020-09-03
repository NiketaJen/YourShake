import React, {useEffect} from 'react';
// import CartCard from "./carts/CartCard"
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

// const cartItemLink = "http://localhost:3000/cartItems"

function CartCollection(){
    let dispatch = useDispatch()

//     let addedItems = useSelector(state => state.cartState.cartItems)
//   console.log(addedItems)
//     useEffect(()=>{
//       fetch(cartItemLink,{
//         credentials:"include"
//       })
//       .then(response => response.json())
//       .then(fetchCartItems => {
//         console.log(fetchCartItems)
//         dispatch({type:"GET_CART_ITEMS", cartItems:fetchCartItems})
//       })
//     },[])

    // const renderedItems = allItems.map(item => (
    //     <CartCard key={item.id} item={item}/>
    //   ))
  
      
  
      return(
          <section className="CartDiv" >
              <div className="ProdLink">
              <Link to="/Products">Continue Shopping</Link> 
              </div>
              <div className="HomeLink">
              <Link to="/">Home</Link>
              </div>
               
            <h2> Shopping Cart</h2>
              {/* {renderedItems} */}
          </section>
          
      )
  
  }
  export default CartCollection;