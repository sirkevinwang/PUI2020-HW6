import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';

import OriginalImage from './img/item-images/the-og.png';
import BlackberryImage from './img/item-images/bb.png';

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/">
            <img className="logo" id="logo" alt="logo" src="img/logo.png" />
          </Link>
          {/* Links in Navbar */}
          <div className="links-container">
            <Link className="p-4 px-2" to="/shop"><span>Shop</span></Link>
            <a className="p-4 px-2"><span>Account</span></a>
            <a className="p-4 px-2"><span>Cart</span></a>
          </div>
        </nav>

      </div>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/products/original" render={(props) => (
        <ProductDetail {...props} id="og" productName="The Original" price="3.99" imgSrc={OriginalImage}/>
      )}/>
      <Route path="/products/blackberry" render={(props) => (
        <ProductDetail {...props} id="bb" productName="Blackberry Delight" price="4.99" imgSrc={BlackberryImage}/>
      )} />
    </HashRouter>
  );
}

export default App;
