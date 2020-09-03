import {combineReducers} from "redux"
import ItemsReducer from "./ItemsReducer"
import CartReducer from "./CartReducer"

const MainReducer = combineReducers({
    itemsState: ItemsReducer,
    cartState: CartReducer

})

export default MainReducer