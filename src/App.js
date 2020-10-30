import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
import useLocalStorage from './hooks/UseLocalStorage';

import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

import OriginalImage from './img/item-images/the-og.png';
import BlackberryImage from './img/item-images/bb.png';
import logo from './img/logo.png'

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cart] = useLocalStorage('cart', []);

  useEffect(() => {
    // when app loaded
    setCartSize(cart.length);

    // when storage updated
    const handler = () => { setCartSize(cart.length); };
    window.addEventListener('storage', handler);
    return() => window.removeEventListener('storage', handler);
  }, []);

  return (
    <HashRouter>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/">
            <img className="logo" id="logo" alt="logo" src={logo} />
          </Link>
          {/* Links in Navbar */}
          <div className="links-container">
            <Link className="p-4 px-2" to="/shop"><span>Shop</span></Link>
            <span className="p-4 px-2">Account</span>
            <Link className="p-4 px-2 notification" to="/cart" style={{paddingRight: "0px"}}>
              <span>Cart </span><span className="badge">{ cartSize }</span>
            </Link>
          </div>
        </nav>

      </div>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/products/original" render={(props) => (
        <ProductDetail {...props} id="og" productName="The Original" price="3.99" imgSrc={OriginalImage} setCartSize={setCartSize} />
      )}/>
      <Route path="/products/blackberry" render={(props) => (
        <ProductDetail {...props} id="bb" productName="Blackberry Delight" price="4.99" imgSrc={BlackberryImage} setCartSize={setCartSize} />
      )} />
      <Route path="/cart" render={(props) => (
        <Cart {...props} />
      )} />
    </HashRouter>
  );
}

export default App;
