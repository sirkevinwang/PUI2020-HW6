import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import { HashRouter, Route, Link } from "react-router-dom";

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
            <a className="p-4 px-2" href="./shop.html"><span>Shop</span></a>
            <a className="p-4 px-2"><span>Account</span></a>
            <a className="p-4 px-2"><span>Cart</span></a>
          </div>
        </nav>
        
      </div>
      <Route exact path="/" component={Home}/>
      <Route path="/shop" component={Shop}></Route>
    </HashRouter>
  );
}

export default App;
