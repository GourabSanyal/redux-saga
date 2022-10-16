import { PRODUCT_LIST } from "./constants";

export const productList = async() => {

    let data = fetch("https://jsonplaceholder.typicode.com/todos/1")
    data = await data.json()

    console.log("add to cart action called", data);
    return {
      type: PRODUCT_LIST,
      data: data 
    }
  };