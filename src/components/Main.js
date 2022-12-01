import { addToCart, removeFromCart, emptyCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';

function Main() {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.productList)
  console.log('data from main compoment from saga', data);

  const product = {
    name : 'iPhone 13',
    price : '60,000',
    brand : 'Apple',
    color : 'Red'
  }

  return (
    <div >
     <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
     <button onClick={() => dispatch(removeFromCart(product))}>Remove from cart</button>
     <button onClick={() => dispatch(emptyCart(product))}>Empty cart</button>
     <button onClick={() => dispatch(productList(product))}>Get product list</button>
    </div>
  );
}

export default Main;
