import './App.css';

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <nav class="navbar">
        <a href="./index.html">
          <img class="logo" id="logo" alt="logo" src="img/logo.png" />
        </a>
        {/* Links in Navbar */}
        <div class="links-container">
          <a class="p-4 px-2" href="./shop.html"><span>Shop</span></a>
          <a class="p-4 px-2"><span>Account</span></a>
          <a class="p-4 px-2"><span>Cart</span></a>
        </div>
      </nav>
      {/* Cover + Headings */}
      <div class="cover center-parent text-center">
        <div class="center">
          <h2 class="text-center">Cinnamon Rolls</h2>
          <h3 class="mb-4 text-center">Freshly Baked.</h3>
          <a href="./shop.html"><span class=" round-btn">Shop Now</span></a>
        </div>
      </div>
    </div>
  );
}

export default App;
