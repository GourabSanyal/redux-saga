export const addToCart = (data) => {
  console.log("Action called", data);
  return {
    type: 'ADD_TO_CART',
    data: data 
  }
  
};
