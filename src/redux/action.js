import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants";

export const addToCart = (data) => {
  console.log("add to cart action called", data);
  return {
    type: ADD_TO_CART,
    data: data 
  }
};
export const removeFromCart = (data) => {
  console.log("remove action called", data);
  return {
    type: REMOVE_FROM_CART,
    data: data 
  }
};
export const emptyCart = (data) => {
  console.log("Empty action called", data);
  return {
    type: EMPTY_CART,
    data: data 
  }
};
