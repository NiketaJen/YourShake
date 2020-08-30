import {combineReducers} from "redux"
import ItemsReducer from "./ItemsReducer"
import UserReducer from "./UserReducer"

const MainReducer = combineReducers({
    itemsState: ItemsReducer,
    // userState: UserReducer

})

export default MainReducer