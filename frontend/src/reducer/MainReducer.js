import {combineReducers} from "redux"
import ItemsReducer from "./ItemsReducer"
// import CartReducer from "./CartReducer"

const MainReducer = combineReducers({
    itemsState: ItemsReducer,
    itemState: ItemsReducer,
    cartItemsState: ItemsReducer,
    // cartState: CartReducer

})

export default MainReducer