
const initialState = {
    items: [],
    item: [],
    cartItems: [],
    count: 0
}

function ItemsReducer(state = initialState, action) {
  switch(action.type){
    case "GET_ITEMS": 
    // debugger
    // let newItems = action.items.filter()
   
        return {
            ...state, 
            items: action.items
        }
        break;
    case "GET_ITEM": 
    // debugger
    // let newItems = action.items.filter()
    

        return {
            ...state, 
            item: action.item
        }
        break;
    case "ADD_TO_CART":
        console.log("add item")
        // debugger
       return{
           ...state,
           cartItems: action.cartItems
       }
        break;
        default:
            return state   
    }; 
    
  };

  export default ItemsReducer