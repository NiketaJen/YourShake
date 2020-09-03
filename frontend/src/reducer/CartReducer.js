const initialState = {
    cartItems: []
}

function CartReducer(state = initialState, action) {
  switch(action.type){
    case "GET_CART_ITEMS": 
    // let newItems = action.items.filter()
   
        return {
            ...state, 
            cartItems: action.cartItems
        }
        default:
            return state
  }
//   case "ADD_TO_CART":
//     addToOrder = (e, item) => {
//         item.added = true;
//         item.qty = 1;
//         const orderItems = [...this.state.orderItems, item];
//         this.setState({ orderItems });
//       };
    



    
  }

  export default CartReducer