import logo from './logo.svg';
import './App.css';
import { addToCart } from './redux/action'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  const product = {
    name : 'iPhone 13',
    price : '60,000',
    brand : 'Apple',
    color : 'Red'
  }

  return (
    <div className="App">
     <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
