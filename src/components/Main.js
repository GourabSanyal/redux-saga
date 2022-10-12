import { addToCart, removeFromCart, emptyCart } from '../redux/action'
import { useDispatch } from 'react-redux';

function Main() {

  const dispatch = useDispatch()

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
    </div>
  );
}

export default Main;
