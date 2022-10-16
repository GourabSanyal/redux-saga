import { PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
//   if ( action.type === ADD_TO_CART ) {
//     console.log("reducer called -->", action);
//     return action.data;
//   } else {
//     return "nothing is called";
//   }
switch ( action.type ){
    case PRODUCT_LIST:
        console.log('PRODUCT_LIST reducer', action)
        return [action.data]
        
   

    default:
        return data;
    }
};
