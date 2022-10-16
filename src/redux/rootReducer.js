import { combineReducers } from "redux";
import { productData } from "./produceReducer";
import { cartData } from "./reducer";

export default combineReducers({
    cartData,
    productData
});