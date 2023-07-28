import { combineReducers } from "redux";
import IceCreamReducer from "./icecream/IceCreamReducer"
import CakeReducer from "./cake/CakeReducer"
import UserReducer from "./users/UserReducer"

// el Msol 3an share data fe el component 
// 3an trek ano by5d el reducer wy3ml modifier
// 3l4an 3ndna akter men reducer function 
export const rootReducer = combineReducers({
  iceCream: IceCreamReducer,
  cake : CakeReducer,
  users: UserReducer
})