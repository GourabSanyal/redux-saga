import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action) => {
//   if ( action.type === ADD_TO_CART ) {
//     console.log("reducer called -->", action);
//     return action.data;
//   } else {
//     return "nothing is called";
//   }
switch ( action.type ){
    case ADD_TO_CART:
        console.log('ADD_TO_CART reducer', action)
        return [...data, action.data]
        
    case REMOVE_FROM_CART:
        console.log('REMOVE_FROM_CART reducer', action)
        data.length = data.length ? data.length - 1 : []
        return [...data]

    case EMPTY_CART:
        console.log('EMPTY_CART reducer', action)
        data = []
        return [...data]

    default:
        return data;
    }
};
