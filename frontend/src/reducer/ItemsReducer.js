
const initialState = {
    items: [],
    cartItems: []
}

function ItemsReducer(state = initialState, action) {
  switch(action.type){
    case "GET_ITEMS": 
    // let newItems = action.items.filter()
   
        return {
            ...state, 
            items: action.items
        }
        default:
            return state
    }
     

    



    
  }

  export default ItemsReducer